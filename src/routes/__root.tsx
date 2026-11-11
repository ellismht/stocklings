import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Spinner } from '@/components/ui/spinner';
import { useAutoUpdate } from '@/lib/hooks/useAutoUpdate';
import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => {
    const isLoading = useAutoUpdate();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="h-dvh flex flex-col overflow-hidden">
            <TopBar />
            <div className="flex flex-1 min-h-0 overflow-hidden mt-9.5 mb-13">
                <ScrollArea className='h-[calc(100dvh-88.5px-env(safe-area-inset-bottom))] min-h-0 flex-1'>
                    <Outlet />
                </ScrollArea>
            </div>
            <Navigation />
        </div>
    )
};


export const Route = createRootRoute({ component: RootLayout });