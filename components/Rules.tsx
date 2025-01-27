"use client"

import { motion } from "framer-motion"
import { Shield, AlertTriangle, Check } from "lucide-react"

const rules = [
  {
    title: "Respect All Members",
    description: "Treat everyone with respect and courtesy. No discrimination or harassment will be tolerated.",
    icon: Shield,
  },
  {
    title: "No Toxicity",
    description: "Keep discussions constructive and positive. Toxic behavior will result in immediate action.",
    icon: AlertTriangle,
  },
  {
    title: "Follow Guidelines",
    description: "Adhere to Telegram's terms of service and our community guidelines.",
    icon: Check,
  },
]

const Rules = () => {
  return (
    <section id="rules" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Community Rules
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {rules.map((rule, index) => (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
                  <div className="flex justify-center mb-4">
                    <rule.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">{rule.title}</h3>
                  <p className="text-gray-400">{rule.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Rules

