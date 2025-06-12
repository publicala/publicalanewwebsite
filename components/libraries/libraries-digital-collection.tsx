import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Headphones, FileText, Video, Music, ImageIcon } from "lucide-react"

export function LibrariesDigitalCollection() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive <span className="text-primary">Digital Collections</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Support multiple content formats and provide your patrons with access to a diverse range of digital
              resources, from ebooks to multimedia content.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-primary mb-1">50K+</div>
                <div className="text-sm text-gray-600">Digital titles available</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Uptime guarantee</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Supported Content Types</h3>
            <div className="grid grid-cols-2 gap-4">
              <ContentTypeCard
                icon={<BookOpen className="h-5 w-5" />}
                title="Ebooks"
                description="EPUB, PDF, MOBI formats"
                color="bg-blue-50 text-blue-600"
              />
              <ContentTypeCard
                icon={<Headphones className="h-5 w-5" />}
                title="Audiobooks"
                description="MP3, M4A streaming"
                color="bg-green-50 text-green-600"
              />
              <ContentTypeCard
                icon={<FileText className="h-5 w-5" />}
                title="Documents"
                description="Research papers, reports"
                color="bg-purple-50 text-purple-600"
              />
              <ContentTypeCard
                icon={<Video className="h-5 w-5" />}
                title="Videos"
                description="Educational content"
                color="bg-red-50 text-red-600"
              />
              <ContentTypeCard
                icon={<Music className="h-5 w-5" />}
                title="Audio"
                description="Music, lectures, podcasts"
                color="bg-yellow-50 text-yellow-600"
              />
              <ContentTypeCard
                icon={<ImageIcon className="h-5 w-5" />}
                title="Images"
                description="Digital archives, photos"
                color="bg-indigo-50 text-indigo-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContentTypeCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <Card className="border border-gray-200 hover:shadow-sm transition-all">
      <CardHeader className="pb-2">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${color}`}>{icon}</div>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}
