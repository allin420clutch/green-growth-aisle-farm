-- Add RLS policy to user_roles table so users can view their own roles
create policy "Users can view their own roles"
on public.user_roles
for select
to authenticated
using (auth.uid() = user_id);