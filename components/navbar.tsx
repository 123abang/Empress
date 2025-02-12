import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp } from "lucide-react"

export function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <TrendingUp className="h-8 w-8 text-blue-600" />
        <span className="ml-2 text-xl font-bold text-gray-800">Zenith</span>
      </div>
      <Avatar>
        <AvatarImage src="/placeholder.svg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </nav>
  )
}

