import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="flex flex-col gap-2 p-2">
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
