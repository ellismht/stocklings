import Navigation from '@/components/layout/Navigation'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
    <>
        <div className="flex h-dvh flex-col overflow-hidden">
            <main className='min-h-0 flex-1 overflow-y-auto mb-14'>
                <Outlet />
            </main>
        </div>
        <Navigation />
        <TanStackRouterDevtools />
    </>
)

export const Route = createRootRoute({ component: RootLayout })