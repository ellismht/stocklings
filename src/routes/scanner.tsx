import { createFileRoute } from "@tanstack/react-router";
import { Scanner } from '@yudiel/react-qr-scanner';

export const Route = createFileRoute('/scanner')({
  component: ScannerPage,
})

function ScannerPage() {
  return (
    <div>
        <Scanner onScan={(result) => alert(JSON.stringify(result))}/>
    </div>
  )
}