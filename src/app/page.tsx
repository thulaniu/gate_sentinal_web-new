"use client"

import { useState } from "react"
import { ControlButton } from "@/components/ui/contol-button"
import { ref, set } from "firebase/database"
import { db } from "@/lib/firebase"
import { toast } from "sonner" // Optional for toast notifications

export default function Home() {
  const [isMicOn, setIsMicOn] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)

  const handleMicToggle = () => {
    setIsMicOn(!isMicOn)
    // Add microphone control logic here
  }

  const handleUnlock = async () => {
    if (isUnlocking) return

    setIsUnlocking(true)

    const timestamp = Date.now()

    try {
      await set(ref(db, "gateControl"), {
        command: "unlock",
        status: "pending",
        lastUpdated: timestamp,
      })

      toast.success("Gate unlock command sent.")
      console.log("✅ Unlock command sent")
    } catch (error) {
      console.error("❌ Unlock error:", error)
      toast.error("Failed to send unlock command.")
    } finally {
      // Prevent spam clicks by disabling button for 3 seconds
      setTimeout(() => setIsUnlocking(false), 3000)
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 overflow-hidden">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to GateSentinel</h1>
        <p className="text-muted-foreground">Your advanced smart doorbell system</p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-8">Control Panel</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <ControlButton label="Video" href="/video" />
          <ControlButton label="Unlock" isDisabled={isUnlocking} onClick={handleUnlock} />
        </div>
      </div>
    </div>
  )
}
