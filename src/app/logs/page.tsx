"use client"

import { useEffect, useState } from "react"
import { db } from "@/lib/firebase"
import { onValue, ref } from "firebase/database"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type LogEntry = {
  id: string
  timestamp: number
  event: string
  user: string
  method: string
  status: "Authorized" | "Rejected" | string
}

export default function LogsPage() {
  const [logs, setLogs] = useState<LogEntry[]>([])

 useEffect(() => {
  const logsRef = ref(db, "logs")
  const unsubscribe = onValue(logsRef, (snapshot) => {
    const data = snapshot.val()
    if (data) {
      const typedData = data as Record<string, Omit<LogEntry, "id">>

      const parsedLogs = Object.entries(typedData).map(([id, entry]) => ({
        id,
        ...entry,
      }))

      parsedLogs.sort((a, b) => b.timestamp - a.timestamp)
      setLogs(parsedLogs)
    } else {
      setLogs([])
    }
  })

  return () => unsubscribe()
}, [])


  return (
    <div className="p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">System Logs</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Activity Log</CardTitle>
            <CardDescription>Recent events and system activity</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono">
                      {new Date(log.timestamp).toLocaleString()}
                    </TableCell>
                    <TableCell>{log.event}</TableCell>
                    <TableCell>{log.user}</TableCell>
                    <TableCell>{log.method}</TableCell>
                    <TableCell>
                      <span
                        className={
                          log.status === "Authorized"
                            ? "text-green-500 dark:text-green-400"
                            : log.status === "Rejected"
                            ? "text-red-500 dark:text-red-400"
                            : "text-blue-500 dark:text-blue-400"
                        }
                      >
                        {log.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
