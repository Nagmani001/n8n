import { MoreVertical } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Workflow({ id, title, updatedAt, createdAt, isActive }: {
  id: string,
  title: string,
  updatedAt: string,
  createdAt: string,
  isActive: boolean
}) {

  const [value, setValue] = useState(isActive);
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900 border border-gray-200 rounded-lg p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-1">
        <h3 onClick={() => {
          navigate("/workflows/" + id);
        }} className="cursor-pointer hover:text-blue-600 font-semibold text-base transition-colors">{title}</h3>
        <p className="text-sm text-gray-500">
          Last updated {updatedAt} • Created {createdAt}
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-200 font-medium">
          Personal
        </span>
        {value &&
          <span className="text-green-600 text-sm px-3 py-1 rounded-full bg-green-50 font-medium">
            Active
          </span>
        }

        <label className="relative inline-flex items-center cursor-pointer">
          {value ?

            <input checked type="checkbox" onClick={(e: any) => {
              setValue(!value);
            }} className="sr-only peer" />
            :

            <input type="checkbox" onClick={(e: any) => {
              setValue(!value);
            }} className="sr-only peer" />
          }
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                          after:bg-white after:rounded-full after:h-5 after:w-5 
                          after:transition-all peer-checked:after:translate-x-5 shadow-sm" />
        </label>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <MoreVertical className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
}
