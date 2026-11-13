import { LoginForm } from '@/components/pages/login/loginForm';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
    component: LoginPage,
})

function LoginPage() {
    return (
        <LoginForm />
    )
}

export default LoginPage;