"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 shadow-xl border border-gray-200">
          <CardHeader className="bg-primary text-white p-4 flex flex-row justify-between items-center">
            <h3 className="font-medium">Enterprise Support</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-white hover:bg-primary-foreground/20"
            >
              <X size={18} />
            </Button>
          </CardHeader>
          <CardContent className="p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p className="text-sm">Hello! How can our enterprise team assist you today?</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t">
            <form
              className="flex w-full gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                if (message.trim()) {
                  // Handle message submission
                  setMessage("")
                }
              }}
            >
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="sm">
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button onClick={() => setIsOpen(true)} className="h-14 w-14 rounded-full shadow-lg">
          <MessageCircle size={24} />
        </Button>
      )}
    </div>
  )
}
