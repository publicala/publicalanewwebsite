"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HomeCaseStudy() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Success Story</h2>
          <p className="text-lg text-gray-600">How Editorial Hammurabi transformed their digital publishing strategy</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Company info and visual representation */}
          <div className="space-y-6">
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-black flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/logos/hammurabi-logo.webp"
                      alt="Hammurabi Logo"
                      width={64}
                      height={64}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Editorial Hammurabi</h3>
                    <p className="text-gray-600">Leading Legal Publisher • Argentina</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-blue-700">500+</div>
                    <div className="text-xs text-blue-600">Legal Texts</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Users className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-green-700">15K+</div>
                    <div className="text-xs text-green-600">Subscribers</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-purple-700">300%</div>
                    <div className="text-xs text-purple-600">Growth</div>
                  </div>
                </div>

                {/* Digital transformation visualization */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Digital Transformation Progress</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote card */}
            <Card className="border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "Publica.la has transformed how we deliver our legal content to professionals across Argentina and
                  beyond. The platform's flexibility and ease of use have helped us overcome the initial skepticism from
                  our traditional audience."
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold">Editorial Hammurabi Team</div>
                  <div className="text-gray-600">Leadership Team, Editorial Hammurabi S.R.L.</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Case study content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-600 mb-4">
                Editorial Hammurabi, a family-owned SME and leading publisher of legal texts in Argentina, needed to
                modernize their operations and transition from traditional print to digital formats while overcoming
                skepticism from legal professionals.
              </p>
              <div className="space-y-2">
                {[
                  "Transition from traditional print to digital formats",
                  "Overcome skepticism from legal professionals",
                  "Find a reliable and scalable distribution solution",
                  "Create seamless experience for teams and users",
                ].map((challenge, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">The Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { metric: "Sales Increase", value: "Significant", color: "green" },
                  { metric: "New Subscribers", value: "Growing", color: "blue" },
                  { metric: "Global Reach", value: "Expanded", color: "purple" },
                  { metric: "Team Efficiency", value: "Improved", color: "orange" },
                ].map((result) => (
                  <div
                    key={result.metric}
                    className={`p-4 rounded-lg ${
                      result.color === "green"
                        ? "bg-green-50 border border-green-200"
                        : result.color === "blue"
                          ? "bg-blue-50 border border-blue-200"
                          : result.color === "purple"
                            ? "bg-purple-50 border border-purple-200"
                            : "bg-orange-50 border border-orange-200"
                    }`}
                  >
                    <div
                      className={`font-bold ${
                        result.color === "green"
                          ? "text-green-700"
                          : result.color === "blue"
                            ? "text-blue-700"
                            : result.color === "purple"
                              ? "text-purple-700"
                              : "text-orange-700"
                      }`}
                    >
                      {result.value}
                    </div>
                    <div className="text-sm text-gray-600">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild className="w-full">
              <Link href="/case-studies/hammurabi-publishing">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
