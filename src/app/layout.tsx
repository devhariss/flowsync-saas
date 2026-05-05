import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlowSync — Automate every workflow in minutes',
  description:
    'FlowSync is a modern SaaS workflow automation platform built with Next.js 15+, designed for fast-moving product, ops, and engineering teams.',
  metadataBase: new URL('https://flowsync.io'),
  openGraph: {
    title: 'FlowSync — Automate every workflow in minutes',
    description:
      'Connect your tools, eliminate busywork, and monitor every automation from one elegant control plane.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
