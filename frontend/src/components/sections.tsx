import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useAtom } from "jotai";
import { currentSectionAtom } from "@/store/atom";
import clsx from "clsx";

export default function Sections() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useAtom(currentSectionAtom);

  return <div className="flex flex-col gap-y-6 w-full">
    <div className="p-4 rounded-xl bg-slate-100 shadow-md  flex justify-between mx-auto w-5xl ">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-xl font-semibold ">
          Personal
        </h1>
        <p className="text-slate-600">
          Workflows and credentials owned by you
        </p>
      </div>
      <div className="flex items-center">
        <Button onClick={() => {
          navigate("/arena");
        }} className="bg-red-500 hover:bg-red-600 text-white flex items-center">
          Create Workflow
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>

    <div className="flex gap-x-3">
      <button
        onClick={() => {
          setCurrentSection("workflows");
          navigate("/workflows/workflows");
        }}
        className={clsx("cursor-pointer font-semibold hover:text-[#ff6f5c]",
          {
            "text-[#ff6f5c] underline decoration-[#ff6f5c] underline-offset-4": currentSection == "workflows"
          }
        )}>Workflows</button>
      <button
        onClick={() => {
          setCurrentSection("credentials");
          navigate("/workflows/credentials");
        }}
        className={clsx("cursor-pointer font-semibold hover:text-[#ff6f5c] underline-offset-4",
          {
            "text-[#ff6f5c] underline decoration-[#ff6f5c]": currentSection == "credentials"
          }
        )}
      >Credentials</button>
      <button
        onClick={() => {
          setCurrentSection("executions");
          navigate("/workflows/executions");
        }}

        className={clsx("cursor-pointer font-semibold hover:text-[#ff6f5c]",
          {
            "text-[#ff6f5c] underline decoration-[#ff6f5c] underline-offset-4": currentSection == "executions"
          }
        )}
      >Executions</button>
    </div>


  </div >

}
