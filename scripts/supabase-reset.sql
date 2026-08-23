-- Wipes all data from the `public` schema while leaving users intact.
--
-- Auth users live in the `auth` schema and are never touched by this script.
-- If you mirror users into a public table (e.g. public.profiles), list it in
-- `keep` below so it survives too.
--
-- Run it in the Supabase SQL editor, or:  ./scripts/supabase-reset.sh
--
-- SAFETY: dry_run is TRUE by default. It reports what it would delete and
-- changes nothing. Set it to FALSE only once the list looks right.

do $$
declare
  keep      text[]  := array['users', 'profiles'];  -- public tables to preserve
  dry_run   boolean := true;                        -- <-- set false to actually delete

  t         record;
  targets   text[]  := '{}';
  blocked   text[]  := '{}';
begin
  -- Collect every ordinary table in `public` that is not on the keep list.
  for t in
    select c.relname
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
     where n.nspname = 'public'
       and c.relkind = 'r'
       and not (c.relname = any(keep))
     order by c.relname
  loop
    targets := targets || format('public.%I', t.relname);
  end loop;

  if cardinality(targets) = 0 then
    raise notice 'Nothing to do - no tables outside the keep list.';
    return;
  end if;

  -- TRUNCATE ... CASCADE also empties any table holding a foreign key INTO a
  -- target. Abort if that would silently wipe a table we were told to keep.
  select array_agg(distinct src.relname)
    into blocked
    from pg_constraint fk
    join pg_class src on src.oid = fk.conrelid
    join pg_class tgt on tgt.oid = fk.confrelid
    join pg_namespace sn on sn.oid = src.relnamespace
    join pg_namespace tn on tn.oid = tgt.relnamespace
   where fk.contype = 'f'
     and sn.nspname = 'public'
     and tn.nspname = 'public'
     and src.relname = any(keep)
     and not (tgt.relname = any(keep));

  if blocked is not null then
    raise exception
      'Aborted: kept table(s) % reference tables being truncated, so CASCADE would empty them too. Add the referenced tables to `keep`, or drop those foreign keys first.',
      array_to_string(blocked, ', ');
  end if;

  raise notice 'Keeping   : %', array_to_string(keep, ', ');
  raise notice 'Truncating: % table(s)', cardinality(targets);
  raise notice '            %', array_to_string(targets, ', ');

  if dry_run then
    raise notice '--- DRY RUN: nothing was deleted. Set dry_run := false to execute. ---';
  else
    execute 'truncate table ' || array_to_string(targets, ', ') || ' restart identity cascade';
    raise notice '--- Done. % table(s) emptied, identity sequences reset. ---', cardinality(targets);
  end if;
end $$;
