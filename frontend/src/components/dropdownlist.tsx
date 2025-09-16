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
import { useNavigate } from "react-router-dom";

export default function DropdownUser({ user }: { user: string }) {
  const [current, setCurrent] = useState("");
  const setUser = useSetAtom(userAtom);

  const navigate = useNavigate();
  useEffect(() => {
    if (current == "logout") {
      localStorage.removeItem("token");
      setUser("");
    }
  }, [current]);

  return <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="cursor-pointer h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 flex justify-center items-center transition-colors duration-200 shadow-md hover:shadow-lg">
        <span className="text-white font-semibold text-sm">{user[0].toUpperCase()}</span>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48 mr-2 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg">
      <DropdownMenuRadioGroup value={current} onValueChange={setCurrent}>
        <DropdownMenuRadioItem onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }} value="logout" className="cursor-pointer hover:bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
          Logout
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
}

