import { Card, CardContent } from "@/components/ui/card"

export function PlatformPreview() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl">
        <CardContent className="p-0 relative">
          {/* Browser Controls */}
          <div className="bg-gray-100 p-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-md h-6 w-full max-w-md mx-auto flex items-center justify-between px-3">
                <div className="w-4 h-4"></div>
                <span className="text-xs text-gray-500">publica.la/preview</span>
                <div className="w-4 h-4"></div>
              </div>
            </div>
          </div>

          {/* Platform Content */}
          <div className="bg-yellow-400 p-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-md">
                <div className="w-10 h-10 bg-yellow-200 rounded-md flex items-center justify-center">
                  <span className="text-yellow-800 font-bold">P</span>
                </div>
              </div>
              <div className="text-4xl font-bold text-white">STEP BACK</div>
            </div>

            {/* Mobile Preview */}
            <div className="relative">
              <div className="absolute -top-12 -right-4 bg-gray-800 rounded-3xl border-4 border-black w-40 h-80 overflow-hidden shadow-xl">
                <div className="bg-black h-6 flex items-center justify-center">
                  <div className="w-16 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <div className="bg-yellow-400 h-full p-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-white p-1 rounded-md">
                      <div className="w-5 h-5 bg-yellow-200 rounded-md flex items-center justify-center">
                        <span className="text-yellow-800 font-bold text-xs">P</span>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-white">STEP BACK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
