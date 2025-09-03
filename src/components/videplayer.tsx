"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Maximize2, Pause, Play, RotateCcw, Volume2, VolumeX, Unlock } from "lucide-react"
import { cn } from "@/lib/utils"
import { ref, set, push } from "firebase/database"
import { db } from "@/lib/firebase"

interface VideoPlayerProps {
  src?: string
  poster?: string
  isLive?: boolean
  className?: string
}

export function VideoPlayer({ src, poster, isLive = false, className }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(70)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("timeupdate", updateTime)
    video.addEventListener("durationchange", updateDuration)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("timeupdate", updateTime)
      video.removeEventListener("durationchange", updateDuration)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    const video = videoRef.current
    if (!video) return

    const newVolume = value[0]
    setVolume(newVolume)
    video.volume = newVolume / 100
    setIsMuted(newVolume === 0)
  }

  const handleSeek = (value: number[]) => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = value[0]
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const sendUnlockCommand = async () => {
    try {
      await set(ref(db, 'gateControl'), {
        command: "unlock",
        status: "pending",
        lastUpdated: Date.now()
      })
      console.log("✅ Unlock command sent.")

      await push(ref(db, 'accessLogs'), {
        timestamp: Date.now(),
        action: "unlock",
        source: "web"
      })
      console.log("✅ Action logged.")
    } catch (error) {
      console.error("❌ Firebase error:", error)
    }
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-black", className)}>
      {isLive ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={poster || "/placeholder.svg?height=720&width=1280&query=doorbell+camera+view+hd"}
            alt="Live camera feed"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <video ref={videoRef} src={src} poster={poster} className="w-full h-full object-contain" />
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        {!isLive && (
          <div className="mb-2">
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={0.1}
              onValueChange={handleSeek}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-white/80 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            <div className="flex items-center gap-2 w-32">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8" onClick={toggleMute}>
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Slider value={[volume]} max={100} step={1} onValueChange={handleVolumeChange} className="w-20" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isLive && (
              <Badge variant="outline" className="text-white border-white/30 bg-black/50">
                LIVE
              </Badge>
            )}
            <Button onClick={sendUnlockCommand} variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Unlock className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
