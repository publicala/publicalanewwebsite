import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Music, ImageIcon, Video, FileCode, File } from "lucide-react"

export function CreatorsFormats() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sell Any Type of Digital Content</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform supports a wide range of digital formats to accommodate all types of creators
          </p>
        </div>

        <Tabs defaultValue="text" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="grid grid-cols-6 w-full max-w-3xl">
              <TabsTrigger value="text" className="flex flex-col gap-1 py-3">
                <FileText className="h-5 w-5 mx-auto" />
                <span>Text</span>
              </TabsTrigger>
              <TabsTrigger value="audio" className="flex flex-col gap-1 py-3">
                <Music className="h-5 w-5 mx-auto" />
                <span>Audio</span>
              </TabsTrigger>
              <TabsTrigger value="images" className="flex flex-col gap-1 py-3">
                <ImageIcon className="h-5 w-5 mx-auto" />
                <span>Images</span>
              </TabsTrigger>
              <TabsTrigger value="video" className="flex flex-col gap-1 py-3">
                <Video className="h-5 w-5 mx-auto" />
                <span>Video</span>
              </TabsTrigger>
              <TabsTrigger value="interactive" className="flex flex-col gap-1 py-3">
                <FileCode className="h-5 w-5 mx-auto" />
                <span>Interactive</span>
              </TabsTrigger>
              <TabsTrigger value="bundles" className="flex flex-col gap-1 py-3">
                <File className="h-5 w-5 mx-auto" />
                <span>Bundles</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="text" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Text-Based Content</h3>
                <p className="text-gray-600 mb-6">
                  Publish and sell ebooks, PDFs, reports, guides, newsletters, and other text-based content with
                  professional formatting and delivery.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Multiple Formats</h4>
                      <p className="text-sm text-gray-500">
                        Support for EPUB, PDF, MOBI, and other popular text formats.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Rich Formatting</h4>
                      <p className="text-sm text-gray-500">
                        Maintain your formatting, images, tables, and other elements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Chapter Navigation</h4>
                      <p className="text-sm text-gray-500">
                        Readers can easily navigate through chapters and sections.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sample Previews</h4>
                      <p className="text-sm text-gray-500">
                        Let potential buyers preview a portion of your content before purchasing.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Text Content Mockup */}
                  <div className="w-80 h-96 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Digital Guide</h4>
                          <p className="text-xs opacity-90">PDF • 45 pages</p>
                        </div>
                      </div>
                    </div>

                    {/* Content Preview */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-400 rounded w-full"></div>
                        <div className="h-3 bg-gray-400 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-400 rounded w-4/5"></div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <div className="h-3 bg-blue-300 rounded w-2/3 mb-2"></div>
                        <div className="h-2 bg-blue-200 rounded w-full"></div>
                        <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                      </div>

                      <div className="space-y-2">
                        <div className="h-3 bg-gray-400 rounded w-full"></div>
                        <div className="h-3 bg-gray-400 rounded w-4/5"></div>
                        <div className="h-3 bg-gray-400 rounded w-5/6"></div>
                      </div>

                      {/* Chapter Navigation */}
                      <div className="flex gap-2 pt-4">
                        <div className="w-8 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>

                    {/* Reading Progress */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-gray-100 rounded-full p-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">1</span>
                        </div>
                        <div className="flex-1 bg-gray-300 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
                        </div>
                        <span className="text-xs text-gray-600">25%</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-purple-100 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  {/* Audio Player Mockup */}
                  <div className="w-80 h-96 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Music className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Audiobook Player</h4>
                          <p className="text-xs opacity-90">MP3 • 8h 45m</p>
                        </div>
                      </div>
                    </div>

                    {/* Album Art */}
                    <div className="p-6">
                      <div className="w-full h-40 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                        <Music className="h-16 w-16 text-white/80" />
                      </div>

                      {/* Track Info */}
                      <div className="text-center mb-6">
                        <h3 className="font-bold text-lg text-gray-800">Chapter 3: The Journey</h3>
                        <p className="text-gray-500 text-sm">Digital Marketing Mastery</p>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>12:34</span>
                          <span>45:21</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-gray-600">⏮</span>
                        </button>
                        <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">▶</span>
                        </button>
                        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <span className="text-gray-600">⏭</span>
                        </button>
                      </div>

                      {/* Speed Control */}
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs text-gray-500">Speed:</span>
                        <div className="flex gap-1">
                          <button className="px-2 py-1 text-xs bg-gray-100 rounded">1x</button>
                          <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded">1.5x</button>
                          <button className="px-2 py-1 text-xs bg-gray-100 rounded">2x</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-indigo-100 rounded-full z-0"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Audio Content</h3>
                <p className="text-gray-600 mb-6">
                  Sell audiobooks, podcasts, music, sound effects, guided meditations, and other audio content with
                  professional delivery and playback features.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Music className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">High-Quality Streaming</h4>
                      <p className="text-sm text-gray-500">
                        Stream audio content at various quality levels to accommodate different devices and connections.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Music className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Offline Listening</h4>
                      <p className="text-sm text-gray-500">
                        Allow customers to download audio for offline listening on their devices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Music className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Playback Controls</h4>
                      <p className="text-sm text-gray-500">
                        Advanced playback features including speed control, bookmarking, and chapter navigation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Music className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Audio Samples</h4>
                      <p className="text-sm text-gray-500">Provide preview clips to entice potential buyers.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="images" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Image Content</h3>
                <p className="text-gray-600 mb-6">
                  Sell photography, digital art, illustrations, stock photos, design templates, and other visual content
                  with high-quality presentation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <ImageIcon className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">High-Resolution Support</h4>
                      <p className="text-sm text-gray-500">
                        Deliver high-resolution images while protecting your content from unauthorized use.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <ImageIcon className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Gallery Presentation</h4>
                      <p className="text-sm text-gray-500">Create beautiful galleries to showcase your visual work.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <ImageIcon className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Watermarking Options</h4>
                      <p className="text-sm text-gray-500">
                        Add optional watermarks to preview images while delivering clean files to buyers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <ImageIcon className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Multiple Format Delivery</h4>
                      <p className="text-sm text-gray-500">
                        Provide images in various formats (JPEG, PNG, RAW, etc.) to meet different customer needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Image Gallery Mockup */}
                  <div className="w-80 h-96 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <ImageIcon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Photo Gallery</h4>
                          <p className="text-xs opacity-90">JPG • 4K Resolution</p>
                        </div>
                      </div>
                    </div>

                    {/* Featured Image */}
                    <div className="p-6">
                      <div className="w-full h-40 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 relative">
                        <ImageIcon className="h-16 w-16 text-white/80" />
                        <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded px-2 py-1">
                          <span className="text-xs text-white">PREVIEW</span>
                        </div>
                      </div>

                      {/* Image Info */}
                      <div className="text-center mb-4">
                        <h3 className="font-bold text-lg text-gray-800">Sunset Landscape</h3>
                        <p className="text-gray-500 text-sm">3840 x 2160 • RAW + JPG</p>
                      </div>

                      {/* Image Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="h-16 bg-gradient-to-br from-pink-300 to-purple-500 rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-6 w-6 text-white/80" />
                        </div>
                        <div className="h-16 bg-gradient-to-br from-purple-300 to-pink-500 rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-6 w-6 text-white/80" />
                        </div>
                        <div className="h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-6 w-6 text-white/80" />
                        </div>
                        <div className="h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-6 w-6 text-white/80" />
                        </div>
                      </div>

                      {/* Download Options */}
                      <div className="flex gap-2 justify-center">
                        <button className="px-3 py-1 text-xs bg-pink-500 text-white rounded-lg font-medium">JPG</button>
                        <button className="px-3 py-1 text-xs bg-gray-100 rounded">PNG</button>
                        <button className="px-3 py-1 text-xs bg-gray-100 rounded">RAW</button>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-100 rounded-full z-0"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-purple-100 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="video" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  {/* Video Player Mockup */}
                  <div className="w-80 h-96 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-4 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Video className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Course Player</h4>
                          <p className="text-xs opacity-90">MP4 • HD 1080p</p>
                        </div>
                      </div>
                    </div>

                    {/* Video Preview */}
                    <div className="p-6">
                      <div className="w-full h-40 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl flex items-center justify-center mb-4 relative">
                        <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                          <span className="text-xs text-white">12:34</span>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="mb-4">
                        <h3 className="font-bold text-lg text-gray-800">Module 2: Advanced Techniques</h3>
                        <p className="text-gray-500 text-sm">Digital Marketing Mastery Course</p>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>12:34</span>
                          <span>45:21</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full w-1/4"></div>
                        </div>
                      </div>

                      {/* Course Navigation */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">
                            1
                          </div>
                          <span className="text-sm font-medium">Introduction</span>
                          <div className="ml-auto">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-yellow-100 rounded-lg border border-yellow-300">
                          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">
                            2
                          </div>
                          <span className="text-sm font-medium">Advanced Techniques</span>
                          <div className="ml-auto">
                            <div className="w-4 h-4 border-2 border-yellow-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-lg">
                          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">
                            3
                          </div>
                          <span className="text-sm text-gray-500">Case Studies</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-100 rounded-full z-0"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-amber-100 rounded-full z-0"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Video Content</h3>
                <p className="text-gray-600 mb-6">
                  Sell courses, tutorials, documentaries, short films, animations, and other video content with
                  professional streaming capabilities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Video className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Adaptive Streaming</h4>
                      <p className="text-sm text-gray-500">
                        Deliver video at various quality levels based on the viewer's connection speed.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Video className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Course Organization</h4>
                      <p className="text-sm text-gray-500">
                        Organize videos into modules, chapters, or series for educational content.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Video className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Interactive Features</h4>
                      <p className="text-sm text-gray-500">
                        Add quizzes, notes, and other interactive elements to video content.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Video className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Trailer Support</h4>
                      <p className="text-sm text-gray-500">
                        Create free preview trailers to market your premium video content.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="interactive" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Interactive Content</h3>
                <p className="text-gray-600 mb-6">
                  Sell interactive ebooks, web apps, games, quizzes, assessments, and other interactive digital
                  experiences.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileCode className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">HTML5 Support</h4>
                      <p className="text-sm text-gray-500">
                        Deliver interactive HTML5 content that works across devices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileCode className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Progress Tracking</h4>
                      <p className="text-sm text-gray-500">
                        Track user progress through interactive content like courses or games.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileCode className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">User Input</h4>
                      <p className="text-sm text-gray-500">
                        Support for forms, quizzes, and other interactive elements that accept user input.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileCode className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Cross-Platform Compatibility</h4>
                      <p className="text-sm text-gray-500">
                        Ensure your interactive content works on desktop, mobile, and tablet devices.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Interactive Content Mockup */}
                  <div className="w-80 h-96 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <FileCode className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Interactive Quiz</h4>
                          <p className="text-xs opacity-90">HTML5 • Web App</p>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Content */}
                    <div className="p-6">
                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Question 3 of 10</span>
                          <span>30%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-3/10"></div>
                        </div>
                      </div>

                      {/* Question */}
                      <div className="mb-6">
                        <h3 className="font-bold text-lg text-gray-800 mb-4">
                          What is the most effective digital marketing strategy?
                        </h3>
                        {/* Answer Options */}
                        <div className="space-y-3">
                          <div className="p-3 border-2 border-gray-200 rounded-lg hover:border-green-300 cursor-pointer transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                              <span className="text-gray-700">Social Media Marketing</span>
                            </div>
                          </div>
                          <div className="p-3 border-2 border-green-500 bg-green-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-green-700 font-medium">Content Marketing</span>
                            </div>
                          </div>
                          <div className="p-3 border-2 border-gray-200 rounded-lg hover:border-green-300 cursor-pointer transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                              <span className="text-gray-700">Email Marketing</span>
                            </div>
                          </div>
                          <div className="p-3 border-2 border-gray-200 rounded-lg hover:border-green-300 cursor-pointer transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                              <span className="text-gray-700">Paid Advertising</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 py-2 px-4 bg-gray-100 text-gray-600 rounded-lg font-medium">
                          Previous
                        </button>
                        <button className="flex-1 py-2 px-4 bg-green-500 text-white rounded-lg font-medium">
                          Next Question
                        </button>
                      </div>

                      {/* Score Display */}
                      <div className="mt-4 text-center">
                        <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-700">Score: 85%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-full z-0"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-emerald-100 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bundles" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  {/* Content Bundle Mockup */}
                  <div className="w-80 h-96 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <File className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Complete Bundle</h4>
                          <p className="text-xs opacity-90">Mixed Media • 5 Items</p>
                        </div>
                      </div>
                    </div>

                    {/* Bundle Contents */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">Digital Marketing Mastery</h3>
                        <p className="text-gray-500 text-sm">Complete learning package</p>
                      </div>

                      {/* Bundle Items */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <FileText className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">Complete Guide (PDF)</h4>
                            <p className="text-xs text-gray-500">120 pages</p>
                          </div>
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                            <Music className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">Audio Course</h4>
                            <p className="text-xs text-gray-500">8 hours</p>
                          </div>
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                          <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                            <Video className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">Video Tutorials</h4>
                            <p className="text-xs text-gray-500">12 videos</p>
                          </div>
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                            <FileCode className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">Interactive Tools</h4>
                            <p className="text-xs text-gray-500">Templates & Quizzes</p>
                          </div>
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg border border-pink-200">
                          <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                            <ImageIcon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">Design Assets</h4>
                            <p className="text-xs text-gray-500">50+ graphics</p>
                          </div>
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>
                      </div>

                      {/* Bundle Value */}
                      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-600">Bundle Value</p>
                            <p className="text-xs text-gray-500 line-through">$297 individual</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-purple-600">$197</p>
                            <p className="text-xs text-green-600">Save 34%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-full z-0"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-indigo-100 rounded-full z-0"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Content Bundles</h3>
                <p className="text-gray-600 mb-6">
                  Create and sell bundles that combine different types of content for a comprehensive offering.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <File className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Mixed Media Bundles</h4>
                      <p className="text-sm text-gray-500">
                        Combine text, audio, video, and other content types in a single package.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <File className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Series and Collections</h4>
                      <p className="text-sm text-gray-500">
                        Group related content into series or collections with special pricing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <File className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Tiered Access</h4>
                      <p className="text-sm text-gray-500">
                        Offer different bundle tiers with varying levels of content and features.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <File className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Bundle Discounts</h4>
                      <p className="text-sm text-gray-500">
                        Incentivize purchases with special pricing for bundled content.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
