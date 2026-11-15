import LoginForm from '@/components/pages/login/loginForm';
import { Button } from '@/components/ui/button';
import { InitCsrfToken } from '@/services/api-client';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
    beforeLoad: async (_context) => {
        await InitCsrfToken();
    },
    component: LoginPage,
});

function LoginPage() {
    const navigate = useNavigate();

    return (<div className='flex flex-col w-full items-center'>
        <LoginForm />
        <div className='flex flex-col gap-1 items-center'>
            <div className='text-sm'>Nie masz konta?</div>
            <Button variant="link" onClick={() => navigate({ to: "/register" })}>Zarejestruj się</Button>
        </div>
    </div>
    )
}