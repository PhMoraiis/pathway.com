import { Toaster } from '@/components/ui/toaster'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section
      lang='en'
      className={`${inter.className} bg-zinc-100 dark:bg-zinc-900 antialiased scroll-smooth`}
    >
      {children}
      <Toaster />
    </section>
  )
}
