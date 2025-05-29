"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Shield, Globe, Zap, TrendingUp } from "lucide-react"

const paymentMethods = [
  { name: "Credit Cards", icon: CreditCard, color: "blue" },
  { name: "PayPal", icon: Shield, color: "purple" },
  { name: "Bank Transfer", icon: Globe, color: "green" },
  { name: "Digital Wallets", icon: Zap, color: "yellow" },
]

const revenueData = [
  { month: "Jan", amount: 12500 },
  { month: "Feb", amount: 15800 },
  { month: "Mar", amount: 18200 },
  { month: "Apr", amount: 22100 },
  { month: "May", amount: 25600 },
  { month: "Jun", amount: 28900 },
]

export function PaymentShowcase() {
  const maxRevenue = Math.max(...revenueData.map((d) => d.amount))

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Payment Processing</h2>
            <p className="text-lg text-gray-600 mb-8">
              Accept payments from customers worldwide with our secure, integrated payment system. Support for multiple
              payment methods and currencies makes it easy for readers to purchase your content.
            </p>

            <div className="space-y-6">
              {/* Payment methods */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Supported Payment Methods</h3>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <div key={method.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div
                          className={`w-8 h-8 rounded-full ${
                            method.color === "blue"
                              ? "bg-blue-100"
                              : method.color === "purple"
                                ? "bg-purple-100"
                                : method.color === "green"
                                  ? "bg-green-100"
                                  : "bg-yellow-100"
                          } flex items-center justify-center`}
                        >
                          <Icon
                            className={`h-4 w-4 ${
                              method.color === "blue"
                                ? "text-blue-600"
                                : method.color === "purple"
                                  ? "text-purple-600"
                                  : method.color === "green"
                                    ? "text-green-600"
                                    : "text-yellow-600"
                            }`}
                          />
                        </div>
                        <span className="font-medium">{method.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="space-y-3">
                  {[
                    "Secure SSL encryption for all transactions",
                    "Automatic tax calculation and compliance",
                    "Real-time payment processing and notifications",
                    "Comprehensive fraud protection",
                    "Multi-currency support for global sales",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Payment flow visualization */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Payment Process</h3>
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Customer selects content", status: "complete" },
                    { step: 2, title: "Secure checkout process", status: "complete" },
                    { step: 3, title: "Payment verification", status: "current" },
                    { step: 4, title: "Instant content delivery", status: "pending" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          item.status === "complete"
                            ? "bg-green-500 text-white"
                            : item.status === "current"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div
                          className={`font-medium ${
                            item.status === "complete"
                              ? "text-green-700"
                              : item.status === "current"
                                ? "text-blue-700"
                                : "text-gray-500"
                          }`}
                        >
                          {item.title}
                        </div>
                      </div>
                      {item.status === "complete" && (
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Revenue dashboard */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Revenue Overview</h3>
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>

                {/* Chart */}
                <div className="mb-4">
                  <div className="flex items-end gap-2 h-32">
                    {revenueData.map((data, i) => (
                      <div key={data.month} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                          style={{ height: `${(data.amount / maxRevenue) * 100}%` }}
                        ></div>
                        <div className="text-xs text-gray-500">{data.month}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">$28.9K</div>
                    <div className="text-sm text-green-700">This Month</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+24%</div>
                    <div className="text-sm text-blue-700">Growth</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transaction summary */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Recent Transactions</h3>
                <div className="space-y-3">
                  {[
                    { amount: "$29.99", type: "eBook Purchase", time: "2 min ago", status: "success" },
                    { amount: "$49.99", type: "Subscription", time: "15 min ago", status: "success" },
                    { amount: "$19.99", type: "Audiobook", time: "1 hour ago", status: "pending" },
                  ].map((transaction, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            transaction.status === "success" ? "bg-green-100" : "bg-yellow-100"
                          }`}
                        >
                          <CreditCard
                            className={`h-4 w-4 ${
                              transaction.status === "success" ? "text-green-600" : "text-yellow-600"
                            }`}
                          />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{transaction.type}</div>
                          <div className="text-xs text-gray-500">{transaction.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{transaction.amount}</div>
                        <div
                          className={`text-xs ${
                            transaction.status === "success" ? "text-green-600" : "text-yellow-600"
                          }`}
                        >
                          {transaction.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
