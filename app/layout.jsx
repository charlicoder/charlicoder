import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import { Suspense } from "react"

export const metadata = {
  title: "Charlie Coder - Python Developer & AI Solutions Expert",
  description:
    "Professional Python developer with 14+ years of experience in full-stack web applications, data pipelines, chatbots, and AI-driven solutions.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
