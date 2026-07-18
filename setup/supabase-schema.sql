-- ============================================================
-- WeddingLink – zentrale RSVP-Datenbank (Supabase)
-- Einmalig im Supabase SQL-Editor ausführen.
--
-- Sicherheitsmodell:
--   * Gäste dürfen anonym Rückmeldungen EINREICHEN (Insert).
--   * LESEN ist ohne den persönlichen Zugangscode des Brautpaars
--     unmöglich – es gibt keine SELECT-Policy, nur die Funktion
--     dashboard_data(zugangscode).
--   * Jedes Brautpaar sieht ausschließlich die eigene Hochzeit.
-- ============================================================

create table if not exists public.weddings (
  id text primary key,               -- z. B. 'einladung-1' (= weddingId in rsvp-config.js)
  couple text not null,              -- Anzeigename, z. B. 'Sophia & Alexander'
  dashboard_token text not null unique
);

create table if not exists public.rsvps (
  id bigint generated always as identity primary key,
  wedding_id text not null references public.weddings(id),
  name text not null,
  email text,
  attendance text not null check (attendance in ('yes', 'no')),
  persons integer not null default 1 check (persons between 1 and 50),
  events jsonb not null default '[]'::jsonb,
  food text,
  message text,
  created_at timestamptz not null default now()
);

alter table public.weddings enable row level security;
alter table public.rsvps enable row level security;

-- Gäste dürfen (anonym) Rückmeldungen einreichen …
create policy "rsvps_insert_anon" on public.rsvps
  for insert to anon with check (true);
-- … aber es gibt bewusst KEINE Select-Policy: ohne Zugangscode liest niemand etwas.

-- Lesen ausschließlich über den persönlichen Zugangscode:
create or replace function public.dashboard_data(p_token text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  w weddings%rowtype;
begin
  select * into w from weddings where dashboard_token = p_token;
  if not found then
    return null;  -- falscher Code: keinerlei Daten
  end if;
  return jsonb_build_object(
    'wedding', jsonb_build_object('id', w.id, 'couple', w.couple),
    'rsvps', coalesce(
      (select jsonb_agg(to_jsonb(r) - 'wedding_id' order by r.created_at desc)
         from rsvps r
        where r.wedding_id = w.id),
      '[]'::jsonb)
  );
end;
$$;

revoke all on function public.dashboard_data(text) from public;
grant execute on function public.dashboard_data(text) to anon;

-- ============================================================
-- Hochzeiten anlegen – EINEN ZUFÄLLIGEN CODE pro Kunde einsetzen!
-- Zufallscode erzeugen z. B. mit:  select encode(gen_random_bytes(16), 'hex');
-- ============================================================
insert into public.weddings (id, couple, dashboard_token) values
  ('einladung-1', 'Sophia & Alexander',    'HIER-ZUFALLSCODE-1'),
  ('einladung-2', 'Braut & Bräutigam',     'HIER-ZUFALLSCODE-2'),
  ('einladung-3', 'Isabella & Maximilian', 'HIER-ZUFALLSCODE-3'),
  ('einladung-4', 'Martina & Javier',      'HIER-ZUFALLSCODE-4')
on conflict (id) do nothing;
