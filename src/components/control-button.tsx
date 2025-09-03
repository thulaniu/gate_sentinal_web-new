"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

interface ControlButtonProps {
  label: string
  onClick?: () => void
  className?: string
  isToggle?: boolean
  isActive?: boolean
  href?: string
}

export function ControlButton({
  label,
  onClick,
  className,
  isToggle = false,
  isActive = false,
  href,
}: ControlButtonProps) {
  const [isPressed, setIsPressed] = useState(false)
  const [isToggled, setIsToggled] = useState(isActive)
  const router = useRouter()

  const handleClick = () => {
    setIsPressed(true)

    if (isToggle) {
      setIsToggled(!isToggled)
    }

    if (href) {
      router.push(href)
    } else if (onClick) {
      onClick()
    }

    setTimeout(() => setIsPressed(false), 300)
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
      <Button
        variant="outline"
        size="lg"
        onClick={handleClick}
        className={cn(
          "h-auto w-full rounded-full py-8 text-2xl uppercase tracking-wider transition-all",
          "bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700",
          "border-2 border-zinc-700 dark:border-zinc-600",
          "text-zinc-100 dark:text-zinc-100",
          isPressed ? "bg-primary text-primary-foreground" : "",
          isToggle && isToggled ? "bg-primary text-primary-foreground" : "",
          className,
        )}
      >
        {label}
        {isToggle && <span className="ml-2 text-sm">{isToggled ? "(ON)" : "(OFF)"}</span>}
      </Button>
    </motion.div>
  )
}
