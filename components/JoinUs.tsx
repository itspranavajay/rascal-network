"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const JoinUs = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-neon-red glitch-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join the Revolution
        </motion.h2>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href="https://t.me/RascalNetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neon-red text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-neon-blue hover:text-white transform hover:scale-105"
          >
            Join us on Telegram
          </Link>
        </motion.div>
        <motion.p
          className="mt-8 text-center text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          END💀
        </motion.p>
      </div>
    </section>
  )
}

export default JoinUs

