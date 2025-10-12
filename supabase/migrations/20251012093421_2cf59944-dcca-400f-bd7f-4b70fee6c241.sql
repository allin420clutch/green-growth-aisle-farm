-- Create admin role system
create type public.app_role as enum ('admin', 'customer');

-- Create user roles table
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- Create security definer function to check roles
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- Drop dangerous product write policies
drop policy "Allow authenticated users to insert products" on public.products;
drop policy "Allow authenticated users to update products" on public.products;
drop policy "Allow authenticated users to delete products" on public.products;

-- Add admin-only product write policies
create policy "Admins can insert products"
on public.products
for insert
to authenticated
with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update products"
on public.products
for update
to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete products"
on public.products
for delete
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- Restrict contact_messages to admin-only viewing
create policy "Only admins can view contact messages"
on public.contact_messages
for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- Restrict newsletter_subscribers to admin-only viewing
create policy "Only admins can view newsletter subscribers"
on public.newsletter_subscribers
for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));