import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function CreatorsTestimonials() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from content creators who have built thriving businesses on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="As a photographer, I needed a platform that could showcase my work beautifully while protecting my images. Publica.la has been the perfect solution, allowing me to sell my photos directly to clients worldwide."
            name="David Wong"
            role="Professional Photographer"
            avatar="DW"
          />
          <TestimonialCard
            quote="I've been able to turn my podcast into a sustainable business by offering premium episodes and bonus content through Publica.la. The subscription model has created predictable monthly revenue."
            name="Aisha Johnson"
            role="Podcast Creator"
            avatar="AJ"
          />
          <TestimonialCard
            quote="As an independent author, I was looking for a way to sell my ebooks without giving away a huge percentage to retailers. This platform has allowed me to keep more of my earnings while building a direct relationship with my readers."
            name="Marco Rossi"
            role="Independent Author"
            avatar="MR"
          />
        </div>

        <div className="mt-16 bg-white border border-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Join thousands of creators monetizing their work</h3>
            <p className="text-gray-600">
              Content creators of all types are using our platform to build sustainable creative businesses.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <CreatorType name="Authors" />
            <CreatorType name="Photographers" />
            <CreatorType name="Musicians" />
            <CreatorType name="Educators" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string
  name: string
  role: string
  avatar: string
}) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm h-full flex flex-col">
      <CardContent className="pt-6 flex-1 relative">
        <div className="absolute top-6 left-6 text-primary/10">
          <Quote size={48} />
        </div>
        <p className="text-lg relative z-10 pl-4">{quote}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary">{avatar}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

function CreatorType({ name }: { name: string }) {
  return (
    <div className="h-12 bg-white rounded-md border border-gray-200 flex items-center justify-center px-4">
      <div className="text-gray-400 font-medium">{name}</div>
    </div>
  )
}
