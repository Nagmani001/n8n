import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Info() {
  return <div className="p-4 rounded-xl bg-slate-100 shadow-md  mt-10 flex justify-between mx-auto max-w-6xl ">
    <div className="flex flex-col gap-y-3">
      <h1 className="text-xl font-semibold ">
        Personal
      </h1>
      <p className="text-slate-600">
        Workflows and credentials owned by you
      </p>
    </div>
    <div className="flex items-center">
      <Button className="bg-red-500 hover:bg-red-600 text-white flex items-center">
        Create Workflow
        <ChevronDown className="ml-1 h-4 w-4" />
      </Button>
    </div>
  </div>
}
