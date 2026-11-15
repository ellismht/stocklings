import TopBar from '@/components/layout/TopBar';
import { Spinner } from '@/components/ui/spinner';
import { Toaster } from '@/components/ui/toast';
import { useAutoUpdate } from '@/lib/hooks/useAutoUpdate';
import { type QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

interface RouterContext {
    queryClient: QueryClient
}

const RootLayout = () => {
    const isLoading = useAutoUpdate();

    return (
        <div className="h-dvh flex flex-col overflow-hidden">
            <TopBar />
            <div className="flex flex-1 min-h-0 overflow-hidden mt-9.5 mb-13">
                {isLoading ? <Spinner /> : <Outlet />}
            </div>
            <Toaster />
        </div>
    )
};


export const Route = createRootRouteWithContext<RouterContext>()({ component: RootLayout });

{/* <ScrollArea className='h-[calc(100dvh-88.5px-env(safe-area-inset-bottom))] min-h-0 flex-1'>
                    <Outlet />
                </ScrollArea> */}