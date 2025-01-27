"use client"

import { motion } from "framer-motion"
import { Crown, Shield, Star, Zap, Users } from "lucide-react"

const teamMembers = [
  { name: "M I K E Y", role: "Founder", icon: Crown, color: "text-yellow-400", username: "Mikey_Rascals" },
  { name: "E R E N", role: "Co-Founder", icon: Shield, color: "text-purple-400", username: "Afk_x_eren" },
  { name: "J A C K", role: "Co-Founder", icon: Shield, color: "text-purple-400", username: "Jackiie_jack" },
  { name: "O R E K I", role: "Co-Founder", icon: Shield, color: "text-purple-400", username: "TOMO_XD" },
  { name: "H A R S H U", role: "President", icon: Star, color: "text-pink-400", username: "Harshu_Raven" },
  { name: "Y H W A C H", role: "President", icon: Star, color: "text-pink-400", username: "Yhwach_the_almightyy" },
  { name: "Nᴀᴍᴇʟᴇss", role: "President", icon: Star, color: "text-pink-400", username: "Fucking_Rascal" },
  { name: "A Y A N", role: "Expert", icon: Zap, color: "text-blue-400", username: "myself_ayan_143" },
  { name: "𝗥 𝚵 𝗫 𝗫", role: "Expert", icon: Zap, color: "text-blue-400", username: "Dark_Dise" },
  { name: "R E N G O K U", role: "Expert", icon: Zap, color: "text-blue-400", username: "Rengoku_rascal" },
  { name: "X", role: "Expert", icon: Zap, color: "text-blue-400", username: "Neccan_n" },
  { name: "L O K I", role: "Expert", icon: Zap, color: "text-blue-400", username: "xdloki" },
  { name: "D O P E", role: "Expert", icon: Zap, color: "text-blue-400", username: "stancovicj" },
  { name: "A L E X", role: "Admin", icon: Users, color: "text-green-400", username: "AloneBoy1209" },
  { name: "J O H A N", role: "Admin", icon: Users, color: "text-green-400", username: "Johan_liebert_19" },
  { name: "N A R U T O", role: "Admin", icon: Users, color: "text-green-400", username: "Naruto_style" },
  { name: "Mᴇᴀɴɪɴɢʟᴇss", role: "Admin", icon: Users, color: "text-green-400", username: "The_Gerault" },
  { name: "V I S H U", role: "Admin", icon: Users, color: "text-green-400", username: "JUSTVISU" },
]

const Team = () => {
  return (
    <section id="team" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Our Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
                  <div className={`text-4xl mb-4 ${member.color}`}>
                    <member.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-purple-300">
                    {member.name} <span className="text-sm">⌯ ❰𝗥𝚫𝗦𝗖𝚫𝗟❱</span>
                  </h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  <motion.a
                    href={`https://t.me/${member.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm hover:bg-purple-600/30 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Telegram
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

