import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section
      lang="en"
      className={`${inter.className} bg-background antialiased scroll-smooth`}
    >
      {children}
    </section>
  )
}
