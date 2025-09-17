import { MoreVertical, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { findAppeopriateName } from "@/lib/utils"

export default function GmailAccountCard({ title, imageUrl, updatedAt, createdAt }: {
  title: string,
  updatedAt: string,
  createdAt: string,
  imageUrl: string,
}) {
  const name = findAppeopriateName(title);
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <img
          className="h-8 w-10"
          src={imageUrl} />

        <div className="space-y-1">
          <h3 className="font-semibold text-base text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">
            Gmail OAuth2 API • Last updated {updatedAt} • Created {createdAt}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="flex items-center gap-2 border border-gray-200 bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">
          <User className="h-3 w-3" /> Personal
        </span>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <MoreVertical className="h-4 w-4 text-gray-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44 bg-white border border-gray-200 shadow-lg rounded-lg">
            <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">Manage</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-50 cursor-pointer">Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 hover:bg-red-50 cursor-pointer">Remove</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
