"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// No need for recordedVideos array anymore, since we're pulling from YouTube playlist

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(70)

  return (
    <div className="p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Video Management</h1>
        </div>

        <Tabs defaultValue="live" className="space-y-6">
          <TabsList className="grid w-full bg-gray-500 grid-cols-2">
            <TabsTrigger value="live" className="bg-gray-500 text-gray-800">Live View</TabsTrigger>
            <TabsTrigger value="recordings" className="bg-gray-500 text-gray-800">Recordings</TabsTrigger>
          </TabsList>

          {/* LIVE VIEW TAB */}
          <TabsContent value="live" className="space-y-6">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/SneMtI6e3aY?autoplay=1" 
                    title="YouTube live stream" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* RECORDINGS TAB */}
          <TabsContent value="recordings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recorded Streams</CardTitle>
                <CardDescription>Watch past streams from your YouTube playlist</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                {/* Replace PLAYLIST_ID with your actual YouTube playlist ID */}
                <iframe
                  width="80%"
                  height="500"
                  src="https://www.youtube.com/embed/videoseries?list=PLVR4vfgvLpdWg1wtc3rI2tElDxUwu5i4O"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
