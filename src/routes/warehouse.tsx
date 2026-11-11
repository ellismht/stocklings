import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/warehouse')({
  component: WarehousePage,
})

function WarehousePage() {
  return (
    <div>
        Warehouse
    </div>
  )
}