import type React from "react"
import Link from "next/link"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="settings-layout p-6 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-2">Configure your GateSentinel system settings and preferences</p>
        </div>

        <div className="flex space-x-4 border-b pb-4">
          <Link href="/settings" className="px-3 py-2 font-medium hover:text-primary">
            General
          </Link>
          <Link href="/settings/notifications" className="px-3 py-2 font-medium hover:text-primary">
            Notifications
          </Link>
          <Link href="/settings/security" className="px-3 py-2 font-medium hover:text-primary">
            Security
          </Link>
          <Link href="/settings/advanced" className="px-3 py-2 font-medium hover:text-primary">
            Advanced
          </Link>
        </div>

        {children}
      </div>
    </div>
  )
}
