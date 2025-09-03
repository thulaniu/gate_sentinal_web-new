import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black text-white shadow-sm">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6" />
          <span className="text-3xl font-semibold tracking-wide">GateSentinel</span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
        </div>
      </div>
    </header>
  )
}
