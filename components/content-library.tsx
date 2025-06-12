"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Headphones, FileText, Video, Music, ImageIcon } from "lucide-react"

const contentTypes = [
  { icon: BookOpen, label: "eBooks", count: "1,247", color: "blue" },
  { icon: Headphones, label: "Audiobooks", count: "389", color: "purple" },
  { icon: FileText, label: "Documents", count: "2,156", color: "green" },
  { icon: Video, label: "Videos", count: "94", color: "red" },
  { icon: Music, label: "Audio", count: "567", color: "yellow" },
  { icon: ImageIcon, label: "Images", count: "3,421", color: "pink" },
]

const colorClasses = {
  blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600",
  purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600",
  green: "from-green-500 to-green-600 bg-green-50 text-green-600",
  red: "from-red-500 to-red-600 bg-red-50 text-red-600",
  yellow: "from-yellow-500 to-yellow-600 bg-yellow-50 text-yellow-600",
  pink: "from-pink-500 to-pink-600 bg-pink-50 text-pink-600",
}

export function ContentLibrary() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Content Library Management</h2>
            <p className="text-lg text-gray-600 mb-8">
              Organize, manage, and distribute all types of digital content from a single, powerful platform. Support
              for multiple formats ensures your content reaches readers on any device.
            </p>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Features:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Support for EPUB, PDF and Audio.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Bulk upload & management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Metadata management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Support for ONIX</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-4">Upload Process</h4>
                <div className="space-y-3">
                  {[
                    { step: 1, text: "Select files or drag & drop", status: "complete" },
                    { step: 2, text: "Add metadata and descriptions", status: "complete" },
                    { step: 3, text: "Configure access and pricing", status: "current" },
                    { step: 4, text: "Publish to your library", status: "pending" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          item.status === "complete"
                            ? "bg-green-500 text-white"
                            : item.status === "current"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {item.step}
                      </div>
                      <span
                        className={`${
                          item.status === "complete"
                            ? "text-green-700"
                            : item.status === "current"
                              ? "text-blue-700"
                              : "text-gray-500"
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Content type grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {contentTypes.map((type) => {
                const Icon = type.icon
                const colors = colorClasses[type.color as keyof typeof colorClasses]

                return (
                  <Card key={type.label} className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-12 h-12 mx-auto mb-3 rounded-lg ${colors.split(" ")[2]} flex items-center justify-center`}
                      >
                        <Icon className={`h-6 w-6 ${colors.split(" ")[3]}`} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{type.count}</div>
                      <div className="text-sm text-gray-600">{type.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Library visualization */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Recent Uploads</h3>
                  <div className="text-sm text-gray-500">Last 7 days</div>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Digital Marketing Guide", type: "PDF", size: "2.4 MB", status: "published" },
                    { title: "Business Strategy Audio", type: "MP3", size: "45.2 MB", status: "processing" },
                    { title: "Annual Report 2024", type: "EPUB", size: "1.8 MB", status: "published" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-gray-500">
                          {item.type} • {item.size}
                        </div>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs ${
                          item.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
