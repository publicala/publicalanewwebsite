import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with Publica.la
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The subscription tools, the ability to build libraries, and the flexibility to manage marketing alternatives make it an irreplaceable ally for the business. I couldn't do without it."
            name="Candelaria Pagella"
            role="Head of Marketing y Communication at Santillana"
            avatar="CP"
          />
          <TestimonialCard
            quote="Our digital sales have increased by 100% because we embarked on the digital adventure together."
            name="Fernando Sánchez"
            role="Head of Revista Barcelona"
            avatar="FS"
          />
          <TestimonialCard
            quote="The Publica.la platform is fast, user-friendly, and perfectly suited for growing both retail and institutional eBook operations."
            name="Martha Edna Suárez"
            role="CEO at Alfaeditorial Colombiana S.A."
            avatar="MS"
          />
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
