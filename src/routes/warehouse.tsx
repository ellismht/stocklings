import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/warehouse')({
  component: Warehouse,
})

function Warehouse() {
  return (
    <div>
        Warehouse
    </div>
  )
}