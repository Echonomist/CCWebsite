import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chocolate.codes - Vocal Biomarker Diagnostics',
  description: 'Non-invasive diagnostic tools integrating voice, frequency, and human-centered design to promote well-being through science and technology.',
  keywords: 'vocal biomarkers, voice diagnostics, non-invasive health, frequency analysis, health technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
