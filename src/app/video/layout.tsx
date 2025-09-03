import type React from "react"

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="video-layout">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  )
}
