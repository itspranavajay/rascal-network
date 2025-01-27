import "./globals.css"
import { Inter } from "next/font/google"
import AnimatedBackground from "@/components/AnimatedBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rascal Network",
  description: "Rule the Chaos | Eliminate Toxicity | Rise to Power",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <AnimatedBackground />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}

