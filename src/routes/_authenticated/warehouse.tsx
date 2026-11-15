import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/_authenticated/warehouse')({
  component: WarehousePage,
})

function WarehousePage() {
  return (
    <div>
        Warehouse
    </div>
  )
}