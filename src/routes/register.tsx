import { RegisterForm } from '@/components/pages/register/registerForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: RegisterComponent,
})

function RegisterComponent() {
  return <RegisterForm/>
}
