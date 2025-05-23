import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { Inter } from 'next/font/google'
import Providers from '@/lib/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background antialiased scroll-smooth`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
