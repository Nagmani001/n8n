import Default from "@/components/default";
import { useParams } from "react-router-dom"

export default function Arena() {
  const { id } = useParams();

  return <div className="flex h-screen w-screen bg-gray-50" >
    <div className="w-80 bg-white border-r border-gray-200 shadow-sm p-4 overflow-y-auto">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Workflow Tools</h2>
        <div className="text-gray-600 text-sm">
          Drag and drop components to build your workflow
        </div>
      </div>
    </div>
    <div className="flex-1 h-full">
      <Default />
    </div>
  </div>
}


