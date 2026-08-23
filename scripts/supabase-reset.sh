#!/usr/bin/env bash
# Runs supabase-reset.sql against your database.
#
#   export DATABASE_URL="postgresql://postgres:PASSWORD@db.<ref>.supabase.co:5432/postgres"
#   ./scripts/supabase-reset.sh
#
# Connection string: Supabase dashboard > Project Settings > Database > Connection string > URI

set -euo pipefail

if [[ -z "${DATABASE_URL:-}" ]]; then
  echo "DATABASE_URL is not set. See the header of this script." >&2
  exit 1
fi

SQL_FILE="$(dirname "$0")/supabase-reset.sql"

if grep -q 'dry_run   boolean := false' "$SQL_FILE"; then
  echo "!! dry_run is OFF - this will PERMANENTLY delete data."
  read -r -p "Type the database host to confirm: " answer
  host="$(sed -E 's|.*@([^:/]+).*|\1|' <<<"$DATABASE_URL")"
  if [[ "$answer" != "$host" ]]; then
    echo "Mismatch - aborted." >&2
    exit 1
  fi
fi

psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$SQL_FILE"
