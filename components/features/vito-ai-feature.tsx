import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, BookOpen, BarChart3, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function VitoAIFeature() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                AI-Powered Reading Assistant
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Meet <span className="text-primary">Vito AI</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
                An intelligent reading companion that enhances comprehension through interactive summaries,
                self-assessments, and personalized learning experiences.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-md font-medium">
                  <Link href="/get-started">
                    Try Vito AI
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md font-medium">
                  <Link href="/schedule-demo">See Demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">Vito AI Assistant</div>
                    <div className="text-sm text-gray-500">Online</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm">Hi! I've just finished reading Chapter 3. Can you provide a summary?</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-sm">
                      Of course! Chapter 3 covers three key concepts: market analysis, competitive positioning, and
                      strategic planning. Would you like me to create a quick quiz to test your understanding?
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Yes, create quiz
                    </Button>
                    <Button size="sm" variant="outline">
                      More details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Reading Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vito AI transforms passive reading into an interactive learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Interactive Summaries"
              description="Get instant chapter summaries and key takeaways to reinforce learning"
              color="bg-blue-500"
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Self-Assessments"
              description="Test comprehension with AI-generated quizzes and knowledge checks"
              color="bg-purple-500"
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Progress Tracking"
              description="Monitor reading progress and learning outcomes with detailed analytics"
              color="bg-green-500"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Instant Answers"
              description="Ask questions about content and get immediate, contextual responses"
              color="bg-orange-500"
            />
            <FeatureCard
              icon={<Bot className="h-8 w-8" />}
              title="Personalized Learning"
              description="Adaptive recommendations based on reading patterns and preferences"
              color="bg-pink-500"
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8" />}
              title="Knowledge Retention"
              description="Spaced repetition and review systems to improve long-term retention"
              color="bg-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Vito AI Works</h2>
            <p className="text-lg text-gray-600">Simple, seamless, and intelligent</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              step="1"
              title="Read & Engage"
              description="Read your content while Vito AI analyzes and understands the material in real-time"
            />
            <ProcessStep
              step="2"
              title="Ask & Learn"
              description="Ask questions, request summaries, or take assessments at any point during your reading"
            />
            <ProcessStep
              step="3"
              title="Track & Improve"
              description="Monitor your progress and receive personalized recommendations for better learning outcomes"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits for Publishers & Readers</h2>
              <div className="space-y-6">
                <BenefitItem
                  title="Increased Engagement"
                  description="Readers spend 40% more time with content when using Vito AI"
                />
                <BenefitItem
                  title="Better Comprehension"
                  description="Interactive features improve understanding and knowledge retention"
                />
                <BenefitItem
                  title="Higher Completion Rates"
                  description="AI-assisted reading leads to 60% higher content completion rates"
                />
                <BenefitItem
                  title="Valuable Analytics"
                  description="Publishers gain insights into reader behavior and content effectiveness"
                />
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Reader Engagement Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Time on Content</span>
                    <span className="font-bold">+40%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-4/5"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Completion Rate</span>
                    <span className="font-bold">+60%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-3/5"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Knowledge Retention</span>
                    <span className="font-bold">+75%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-white mb-4`}>{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProcessStep({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function BenefitItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <CheckCircle className="h-4 w-4 text-white" />
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
