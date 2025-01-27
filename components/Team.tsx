"use client"

import { motion } from "framer-motion"
import { Crown, Shield, Star, Zap, Users, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

const teamStructure = {
  Founder: [{ name: "M I K E Y", icon: Crown, color: "text-yellow-400", username: "Mikey_Rascals" }],
  "Co-Founders": [
    { name: "E R E N", icon: Shield, color: "text-purple-400", username: "Afk_x_eren" },
    { name: "J A C K", icon: Shield, color: "text-purple-400", username: "Jackiie_jack" },
    { name: "O R E K I", icon: Shield, color: "text-purple-400", username: "TOMO_XD" },
  ],
  Presidents: [
    { name: "H A R S H U", icon: Star, color: "text-pink-400", username: "Harshu_Raven" },
    { name: "Y H W A C H", icon: Star, color: "text-pink-400", username: "Yhwach_the_almightyy" },
    { name: "Nᴀᴍᴇʟᴇss", icon: Star, color: "text-pink-400", username: "Fucking_Rascal" },
  ],
  Developers: [{ name: "P R A N A V  A J A Y", icon: Users, color: "text-green-400", username: "mno_ai" }],
  Experts: [
    { name: "A Y A N", icon: Zap, color: "text-blue-400", username: "myself_ayan_143" },
    { name: "𝗥 𝚵 𝗫 𝗫", icon: Zap, color: "text-blue-400", username: "Dark_Dise" },
    { name: "R E N G O K U", icon: Zap, color: "text-blue-400", username: "Rengoku_rascal" },
    { name: "X", icon: Zap, color: "text-blue-400", username: "Neccan_n" },
    { name: "L O K I", icon: Zap, color: "text-blue-400", username: "xdloki" },
    { name: "D O P E", icon: Zap, color: "text-blue-400", username: "stancovicj" },
    { name: "S H E N A R C", icon: Zap, color: "text-blue-400", username: "Shenarc" },
  ],
  Admins: [
    { name: "A L E X", icon: Users, color: "text-green-400", username: "AloneBoy1209" },
    { name: "J O H A N", icon: Users, color: "text-green-400", username: "Johan_liebert_19" },
    { name: "N A R U T O", icon: Users, color: "text-green-400", username: "Naruto_style" },
    { name: "Mᴇᴀɴɪɴɢʟᴇss", icon: Users, color: "text-green-400", username: "The_Gerault" },
    { name: "V I S H U", icon: Users, color: "text-green-400", username: "JUSTVISU" },
  ],
}

const TeamMember = ({ member }) => (
  <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
    <div className="relative bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20">
      <div className={`text-2xl mb-2 ${member.color}`}>
        <member.icon className="w-6 h-6" />
      </div>
      <h4 className="text-lg font-bold mb-1 text-purple-300">
        {member.name} <span className="text-xs">⌯ ❰𝗥𝚫𝗦𝗖𝚫𝗟❱</span>
      </h4>
      <motion.a
        href={`https://t.me/${member.username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs hover:bg-purple-600/30 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Telegram
      </motion.a>
    </div>
  </motion.div>
)

const TeamGroup = ({ role, members }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-2xl font-bold mb-4 text-purple-300 hover:text-purple-400 transition-colors duration-300"
      >
        {isOpen ? <ChevronDown className="mr-2" /> : <ChevronRight className="mr-2" />}
        {role}
      </button>
      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {members.map((member, index) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      )}
    </motion.div>
  )
}

const Team = () => {
  return (
    <section id="team" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Our Team
        </motion.h2>

        {Object.entries(teamStructure).map(([role, members]) => (
          <TeamGroup key={role} role={role} members={members} />
        ))}
      </div>
    </section>
  )
}

export default Team

