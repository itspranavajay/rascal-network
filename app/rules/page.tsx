"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

const rules = [
  "Respect all members at all times",
  "No hate speech, discrimination, or bullying",
  "Keep discussions constructive and on-topic",
  "No spamming or excessive self-promotion",
  "Protect your privacy and that of others",
  "Follow Telegram's Terms of Service",
  "Report any violations to the admins",
  "Be open to different perspectives and ideas",
  "Help maintain a positive and supportive environment",
  "Have fun and enjoy the Rascal Network community!",
]

const Rules = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-12 text-center text-neon-green glitch-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-text="Community Rules"
        >
          Community Rules
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="text-neon-blue mr-4" size={24} />
                <h2 className="text-xl font-bold text-neon-red">Rule {index + 1}</h2>
              </div>
              <p className="text-lg">{rule}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Rules

