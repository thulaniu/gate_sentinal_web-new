"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Bell, Camera, Lock, Wifi } from "lucide-react"

export default function SettingsPage() {
  const [motionSensitivity, setMotionSensitivity] = useState(60)
  const [volume, setVolume] = useState(70)
  const [videoQuality, setVideoQuality] = useState<"low" | "medium" | "high">("high")

  const handleVideoQualityChange = (value: "low" | "medium" | "high") => {
    setVideoQuality(value)
  }

  const handleSaveSettings = () => {
    toast.success("Settings saved - Your settings have been saved successfully.")
  }

  return (
    <div className="p-6 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-2">Configure your GateSentinel system</p>
        </div>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" /> Notifications
            </CardTitle>
            <CardDescription>Configure how you receive alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="motion-alerts">Motion Alerts</Label>
                <p className="text-sm text-muted-foreground">Get notified when motion is detected</p>
              </div>
              <Switch id="motion-alerts" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="doorbell-press">Doorbell Press</Label>
                <p className="text-sm text-muted-foreground">Get notified when someone presses the doorbell</p>
              </div>
              <Switch id="doorbell-press" defaultChecked />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="motion-sensitivity">Motion Sensitivity</Label>
                <span className="text-sm">{motionSensitivity}%</span>
              </div>
              <Slider
                id="motion-sensitivity"
                min={0}
                max={100}
                step={1}
                value={[motionSensitivity]}
                onValueChange={(value: number[]) => setMotionSensitivity(value[0])}
              />
            </div>
          </CardContent>
        </Card>

        {/* Video & Audio */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" /> Video & Audio
            </CardTitle>
            <CardDescription>Configure camera and audio settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="night-vision">Night Vision</Label>
                <p className="text-sm text-muted-foreground">Automatically adjust camera in low light</p>
              </div>
              <Switch id="night-vision" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="video-quality">Video Quality</Label>
                <p className="text-sm text-muted-foreground">Higher quality uses more bandwidth</p>
              </div>
              <Select value={videoQuality} onValueChange={handleVideoQualityChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select quality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low (720p)</SelectItem>
                  <SelectItem value="medium">Medium (1080p)</SelectItem>
                  <SelectItem value="high">High (1440p)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="speaker-volume">Speaker Volume</Label>
                <span className="text-sm">{volume}%</span>
              </div>
              <Slider
                id="speaker-volume"
                min={0}
                max={100}
                step={1}
                value={[volume]}
                onValueChange={(value: number[]) => setVolume(value[0])}
              />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" /> Security
            </CardTitle>
            <CardDescription>Configure security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-lock">Auto-Lock</Label>
                <p className="text-sm text-muted-foreground">Automatically lock the door after opening</p>
              </div>
              <Switch id="auto-lock" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Require additional verification when logging in</p>
              </div>
              <Switch id="two-factor" />
            </div>
          </CardContent>
        </Card>

        {/* Network */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="h-5 w-5" /> Network
            </CardTitle>
            <CardDescription>Configure network settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="wifi-network">Wi-Fi Network</Label>
                <p className="text-sm text-muted-foreground">Currently connected to Home_Network</p>
              </div>
              <Button variant="outline" size="sm">
                Change
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="cloud-backup">Cloud Backup</Label>
                <p className="text-sm text-muted-foreground">Backup recordings to cloud storage</p>
              </div>
              <Switch id="cloud-backup" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Save & Reset Buttons */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Reset to Defaults</Button>
          <Button onClick={handleSaveSettings}>Save Settings</Button>
        </div>
      </div>
    </div>
  )
}
