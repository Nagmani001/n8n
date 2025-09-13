import { MoreVertical } from "lucide-react";

export default function Workflow() {
  return (
    <div className="bg-white text-zinc-900 border border-zinc-200 rounded-md p-4 flex items-center justify-between shadow-sm">
      <div>
        <h3 className="cursor-pointer hover:underline font-medium text-sm">My workflow</h3>
        <p className="text-xs text-zinc-500">
          Last updated 2 days ago | Created 10 September
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <span className="bg-zinc-100 text-zinc-700 text-xs px-2 py-1 rounded-md border border-zinc-200">
          Personal
        </span>
        <span className="text-zinc-700 text-xs px-2 py-1 rounded-md ">
          Active
        </span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-10 h-5 bg-zinc-300 rounded-full peer peer-checked:bg-green-500 
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                          after:bg-white after:rounded-full after:h-4 after:w-4 
                          after:transition-all peer-checked:after:translate-x-5 shadow-sm" />
        </label>

        <button className="p-1 hover:bg-zinc-100 rounded">
          <MoreVertical className="w-4 h-4 text-zinc-500" />
        </button>
      </div>
    </div>
  );
}
