"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            What is Rascal Network?
          </h2>

          <div className="grid gap-8 md:grid-cols-2 mt-12">
            <motion.div
              className="bg-purple-900/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Our Mission</h3>
              <p className="text-gray-300">
                Rascal Network was founded to create a community where conversations thrive without toxicity. We aim to
                build a peaceful yet powerful environment for all members.
              </p>
            </motion.div>

            <motion.div
              className="bg-purple-900/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Our Vision</h3>
              <p className="text-gray-300">
                We strive to become the most influential and positive force in the Telegram community, where every voice
                is heard and respected.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

