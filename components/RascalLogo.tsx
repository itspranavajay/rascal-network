"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useCallback } from "react"

const RascalLogo = () => {
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 })

  const updateGlitchOffset = useCallback(() => {
    setGlitchOffset({
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(updateGlitchOffset, 50)
    return () => clearInterval(interval)
  }, [updateGlitchOffset])

  const letterVariants = {
    initial: { y: 0 },
    animate: { y: [0, -5, 5, -5, 5, 0] },
  }

  return (
    <motion.div
      className="relative text-6xl font-bold text-neon-blue"
      style={{ fontFamily: "Cyberpunk, sans-serif" }}
      animate={{ scale: [1, 1.01, 0.99, 1] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <motion.span className="glitch-text" style={{ display: "inline-block" }}>
        {"RASCAL".split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: index * 0.1, repeat: Number.POSITIVE_INFINITY }}
            style={{ display: "inline-block" }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-neon-red"
        style={{
          clipPath: "inset(10% 0 10% 0)",
          transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`,
        }}
      >
        RASCAL
      </motion.span>
      <motion.span
        className="absolute inset-0 text-neon-green"
        style={{
          clipPath: "inset(30% 0 30% 0)",
          transform: `translate(${-glitchOffset.x}px, ${-glitchOffset.y}px)`,
        }}
      >
        RASCAL
      </motion.span>
    </motion.div>
  )
}

export default RascalLogo

