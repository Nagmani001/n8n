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


  return <div className="max-w-5xl mx-auto  pt-10">

    <div className="flex gap-x-4 ">
      <Sections />
    </div>
    <div className="mt-10">
      <Workflow />
    </div>
  </div>
}
