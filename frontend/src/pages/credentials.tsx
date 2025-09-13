import Sections from "@/components/sections";
import Credential from "@/components/credential";

export default function Credentials() {
  return <div className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <Sections />
      </div>
      <div className="mt-8">
        <Credential />
      </div>
    </div>
  </div>
}
