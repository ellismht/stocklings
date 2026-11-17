import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen'
import { registerSW } from 'virtual:pwa-register';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { InitCsrfToken } from './services/api-client';

registerSW({ immediate: true });

const queryClient = new QueryClient();

const router = createRouter({ routeTree, basepath: '/stocklings/', context: { queryClient } })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

await InitCsrfToken();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)