import Navigation from '@/components/layout/Navigation'
import { Spinner } from '@/components/ui/spinner';
import { useAutoUpdate } from '@/lib/hooks/useAutoUpdate';
import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => {
    const isLoading = useAutoUpdate();

    if(isLoading) {
        return <Spinner/>;
    }

    return (
        <>
            <main className='mb-14'>
                <Outlet />
            </main>
            <Navigation />
        </>
    )
};


export const Route = createRootRoute({ component: RootLayout });