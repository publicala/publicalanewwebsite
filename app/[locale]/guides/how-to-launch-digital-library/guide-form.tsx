"use client"

import { useState } from "react"

export function GuideForm() {
  const [downloaded, setDownloaded] = useState(false)
  
  if (!downloaded) {
    return (
      <form
        className="mt-6 p-4 border rounded-xl bg-white shadow-sm grid gap-3 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault()
          setDownloaded(true)
        }}
      >
        <input name="name" placeholder="Your name" className="border rounded-md px-3 py-2" required />
        <input name="email" type="email" placeholder="Work email" className="border rounded-md px-3 py-2" required />
        <button className="sm:col-span-2 bg-primary text-white rounded-md py-2">Get the checklist</button>
      </form>
    )
  }
  
  return (
    <a href="/templates/digital-library-checklist.pdf" className="inline-block mt-6 bg-primary text-white rounded-md px-4 py-2" download>
      Download the checklist
    </a>
  )
}

