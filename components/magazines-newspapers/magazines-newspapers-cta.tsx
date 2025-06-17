import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Users, BarChart3 } from "lucide-react"

export function MagazinesNewspapersCta() {
  const benefits = [
    "Transform print editions into digital ePapers",
    "Mobile-ready with Smart Zoom technology",
    "Global distribution without borders",
    "Real-time analytics and insights",
    "Comprehensive API integrations",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                <FileText className="w-4 h-4 mr-2" />
                Ready to Go Digital?
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                Are You Ready for Us to Boost the Sales of Your Publication?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join hundreds of successful magazines and newspapers that have transformed their printed editions into
                engaging digital ePapers with global reach.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started For Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Request a Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">400+</div>
                <div className="text-sm text-blue-200">Publishers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2M+</div>
                <div className="text-sm text-blue-200">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1.8M+</div>
                <div className="text-sm text-blue-200">Digital Titles</div>
              </div>
            </div>
          </div>

          {/* Success metrics visualization */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-white">Platform Impact</h3>
                <p className="text-sm text-blue-200">Average results across our customers</p>
              </div>

              <div className="space-y-6">
                {/* Impact metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-blue-200 font-medium">Reader Growth</div>
                        <div className="text-2xl font-bold text-white">+185%</div>
                      </div>
                      <Users className="w-8 h-8 text-blue-300" />
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-blue-200 font-medium">Revenue Increase</div>
                        <div className="text-2xl font-bold text-white">+140%</div>
                      </div>
                      <BarChart3 className="w-8 h-8 text-green-300" />
                    </div>
                  </div>
                </div>

                {/* Success indicators */}
                <div className="space-y-4">
                  <div className="text-sm font-medium text-white">Success Indicators</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-200">Digital Transformation</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-white/20 rounded-full h-2 mr-2">
                          <div className="bg-green-400 h-2 rounded-full w-11/12"></div>
                        </div>
                        <span className="text-sm font-medium text-green-400">95% success</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-200">Global Reach</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-white/20 rounded-full h-2 mr-2">
                          <div className="bg-blue-400 h-2 rounded-full w-5/6"></div>
                        </div>
                        <span className="text-sm font-medium text-blue-400">45+ countries</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-200">Customer Satisfaction</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-white/20 rounded-full h-2 mr-2">
                          <div className="bg-purple-400 h-2 rounded-full w-11/12"></div>
                        </div>
                        <span className="text-sm font-medium text-purple-400">4.8/5 rating</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to action */}
                <div className="bg-white/10 p-4 rounded-lg border border-white/20 text-center">
                  <div className="text-sm text-blue-200 mb-2">Ready to transform your publication?</div>
                  <div className="text-lg font-semibold text-white">Start your free trial today</div>
                  <div className="text-sm text-blue-200 mt-1">No setup fees • Cancel anytime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
