import { MoreVertical, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function GmailAccountCard() {
  return (
    <div className="bg-white border border-zinc-200 rounded-md p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-3">
        <img
          src="/gmail.png"
          alt="Gmail"
          width={28}
          height={28}
        />

        <div>
          <h3 className="font-medium text-sm">Gmail account</h3>
          <p className="text-xs text-zinc-500">
            Gmail OAuth2 API | Last updated 2 days ago | Created 10 September
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <span className="flex items-center gap-1 border border-zinc-200 bg-zinc-100 text-zinc-700 text-xs px-2 py-1 rounded-md">
          <User className="h-3 w-3" /> Personal
        </span>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded hover:bg-zinc-100">
              <MoreVertical className="h-4 w-4 text-zinc-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuItem>Manage</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Remove</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
