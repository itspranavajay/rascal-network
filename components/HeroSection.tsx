"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/cyberpunk-city.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 text-neon-blue"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          RASCAL
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-neon-green"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Rule the Chaos | Eliminate Toxicity | Rise to Power
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="https://t.me/RascalNetwork"
            className="bg-neon-red text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Join the Revolution
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

