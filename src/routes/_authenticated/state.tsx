import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/state')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="flex flex-col gap-2 p-2">
    State
  </div>
}
