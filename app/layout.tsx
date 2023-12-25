import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/ThemeProvider"
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
