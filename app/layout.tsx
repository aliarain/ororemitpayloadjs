import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Oro Remit', template: '%s | Oro Remit' },
  description: 'Fast, affordable international money transfers.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
