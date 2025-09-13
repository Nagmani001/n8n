import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreVertical, FlaskConical, CheckCircle2 } from "lucide-react"

export default function Execution() {
  const executions = [
    {
      workflow: "My workflow",
      status: "Success",
      started: "Sep 10, 14:24:43",
      runTime: "23ms",
      execId: "3",
    },
    {
      workflow: "My workflow",
      status: "Success",
      started: "Sep 10, 14:23:42",
      runTime: "392ms",
      execId: "2",
    },
    {
      workflow: "My workflow",
      status: "Success",
      started: "Sep 10, 14:23:30",
      runTime: "431ms",
      execId: "1",
    },
  ]

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <Table>
        <TableHeader className="bg-gray-50 text-gray-700">
          <TableRow className="border-b border-gray-200">
            <TableHead className="w-12 pl-6">
              <Checkbox />
            </TableHead>
            <TableHead className="font-semibold">Workflow</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Started</TableHead>
            <TableHead className="font-semibold">Run Time</TableHead>
            <TableHead className="font-semibold">Exec. ID</TableHead>
            <TableHead className="text-right pr-6"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {executions.map((exec) => (
            <TableRow
              key={exec.execId}
              className="hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <TableCell className="pl-6">
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium text-gray-900">
                {exec.workflow}
              </TableCell>
              <TableCell className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                <span className="font-medium">{exec.status}</span>
              </TableCell>
              <TableCell className="text-gray-700">{exec.started}</TableCell>
              <TableCell className="text-gray-700 font-mono text-sm">{exec.runTime}</TableCell>
              <TableCell className="text-gray-700 font-mono text-sm">{exec.execId}</TableCell>
              <TableCell className="flex items-center justify-end gap-3 pr-6">
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <FlaskConical className="h-4 w-4 text-gray-500" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <MoreVertical className="h-4 w-4 text-gray-500" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-200 bg-gray-50">
        No more executions to fetch
      </div>
    </div>
  )
}
