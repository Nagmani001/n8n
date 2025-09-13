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
    <div className="border border-zinc-200 rounded-md overflow-hidden bg-white shadow-sm">
      <Table>
        <TableHeader className="bg-zinc-50 text-zinc-700">
          <TableRow>
            <TableHead className="w-10">
              <Checkbox />
            </TableHead>
            <TableHead>Workflow</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Started</TableHead>
            <TableHead>Run Time</TableHead>
            <TableHead>Exec. ID</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {executions.map((exec) => (
            <TableRow
              key={exec.execId}
              className="hover:bg-zinc-100 transition-colors"
            >
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium text-zinc-900">
                {exec.workflow}
              </TableCell>
              <TableCell className="flex items-center gap-1 text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                {exec.status}
              </TableCell>
              <TableCell className="text-zinc-700">{exec.started}</TableCell>
              <TableCell className="text-zinc-700">{exec.runTime}</TableCell>
              <TableCell className="text-zinc-700">{exec.execId}</TableCell>
              <TableCell className="flex items-center justify-end gap-2">
                <FlaskConical className="h-4 w-4 text-zinc-500" />
                <MoreVertical className="h-4 w-4 text-zinc-500 cursor-pointer" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="text-center py-2 text-sm text-zinc-500 border-t border-zinc-200">
        No more executions to fetch
      </div>
    </div>
  )
}
