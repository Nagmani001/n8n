import Sections from "@/components/sections";
import Workflow from "@/components/workflow";
/*
import { BASE_URL } from "@/config/utils";
import axios from "axios";
import { useEffect } from "react";
 * */

export default function WorkflowCard() {
  /*
  useEffect(() => {
    const main = async () => {
      const response = await axios.get(`${BASE_URL}/`)

    }
    main();
  }, []);
    */


  return <div className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <Sections />
      </div>
      <div className="mt-8">
        <Workflow />
      </div>
    </div>
  </div>
}
