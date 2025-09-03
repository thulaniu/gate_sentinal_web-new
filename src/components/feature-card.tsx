"use client"

import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-4 text-muted-foreground">{description}</p>
    </motion.div>
  )
}
