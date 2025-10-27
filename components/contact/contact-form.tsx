"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send } from "lucide-react"
import { FormReassurance } from "@/components/form-reassurance"

interface ContactFormProps {
  dict: {
    contactForm: {
      title: string
      firstName: {
        label: string
        placeholder?: string
      }
      lastName: {
        label: string
        placeholder?: string
      }
      email: {
        label: string
        placeholder?: string
      }
      company: {
        label: string
        placeholder?: string
      }
      subject: {
        label: string
        placeholder: string
        options: Array<{
          value: string
          label: string
        }>
      }
      message: {
        label: string
        placeholder: string
      }
      submitButton: {
        sending: string
        default: string
      }
    }
  }
}

export function ContactForm({ dict }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle form submission logic here
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{dict.contactForm.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              {dict.contactForm.firstName.label} *
            </label>
            <Input 
              id="firstName" 
              name="firstName" 
              placeholder={dict.contactForm.firstName.placeholder}
              required 
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              {dict.contactForm.lastName.label} *
            </label>
            <Input 
              id="lastName" 
              name="lastName" 
              placeholder={dict.contactForm.lastName.placeholder}
              required 
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {dict.contactForm.email.label} *
          </label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder={dict.contactForm.email.placeholder}
            required 
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            {dict.contactForm.company.label}
          </label>
          <Input 
            id="company" 
            name="company" 
            placeholder={dict.contactForm.company.placeholder}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            {dict.contactForm.subject.label} *
          </label>
          <Select name="subject" required>
            <SelectTrigger>
              <SelectValue placeholder={dict.contactForm.subject.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {dict.contactForm.subject.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {dict.contactForm.message.label} *
          </label>
          <Textarea 
            id="message" 
            name="message" 
            rows={6} 
            placeholder={dict.contactForm.message.placeholder}
            required 
          />
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            dict.contactForm.submitButton.sending
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              {dict.contactForm.submitButton.default}
            </>
          )}
        </Button>
      </form>
      <FormReassurance />
    </div>
  )
}
