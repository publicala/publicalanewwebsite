interface AboutStoryProps {
  dict: {
    aboutStory: {
      stats: {
        title: string
        publishers: {
          value: string
          label: string
        }
        countries: {
          value: string
          label: string
        }
        titles: {
          value: string
          label: string
        }
      }
      title: string
      paragraphs: Array<{
        text: string
      }>
    }
  }
}

export function AboutStory({ dict }: AboutStoryProps) {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">{dict.aboutStory.stats.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">{dict.aboutStory.stats.publishers.value}</div>
                  <div className="text-sm opacity-90">{dict.aboutStory.stats.publishers.label}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{dict.aboutStory.stats.countries.value}</div>
                  <div className="text-sm opacity-90">{dict.aboutStory.stats.countries.label}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{dict.aboutStory.stats.titles.value}</div>
                  <div className="text-sm opacity-90">{dict.aboutStory.stats.titles.label}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{dict.aboutStory.title}</h2>
            <div className="space-y-6 text-lg text-gray-700">
              {dict.aboutStory.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph.text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
