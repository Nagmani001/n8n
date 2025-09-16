import Sections from "@/components/sections";
import Workflow from "@/components/workflow";
import { BASE_URL } from "@/config/utils";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WorkflowCard() {
  const [workflows, setWorkflows] = useState([]);
  useEffect(() => {
    const main = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/workflow/workflows`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          }
        });
        setWorkflows(response.data.workflows);
        console.log("log", response.data.workflows);
        console.log("state", workflows);
      } catch (err) {
        alert("error error");
        console.log("err");

      }

    }
    main();
  }, []);


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
