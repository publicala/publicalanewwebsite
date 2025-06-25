import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function BookshopsTestimonials({ dict }: { dict: any }) {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.testimonials.map((testimonial: any) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              bookshop={testimonial.bookshop}
              rating={testimonial.rating}
            />
          ))}
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

function TestimonialCard({ quote, name, role, bookshop, rating }: { 
  quote: string; 
  name: string; 
  role: string; 
  bookshop: string; 
  rating: number; 
}) {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
            />
          ))}
        </div>
        <blockquote className="text-gray-600 mb-4 italic">"{quote}"</blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-medium text-sm">{name.split(" ").map(n => n[0]).join("")}</span>
          </div>
          <div>
            <div className="font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{role}</div>
            <div className="text-sm text-primary font-medium">{bookshop}</div>
          </div>
        </div>
      </CardContent>
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
