import Footer from "@/components/Footer"
import Header from "@/components/Header"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Magic World",
  description: "Video Streaming App built in Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
