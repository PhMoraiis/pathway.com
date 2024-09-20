"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Lottie from "lottie-react"

// Placeholder Lottie animations
const placeholderAnimation = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Placeholder",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shape Layer 1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 1, k: [{ t: 0, s: [0], h: 0 }, { t: 59, s: [360], h: 0 }], ix: 10 },
        p: { a: 0, k: [50, 50, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ty: "rc",
          d: 1,
          s: { a: 0, k: [40, 40], ix: 2 },
          p: { a: 0, k: [0, 0], ix: 3 },
          r: { a: 0, k: 0, ix: 4 },
          nm: "Rectangle Path 1",
          mn: "ADBE Vector Shape - Rect",
          hd: false
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }
  ],
  markers: []
}

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  }

  const menuItems = [
    { animation: placeholderAnimation, text: "Home" },
    { animation: placeholderAnimation, text: "Profile" },
    { animation: placeholderAnimation, text: "Settings" },
  ]

  return (
    <div className="relative min-h-screen">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[300px]">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sidebarVariants}
                className="h-full bg-background"
              >
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <nav className="p-4">
                  <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button
                          variant="ghost"
                          className="w-full justify-start items-center h-16"
                          onMouseEnter={() => setActiveItem(index)}
                          onMouseLeave={() => setActiveItem(null)}
                        >
                          <div className="w-12 h-12 mr-4">
                            <Lottie
                              animationData={item.animation}
                              loop={activeItem === index}
                              autoplay={activeItem === index}
                              style={{ width: '100%', height: '100%' }}
                            />
                          </div>
                          {item.text}
                        </Button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </SheetContent>
      </Sheet>
      <main className="p-4 sm:ml-[300px]">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p>Your main content goes here.</p>
      </main>
    </div>
  )
}