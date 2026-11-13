import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen'
import { registerSW } from 'virtual:pwa-register';
import { Toaster } from './components/ui/toast'

const router = createRouter({ routeTree, basepath: '/stocklings/' })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

registerSW({ immediate: true })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>,
)