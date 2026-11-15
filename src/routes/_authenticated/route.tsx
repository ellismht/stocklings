import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { HTTPError } from 'ky';
import Navigation from '@/components/layout/Navigation';
import { getCurrentUserQueryOptions } from '@/services/identity-service';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context }) => {
    try {
      await context.queryClient.query(getCurrentUserQueryOptions());
    } catch (error) {
      if (error instanceof HTTPError && error.response.status === 401)
        throw redirect({ to: "/login" })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
    <Outlet />
    <Navigation />
  </div>)
}
