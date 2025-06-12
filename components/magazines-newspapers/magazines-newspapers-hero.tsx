"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, FileText } from "lucide-react"

export function MagazinesNewspapersHero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <FileText className="w-4 h-4 mr-2" />
                For Magazines & Newspapers
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Editorial{" "}
                </span>
                Workflow
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Streamline your digital publishing process with our comprehensive platform designed for modern magazines
                and newspapers. From content creation to reader engagement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Publishing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                View Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50M+</div>
                <div className="text-sm text-gray-600">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Editorial Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Window controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm font-medium text-gray-600">Editorial Dashboard</div>
                <div className="w-16"></div>
              </div>

              {/* Dashboard content */}
              <div className="space-y-6">
                {/* Header stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-blue-600 font-medium">Today's Articles</div>
                        <div className="text-2xl font-bold text-blue-900">24</div>
                      </div>
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-green-600 font-medium">Active Readers</div>
                        <div className="text-2xl font-bold text-green-900">12.5K</div>
                      </div>
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                </div>

                {/* Content pipeline */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Content Pipeline</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Breaking: Market Analysis</span>
                      </div>
                      <span className="text-xs text-gray-500">In Review</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Tech Weekly Roundup</span>
                      </div>
                      <span className="text-xs text-gray-500">Published</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Sports Update</span>
                      </div>
                      <span className="text-xs text-gray-500">Draft</span>
                    </div>
                  </div>
                </div>

                {/* Performance chart */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Reader Engagement</div>
                  <div className="flex items-end space-x-2 h-20">
                    {[40, 65, 45, 80, 55, 70, 85].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-t flex-1"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
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
