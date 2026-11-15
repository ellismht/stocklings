import { LoginForm } from '@/components/pages/login/loginForm';
import { Button } from '@/components/ui/button';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
    component: LoginPage,
})

function LoginPage() {
    const navigate = useNavigate();
    return (<div className='flex flex-col w-full items-center'>
        <LoginForm />
        <div>
            Nie masz konta? LOL lepiej <Button variant="link" onClick={() => navigate({ to: "/register" })}>Zarejestruj się</Button>
        </div>
    </div>
    )
}

export default LoginPage;