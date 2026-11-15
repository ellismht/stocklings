import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useLogout } from "@/services/identity-service";
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/_authenticated/profile')({
  component: ProfilePage,
})

function ProfilePage() {
  const {mutateAsync, isPending} = useLogout();
  return (
    <div className="flex flex-col gap-2 p-2">
        <Button onClick={async () => await mutateAsync()} variant={isPending ? "outline" : "default"} disabled={isPending}>
          {isPending ? <Spinner/> : "Wyloguj"}
        </Button>
    </div>
  )
}