import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from 'next-themes'

interface ILogoProps {
  width?: number
  height?: number
}

export function PathwayLogo({ width, height }: ILogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  const darkColors = {
    first: '#90BB94',
    second: '#5347DE',
  }

  const lightColors = {
    first: '#D67B5B',
    second: '#E2AD5E',
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1142 1893"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <title>Pathway</title>
      <path
        d="M0 573C0 473.589 80.5888 393 180 393H288C294.627 393 300 398.373 300 405V1713C300 1812.41 219.411 1893 120 1893H12C5.37259 1893 0 1887.63 0 1881L0 573Z"
        fill={theme === 'light' ? '#111111' : '#F4F4F5'}
      />
      <path
        d="M842 180C842 80.5888 922.589 0 1022 0L1130 0C1136.63 0 1142 5.37258 1142 12V1320C1142 1419.41 1061.41 1500 962 1500H854C847.373 1500 842 1494.63 842 1488V180Z"
        fill={theme === 'light' ? '#111111' : '#F4F4F5'}
      />
      <motion.path
        d="M420 342C420 242.589 500.589 162 600 162H710C716.627 162 722 167.373 722 174V732C722 831.411 641.411 912 542 912H432C425.373 912 420 906.627 420 900V342Z"
        fill="url(#paint0_linear_285_30)"
        animate={{
          y: isHovered ? 750 : 0,
        }}
        transition={{
          duration: 0.9,
          ease: 'easeInOut',
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_285_30"
          x1="571"
          y1="162"
          x2="571"
          y2="912"
          gradientUnits="userSpaceOnUse"
        >
          <motion.stop
            offset="0%"
            animate={{
              stopColor: theme === 'light' ? lightColors.first : darkColors.first,
            }}
            transition={{
              duration: 0.9,
              ease: 'easeInOut',
            }}
          />
          <motion.stop
            offset="100%"
            animate={{
              stopColor: theme === 'light' ? lightColors.second : darkColors.second,
            }}
            transition={{
              duration: 0.9,
              ease: 'easeInOut',
            }}
          />
        </linearGradient>
      </defs>
    </svg>
  )
}
