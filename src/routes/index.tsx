import { Button } from '@/components/ui/button';
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();
  return <div className="flex flex-col gap-2 p-2">
    State
    <Button onClick={() => navigate({to: "/login"})}></Button>
  </div>
}
