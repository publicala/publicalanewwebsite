import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function BookshopsTestimonials() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Bookshops Say About Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from bookshops that have expanded their business with our digital platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Adding digital offerings through Publica.la has been a game-changer for our independent bookshop. We've reached new customers and created an additional revenue stream without any inventory costs."
            name="Emily Chen"
            role="Owner, Lighthouse Books"
            avatar="EC"
          />
          <TestimonialCard
            quote="Our customers love being able to instantly purchase and download ebooks from us. The platform was easy to integrate with our existing website and POS system."
            name="Marcus Johnson"
            role="Manager, Cornerstone Bookstore"
            avatar="MJ"
          />
          <TestimonialCard
            quote="The digital bookstore has allowed us to compete with larger retailers by offering a unique, curated selection of digital content that reflects our shop's personality and expertise."
            name="Sofia Rodriguez"
            role="Co-founder, Chapter One Books"
            avatar="SR"
          />
        </div>

        <div className="mt-16 bg-white border border-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Join hundreds of bookshops expanding their reach</h3>
            <p className="text-gray-600">
              Bookshops of all sizes are using our platform to grow their business in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <BookshopLogo name="City Lights" />
            <BookshopLogo name="Book Nook" />
            <BookshopLogo name="Page Turner" />
            <BookshopLogo name="Novel Ideas" />
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

function BookshopLogo({ name }: { name: string }) {
  return (
    <div className="h-12 bg-white rounded-md border border-gray-200 flex items-center justify-center px-4">
      <div className="text-gray-400 font-medium">{name}</div>
    </div>
  )
}
