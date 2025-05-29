import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PricingFAQ() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our pricing and plans
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">How do I know which plan is right for me?</AccordionTrigger>
            <AccordionContent>
              The best plan depends on the size of your catalog and your specific needs. The Starter plan at $20/month
              is ideal for individuals and small teams just getting started with digital publishing. The Growth plan at
              $249/month is designed for growing publishers with expanding catalogs and more advanced needs. The
              Enterprise plan starting from $492/month is for established publishers with large catalogs requiring
              comprehensive features and support.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">Can I upgrade or downgrade my plan later?</AccordionTrigger>
            <AccordionContent>
              Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be
              available immediately, and you'll be billed the prorated difference for the remainder of your billing
              cycle. When downgrading, the changes will take effect at the start of your next billing cycle.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards (Visa, Mastercard, American Express, Discover) and PayPal. For Enterprise
              plans, we also offer invoice payment options. Contact our sales team for more information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">Is there a free trial available?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer a 14-day free trial for all plans. No credit card is required to start your trial. You can
              explore all the features of your chosen plan during the trial period before making a commitment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">What happens if I exceed my plan limits?</AccordionTrigger>
            <AccordionContent>
              If you approach your plan limits (such as number of publications or storage), we'll notify you so you can
              either upgrade to a higher plan or manage your resources. We don't automatically charge for overages, but
              continued usage beyond your plan limits may affect performance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">
              Do you offer discounts for educational institutions or non-profits?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer special pricing for educational institutions, non-profit organizations, and libraries.
              Please contact our sales team to learn more about our discount programs and eligibility requirements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">What kind of support is included with each plan?</AccordionTrigger>
            <AccordionContent>
              The Basic plan includes standard email support with a response time of 24-48 hours. The Professional plan
              includes priority email support with a response time of 12-24 hours. The Enterprise plan includes 24/7
              priority support via email and phone, plus a dedicated account manager to help with your specific needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left">Can I cancel my subscription at any time?</AccordionTrigger>
            <AccordionContent>
              Yes, you can cancel your subscription at any time. When you cancel, you'll continue to have access to your
              plan until the end of your current billing cycle. We don't offer refunds for partial months of service.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
