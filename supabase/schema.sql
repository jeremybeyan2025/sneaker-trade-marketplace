-- Sneaker Trade Marketplace MVP Schema

create type listing_status as enum (
  'draft','active','sold_pending_ship','in_authentication','authenticated','failed_auth','completed','cancelled'
);

create type sneaker_condition as enum ('new','new_defects','pre_owned');
create type authentication_result as enum ('pending','passed','failed','needs_more_info');
create type trade_status as enum ('draft','sent','accepted','both_paid','awaiting_shipments','in_authentication','completed','cancelled','failed');

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  display_name text,
  avatar_url text,
  seller_rating numeric default 100,
  stripe_account_id text,
  created_at timestamptz default now()
);

create table sneaker_models (
  id uuid primary key default gen_random_uuid(),
  brand text not null,
  model text not null,
  sku text unique not null,
  colorway text,
  release_year int,
  retail_price numeric,
  created_at timestamptz default now()
);

create table listings (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid references profiles(id) not null,
  sneaker_model_id uuid references sneaker_models(id) not null,
  size text not null,
  condition sneaker_condition not null,
  ask_price numeric not null check (ask_price > 0),
  status listing_status default 'draft',
  description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table listing_photos (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid references listings(id) on delete cascade,
  photo_url text not null,
  photo_type text not null,
  created_at timestamptz default now()
);

create table orders (
  id uuid primary key default gen_random_uuid(),
  buyer_id uuid references profiles(id) not null,
  seller_id uuid references profiles(id) not null,
  listing_id uuid references listings(id) not null,
  amount numeric not null,
  platform_fee numeric not null default 0,
  stripe_payment_intent_id text,
  status listing_status default 'sold_pending_ship',
  created_at timestamptz default now()
);

create table trades (
  id uuid primary key default gen_random_uuid(),
  proposer_id uuid references profiles(id) not null,
  receiver_id uuid references profiles(id) not null,
  cash_difference numeric default 0,
  stripe_payment_intent_id text,
  status trade_status default 'sent',
  created_at timestamptz default now()
);

create table trade_items (
  id uuid primary key default gen_random_uuid(),
  trade_id uuid references trades(id) on delete cascade,
  owner_id uuid references profiles(id) not null,
  listing_id uuid references listings(id) not null
);

create table authentication_reviews (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid references listings(id),
  order_id uuid references orders(id),
  trade_id uuid references trades(id),
  reviewer_id uuid references profiles(id),
  result authentication_result default 'pending',
  notes text,
  created_at timestamptz default now()
);

create table shipments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id),
  trade_id uuid references trades(id),
  carrier text,
  tracking_number text,
  label_url text,
  direction text not null,
  status text default 'label_created',
  created_at timestamptz default now()
);

create table disputes (
  id uuid primary key default gen_random_uuid(),
  opened_by uuid references profiles(id) not null,
  order_id uuid references orders(id),
  trade_id uuid references trades(id),
  reason text not null,
  status text default 'open',
  created_at timestamptz default now()
);

alter table profiles enable row level security;
alter table listings enable row level security;
alter table orders enable row level security;
alter table trades enable row level security;
