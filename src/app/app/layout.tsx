'use client'

import DesktopSidebar from '@/components/sidebar/desktop-sidebar'
import MobileSidebar from '@/components/sidebar/mobile-sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DesktopSidebar />
      <div className="flex flex-col">
        <MobileSidebar />
        {children}
      </div>
    </div>
  )
}
