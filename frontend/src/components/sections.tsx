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
    <div className="p-6 rounded-xl bg-white shadow-sm border border-gray-200 flex justify-between items-center">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-xl font-semibold text-gray-900">
          Personal
        </h1>
        <p className="text-gray-600 text-sm">
          Workflows and credentials owned by you
        </p>
      </div>
      <div className="flex items-center">
        <Button onClick={() => {
          navigate("/arena");
        }} className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
          Create Workflow
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>

    <div className="flex gap-x-6 border-b border-gray-200">
      <button
        onClick={() => {
          setCurrentSection("workflows");
          navigate("/workflows/workflows");
        }}
        className={clsx("cursor-pointer font-medium pb-3 px-1 border-b-2 transition-colors",
          {
            "text-blue-600 border-blue-600": currentSection == "workflows",
            "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300": currentSection != "workflows"
          }
        )}>Workflows</button>
      <button
        onClick={() => {
          setCurrentSection("credentials");
          navigate("/workflows/credentials");
        }}
        className={clsx("cursor-pointer font-medium pb-3 px-1 border-b-2 transition-colors",
          {
            "text-blue-600 border-blue-600": currentSection == "credentials",
            "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300": currentSection != "credentials"
          }
        )}
      >Credentials</button>
      <button
        onClick={() => {
          setCurrentSection("executions");
          navigate("/workflows/executions");
        }}
        className={clsx("cursor-pointer font-medium pb-3 px-1 border-b-2 transition-colors",
          {
            "text-blue-600 border-blue-600": currentSection == "executions",
            "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300": currentSection != "executions"
          }
        )}
      >Executions</button>
    </div>

  </div >

}
