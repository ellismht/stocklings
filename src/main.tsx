import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen'
import { registerSW } from 'virtual:pwa-register';
import { InitCsrfToken } from './services/api-client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

registerSW({ immediate: true });

const queryClient = new QueryClient();

const router = createRouter({ routeTree, basepath: '/stocklings/', context: {queryClient} })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

await InitCsrfToken();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)