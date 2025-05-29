import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PublishersLoading() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
      <Footer />
    </main>
  )
}
