import { getCurrentUserQueryOptions } from '@/services/identity-service';
import { createFileRoute, redirect } from '@tanstack/react-router'
import { HTTPError } from 'ky';

export const Route = createFileRoute('/')({
  beforeLoad: async ({ context }) => {
      try {
        await context.queryClient.query(getCurrentUserQueryOptions());
      } catch (error) {
        if (error instanceof HTTPError && error.response.status === 401)
          throw redirect({ to: "/login" });

        throw error;
      }

      throw redirect({to: "/state"});
    },
});

