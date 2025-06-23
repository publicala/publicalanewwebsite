export function AboutStory() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">Today, publica.la is trusted by…</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">1,000+</div>
                  <div className="text-sm opacity-90">publishers, universities, and creators</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm opacity-90">countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1.5M+</div>
                  <div className="text-sm opacity-90">digital titles shared</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">How it all started</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                In 2016 we saw a clear opportunity: publishers, authors, and media organizations needed a better way to
                share and sell their digital content — directly, without intermediaries, and with full control.
              </p>
              <p>
                That’s when we built publica.la — a comprehensive platform designed to help them manage, promote, and
                monetize their content with simplicity and efficiency. Founded by a team of publishing and technology
                experts, publica.la emerged as a response to the limitations of traditional models and the lack of
                digital tools truly built for publishers.
              </p>
              <p>
                Our goal was simple: empower content creators and retailers of all sizes to sell directly to their
                audiences — eliminating intermediaries, fostering real connections between creators, sellers, and
                consumers, and helping them grow their revenue in a digital-first world.
              </p>
              <p>
                Over time, publica.la gained international recognition and expanded rapidly, becoming a leading platform
                in the digital publishing industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
