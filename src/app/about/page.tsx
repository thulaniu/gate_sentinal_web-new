import { Card, CardContent } from "@/components/ui/card"
import { Shield, Camera, Fingerprint, Wifi, BatteryChargingIcon, MessageCircle } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="p-6 md:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight">About GateSentinel</h1>
                    <p className="text-xl text-muted-foreground">The Advanced Smart Doorbell System for modern home security</p>
                </div>

                <Card>
                    <CardContent className="p-6 md:p-8">
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <p className="lead">
                                The Advanced Smart Doorbell System is an innovative home security solution designed to combine
                                convenience, safety, and advanced technology in integrated units.
                            </p>

                            <p>
                                This system utilizes a blend of modern hardware and software to provide homeowners with real-time
                                control and monitoring of their front gate, ensuring enhanced security and seamless communication.
                            </p>

                            <h3>Key Features</h3>

                            <ul>
                                <li>
                                    <strong>Night Vision Camera</strong> - High-resolution camera with night vision capabilities ensures
                                    clear visibility even in low-light conditions.
                                </li>
                                <li>
                                    <strong>PIR Motion Detection</strong> - Advanced motion sensors detect movement around your home and
                                    send instant alerts to your device.
                                </li>
                                <li>
                                    <strong>Biometric Access</strong> - Integrated fingerprint scanner allows authorized family members to
                                    unlock the gate securely without traditional keys.
                                </li>
                                <li>
                                    <strong>Remote Monitoring</strong> - Wi-Fi connectivity enables real-time data sharing and remote
                                    access through our dedicated mobile application.
                                </li>
                                <li>
                                    <strong>Battery Backup</strong> - Uninterrupted operation during power outages ensures your home
                                    remains secure at all times.
                                </li>
                                <li>
                                    <strong>Two-way Communication</strong> - Integrated microphone and speaker facilitate seamless
                                    communication with visitors from anywhere.
                                </li>
                            </ul>

                            <h3>Our Mission</h3>

                            <p>
                                At GateSentinel, we&apos;re committed to redefining home security by merging advanced hardware with intuitive
                                software. Our mission is to provide robust, secure, and user-friendly systems for modern homes, giving
                                homeowners peace of mind and complete control over who enters their property.
                            </p>

                            <p>
                                By combining video surveillance, biometric security, and smart lock capabilities into one comprehensive
                                solution, we&apos;re leading the way in innovative home security technologies that meet the evolving needs of
                                today&apos;s homeowners.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-8 border rounded-lg">
                        <Shield className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-medium">Enhanced Security</h3>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 border rounded-lg">
                        <Camera className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-medium">Video Surveillance</h3>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 border rounded-lg">
                        <Fingerprint className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-medium">Biometric Access</h3>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 border rounded-lg">
                        <Wifi className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-medium">Remote Control</h3>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 border rounded-lg">
                        <BatteryChargingIcon className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-medium">Backup Power</h3>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 border rounded-lg">
                        <MessageCircle className="h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-medium">Two-way Audio</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
