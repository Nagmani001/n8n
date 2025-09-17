import Sections from "@/components/sections";
import Credential from "@/components/credential";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/config/utils";

export default function Credentials() {
  const [credentials, setCredentials] = useState([]);
  useEffect(() => {
    const main = async () => {
      try {
        const resopnse = await axios.get(`${BASE_URL}/api/credentials/getAll`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          }
        });
        setCredentials(resopnse.data.credentials);
      } catch (err) {
        alert("error occured");
      }
    }
    main();
  }, []);

  return <div className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <Sections />
      </div>
      <div className=" flex flex-col gap-y-2 mt-8">

        {credentials.map((x: any) => {
          return <Credential key={x.id} imageUrl={x.imageUrl} title={x.key} createdAt={x.createdAt} updatedAt={x.updatedAt} />
        })}
      </div>
    </div>
  </div>
}
