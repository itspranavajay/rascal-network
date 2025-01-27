"use client"

import type React from "react"
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Shield, Zap, Users } from "lucide-react"

const RascalNetworkLogo: React.FC = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    })
  }, [controls])

  const glitchAnim = {
    x: [0, -3, 3, -3, 3, 0],
    y: [0, 3, -3, 3, -3, 0],
    filter: ["hue-rotate(0deg)", "hue-rotate(45deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(0deg)"],
    transition: {
      duration: 0.3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  }

  const pulseAnim = {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={controls} className="relative w-80 h-80">
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <defs>
            <filter id="glitch">
              <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a148c" />
              <stop offset="100%" stopColor="#311b92" />
            </linearGradient>
          </defs>

          <motion.circle cx="200" cy="200" r="190" fill="url(#bgGradient)" animate={pulseAnim} />

          <motion.g filter="url(#glitch)" animate={glitchAnim}>
            <path d="M200 50 L350 200 L200 350 L50 200 Z" fill="none" stroke="#7c4dff" strokeWidth="8" />
            <motion.text
              x="200"
              y="220"
              fontSize="48"
              fontWeight="bold"
              fontFamily="'Cyberpunk', Arial, sans-serif"
              fill="#b388ff"
              textAnchor="middle"
              animate={pulseAnim}
            >
              RASCAL
            </motion.text>
          </motion.g>

          <motion.circle
            cx="200"
            cy="200"
            r="170"
            fill="none"
            stroke="#7c4dff"
            strokeWidth="2"
            strokeDasharray="10 5"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </svg>

        <motion.div
          className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Shield size={48} color="#b388ff" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        >
          <Zap size={48} color="#b388ff" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <Users size={48} color="#b388ff" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default RascalNetworkLogo

