"use client"

import { motion } from "framer-motion"

const rules = [
  "Respect all members",
  "No hate speech or discrimination",
  "Keep discussions constructive",
  "No spamming or excessive self-promotion",
  "Follow Telegram's Terms of Service",
]

const CommunityRules = () => {
  return (
    <section id="rules" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-neon-green glitch-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Community Rules
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center mr-4"
                whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              <motion.p
                className="text-lg"
                whileHover={{ color: "#00ffff", textShadow: "0 0 5px rgba(0, 255, 255, 0.7)" }}
              >
                {rule}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunityRules

