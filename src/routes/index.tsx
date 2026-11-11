import { Button } from '@/components/ui/button'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();
  return <div className="flex flex-col gap-2 p-2">
    <Button onClick={() => window.location.reload()}>Cze</Button>
    <Button>elosz</Button>
    <Button>1234</Button>
    <Button>0000</Button>
    <Button onClick={() => navigate({to: '/scanner'})}>Skaner</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
        <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
    <Button>Stocklings</Button>
  </div>
}
