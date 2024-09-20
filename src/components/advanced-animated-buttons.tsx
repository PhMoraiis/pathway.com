'use client'

import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2, Send, ThumbsUp } from "lucide-react"

const AnimatedButton = motion(Button)

export default function Component() {
  const [isLoading, setIsLoading] = React.useState(false)
  const controls = useAnimation()

  const handleLoadingClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  const handleSuccessClick = async () => {
    await controls.start({ scale: 1.2 })
    await controls.start({ scale: 1 })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gray-100 rounded-lg">
      <AnimatedButton
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(236, 72, 153)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Gradient Glow
      </AnimatedButton>

      <AnimatedButton
        variant="outline"
        className="border-2 border-blue-500"
        whileHover={{ 
          scale: 1.05,
          borderColor: ["#3B82F6", "#EC4899", "#10B981", "#3B82F6"],
        }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Rainbow Border
      </AnimatedButton>

      <AnimatedButton
        className="bg-green-500 text-white overflow-hidden group"
        whileHover={{ scale: 1.05 }}
      >
        <span className="relative z-10">Slide Icon</span>
        <motion.div
          className="absolute inset-0 bg-green-600"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
        />
        <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
      </AnimatedButton>

      <AnimatedButton
        className="bg-purple-500 text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLoadingClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        {isLoading ? "Loading..." : "Click to Load"}
      </AnimatedButton>

      <AnimatedButton
        className="bg-yellow-500 text-white"
        whileHover={{ 
          scale: 1.05,
          textShadow: "0px 0px 8px rgb(0,0,0)",
          boxShadow: "0px 0px 8px rgb(234, 179, 8)"
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          Floating Text
        </motion.span>
      </AnimatedButton>

      <AnimatedButton
        className="bg-red-500 text-white overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Ripple Effect</span>
        <motion.span
          className="absolute inset-0 bg-white"
          initial={{ scale: 0, opacity: 0.5 }}
          whileHover={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatedButton>

      <AnimatedButton
        className="bg-indigo-500 text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ rotate: 360, transition: { duration: 0.5 } }}
      >
        Spin on Click
      </AnimatedButton>

      <AnimatedButton
        className="bg-teal-500 text-white"
        animate={controls}
        onClick={handleSuccessClick}
      >
        <motion.span className="flex items-center">
          Success
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ThumbsUp className="ml-2 h-4 w-4" />
          </motion.span>
        </motion.span>
      </AnimatedButton>

      <AnimatedButton
        className="bg-gray-800 text-white"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="flex items-center"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Send
          <Send className="ml-2 h-4 w-4" />
        </motion.div>
      </AnimatedButton>

      <AnimatedButton
        variant="outline"
        className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Smooth Color Transition
      </AnimatedButton>
    </div>
  )
}