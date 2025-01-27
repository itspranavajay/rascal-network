"use client"

import type React from "react"
import { useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"

const RascalDestroyerLogo: React.FC = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    })
  }, [controls])

  const glitchAnim = {
    x: [0, -5, 5, -5, 5, 0],
    y: [0, 5, -5, 5, -5, 0],
    filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(270deg)", "hue-rotate(0deg)"],
    transition: {
      duration: 0.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  }

  const explosionAnim = {
    scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
    rotate: [0, -5, 5, -3, 3, 0],
    transition: {
      duration: 0.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={controls} className="relative w-80 h-80">
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <defs>
            <filter id="glitch">
              <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <radialGradient id="explosionGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#FF00FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <motion.circle
            cx="200"
            cy="200"
            r="180"
            fill="url(#explosionGradient)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.g filter="url(#glitch)" animate={glitchAnim}>
            <path d="M200 50 L350 200 L200 350 L50 200 Z" fill="none" stroke="#FF00FF" strokeWidth="8" />
            <motion.text
              x="200"
              y="220"
              fontSize="48"
              fontWeight="bold"
              fontFamily="'Cyberpunk', Arial, sans-serif"
              fill="#00FFFF"
              textAnchor="middle"
              animate={explosionAnim}
            >
              RASCAL
            </motion.text>
          </motion.g>

          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.line
              key={i}
              x1="200"
              y1="200"
              x2="350"
              y2="200"
              stroke="#FF00FF"
              strokeWidth="2"
              initial={{ opacity: 0.5, rotate: i * 60 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                rotate: [i * 60, i * 60 + 360],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}

          <motion.circle
            cx="200"
            cy="200"
            r="190"
            fill="none"
            stroke="#00FFFF"
            strokeWidth="4"
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
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.img
            src="/telegram-logo.png"
            alt="Telegram Logo"
            className="w-16 h-16"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default RascalDestroyerLogo

