import Sections from "@/components/sections";
import Execution from "@/components/execution";

export default function Executions() {

  return <div className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <Sections />
      </div>
      <div className="mt-8">
        <Execution />
      </div>
    </div>
  </div>
}
