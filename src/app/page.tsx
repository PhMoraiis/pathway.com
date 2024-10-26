'use client'

import Dashboard from '@/components/dashboard'
import { Header } from '@/components/header'
import Navbar from '@/components/header/index'

export default function Home() {
  return (
    // <div className="relative w-full flex items-center justify-center">
    //   <Navbar className="top-2" />
    // </div>
    <>
      <Header />
      <Dashboard />
      <Dashboard />
    </>
  )
}
