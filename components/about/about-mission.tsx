interface AboutMissionProps {
  dict: {
    aboutMission: {
      title: string
      subtitle: string
      mainMessage: string
      simpleMessage: string
    }
  }
}

export function AboutMission({ dict }: AboutMissionProps) {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{dict.aboutMission.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.aboutMission.subtitle}
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-2xl mx-auto">
            {dict.aboutMission.mainMessage}
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-2xl mx-auto mt-2">{dict.aboutMission.simpleMessage}</p>
        </div>
      </div>
    </section>
  )
}
