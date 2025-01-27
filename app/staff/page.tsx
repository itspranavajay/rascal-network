"use client"

import { motion } from "framer-motion"

const staffCategories = [
  {
    title: "FOUNDER",
    members: [{ name: "M I K E Y", username: "Mikey_Rascals" }],
  },
  {
    title: "CO-FOUNDERS",
    members: [
      { name: "E R E N", username: "Afk_x_eren" },
      { name: "J A C K", username: "Jackiie_jack" },
      { name: "O R E K I", username: "TOMO_XD" },
    ],
  },
  {
    title: "PRESIDENTS",
    members: [
      { name: "H A R S H U", username: "Harshu_Raven" },
      { name: "Y H W A C H", username: "Yhwach_the_almightyy" },
      { name: "Nᴀᴍᴇʟᴇss", username: "Fucking_Rascal" },
    ],
  },
  {
    title: "EXPERTS",
    members: [
      { name: "A Y A N", username: "myself_ayan_143" },
      { name: "𝗥 𝚵 𝗫 𝗫", username: "Dark_Dise" },
      { name: "R E N G O K U", username: "Rengoku_rascal" },
      { name: "X", username: "Neccan_n" },
      { name: "L O K I", username: "xdloki" },
      { name: "D O P E", username: "stancovicj" },
    ],
  },
  {
    title: "ADMINS",
    members: [
      { name: "A L E X", username: "AloneBoy1209" },
      { name: "J O H A N", username: "Johan_liebert_19" },
      { name: "N A R U T O", username: "Naruto_style" },
      { name: "Mᴇᴀɴɪɴɢʟᴇss", username: "The_Gerault" },
      { name: "V I S H U", username: "JUSTVISU" },
    ],
  },
]

export default function Staff() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-purple-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Rascal Network Staff
      </motion.h1>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {staffCategories.map((category, index) => (
          <StaffCategory key={index} {...category} />
        ))}
      </motion.div>
    </div>
  )
}

const StaffCategory = ({ title, members }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold mb-4 text-purple-400">{title}</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {members.map((member, index) => (
        <StaffMember key={index} {...member} />
      ))}
    </div>
  </div>
)

const StaffMember = ({ name, username }) => (
  <motion.div className="bg-gray-700 p-4 rounded-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <h3 className="font-semibold mb-2">{name}</h3>
    <a
      href={`https://t.me/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 hover:text-purple-300"
    >
      @{username}
    </a>
  </motion.div>
)

