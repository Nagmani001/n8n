import Sections from "@/components/sections";
import Credential from "@/components/credential";

export default function Credentials() {
  return <div className="max-w-5xl mx-auto  pt-10">
    <div className="flex gap-x-4 ">
      <Sections />
    </div>
    <div className="mt-10">
      <Credential />
    </div>
  </div>
}
