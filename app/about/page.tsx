"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const About = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cyberpunk-city.jpg')",
          backgroundPositionY: `${scrollY * 0.5}px`,
        }}
      >
        <div className="container mx-auto px-4 py-16">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-center text-neon-blue glitch-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-text="About Rascal Network"
          >
            About Rascal Network
          </motion.h1>
          <motion.div
            className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.p
              className="text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Rascal Network was founded with a vision to create a community where conversations thrive without
              toxicity. We are the architects of a new digital era, where power and peace coexist in perfect harmony.
            </motion.p>
            <motion.p
              className="text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Our mission is to build a peaceful yet powerful environment for all members. We strive to make
              communication easy and accessible across all our groups, eliminating barriers and fostering understanding.
            </motion.p>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Join us in our quest to become the most influential and positive force in the Telegram community.
              Together, we'll rise to new heights of power and create a digital utopia where every voice is heard and
              respected.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About

