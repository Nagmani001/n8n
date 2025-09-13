import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { userAtom } from "@/store/atom";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react"

export default function DropdownUser({ user }: { user: string }) {
  const [current, setCurrent] = useState("");
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    if (current == "logout") {
      localStorage.removeItem("token");
      setUser("");
    }
  }, [current]);

  return <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="cursor-pointer h-11 w-11 rounded-full bg-slate-300 flex justify-center items-center">
        {user[0].toUpperCase()}
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56 ml-40">
      <DropdownMenuRadioGroup value={current} onValueChange={setCurrent} >
        <DropdownMenuRadioItem value="logout">Logout</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
}

