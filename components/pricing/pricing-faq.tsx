import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface PricingFAQProps {
  dict: {
    pricingFAQ: {
      title: string
      subtitle: string
      questions: Array<{
        question: string
        answer: string
      }>
    }
  }
}

export function PricingFAQ({ dict }: PricingFAQProps) {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{dict.pricingFAQ.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.pricingFAQ.subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {dict.pricingFAQ.questions.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
