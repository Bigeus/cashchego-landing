import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import icon from "./favicon.ico"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CashChego | Sistema financeiro simplificado",
  description:
    "Sistema financeiro simplificado para micro e pequenas empresas..",
   icons: {
    icon: "../favicon.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
