import { Building2, TrendingUp, Users, DollarSign, Clock, Award } from "lucide-react"

export function MagazinesNewspapersCaseStudy() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            <Award className="w-4 h-4 mr-2" />
            Success Story
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Digital Tribune Transformed Their Publishing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how a leading digital newspaper increased their readership by 300% and revenue by 250% using our
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Company info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">DT</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Digital Tribune</h3>
                <p className="text-gray-600">Independent Digital Newspaper</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-1" />
                    <span>Media & Publishing</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>50-100 employees</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h4>
                <p className="text-gray-600 leading-relaxed">
                  Digital Tribune was struggling with declining readership and revenue. Their legacy publishing system
                  was slow, their mobile experience was poor, and they lacked the analytics needed to understand their
                  audience.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h4>
                <p className="text-gray-600 leading-relaxed">
                  They migrated to our comprehensive publishing platform, implementing our editorial workflow, reader
                  engagement tools, and advanced analytics to transform their digital presence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">Implementation Timeline</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Platform migration completed in 2 weeks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Editorial team training completed in 1 week</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Full optimization achieved in 6 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Results After 6 Months</h3>
                <p className="text-sm text-gray-600">Measurable impact across all metrics</p>
              </div>

              <div className="space-y-6">
                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-green-600 font-medium">Monthly Readers</div>
                        <div className="text-2xl font-bold text-green-900">180K</div>
                      </div>
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+300% increase</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-blue-600 font-medium">Monthly Revenue</div>
                        <div className="text-2xl font-bold text-blue-900">$85K</div>
                      </div>
                      <DollarSign className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+250% increase</span>
                    </div>
                  </div>
                </div>

                {/* Performance improvements */}
                <div className="space-y-4">
                  <div className="text-sm font-medium text-gray-700">Key Improvements</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Page Load Speed</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
                        </div>
                        <span className="text-sm font-medium text-green-600">85% faster</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Mobile Engagement</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                        </div>
                        <span className="text-sm font-medium text-blue-600">80% increase</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Subscriber Retention</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
                        </div>
                        <span className="text-sm font-medium text-purple-600">75% improvement</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700 italic mb-2">
                    "The platform transformation exceeded our expectations. We've not only recovered our readership but
                    grown it exponentially."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">SM</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Sarah Mitchell</div>
                      <div className="text-xs text-gray-600">Editor-in-Chief, Digital Tribune</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
