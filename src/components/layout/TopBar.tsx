import { UserIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { useNavigate } from "@tanstack/react-router";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 right-0 z-999 ">
      <div className="flex items-center justify-between px-2">
        <div onClick={() => navigate({ to: "/" })} className="cursor-pointer">
          <img src="/stocklings/images/stocklings-top.png" alt="Stocklings" className="h-9.5 w-auto object-contain" />
        </div>
        <Avatar className="h-8 w-8 mr-1 cursor-pointer" onClick={() => navigate({ to: "/profile" })}>
          <AvatarFallback>
            <UserIcon size={24} />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default TopBar