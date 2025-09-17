import Sections from "@/components/sections";
import Workflow from "@/components/workflow";
import { BASE_URL } from "@/config/utils";
import axios from "axios";
import { useEffect, useState } from "react";


export default function WorkflowCard() {
  const [workflows, setWorkflows] = useState<any>([]);
  useEffect(() => {
    const main = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/workflow/workflows`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          }
        });
        setWorkflows(response.data.workflows);
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
      <div className="flex flex-col gap-y-3 mt-8">
        {workflows.map((x: any) => {
          return <Workflow
            key={x.id}
            id={x.id}
            title={x.title}
            createdAt={x.createdAt}
            updatedAt={x.updatedAt}
            isActive={x.activeStatus}
          />
        })}
      </div>
    </div>
  </div>
}
