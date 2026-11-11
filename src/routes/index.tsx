import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="flex flex-col gap-2 p-2">
    <Button onClick={() => window.location.reload()}>Cze</Button>
    <Button>elosz</Button>
    <Button>1234</Button>
    <Button>0000</Button>
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
    <Button>Stocklings</Button>
  </div>
}
