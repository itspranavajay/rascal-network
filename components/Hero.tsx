"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://sjc.microlink.io/5ayGxMxlZOL5OfUO6rDf5xCbU0XCyN897o8w2KgNz50ftOOyVzkPGXJKPmbBpKGIsMMcN4Q6WKxFIeoZ_b9bUQ.jpeg')",
          filter: "brightness(0.8)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          RASCAL
        </motion.h1>
        <motion.div
          className="text-xl md:text-3xl text-purple-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TypeAnimation
            sequence={["Rule the Chaos", 2000, "Eliminate Toxicity", 2000, "Rise to Power", 2000]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="font-light"
          />
        </motion.div>
        <motion.a
          href="https://t.me/RascalNetwork"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600/20 text-purple-300 px-8 py-3 rounded-full text-lg hover:bg-purple-600/30 transition duration-300 border border-purple-500/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Telegram
        </motion.a>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="w-6 h-10 border-2 border-purple-400 rounded-full p-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-1 h-2 bg-purple-400 rounded-full mx-auto"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

