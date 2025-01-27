"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const treeItems = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "Mission", path: "/about#mission" },
      { name: "Vision", path: "/about#vision" },
    ],
  },
  { name: "Team", path: "/team" },
  { name: "Rules", path: "/rules" },
  { name: "Contact", path: "/contact" },
]

const TreeItem = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: depth * 0.1 }}
    >
      <motion.div
        className="flex items-center cursor-pointer text-neon-blue hover:text-neon-green transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {item.children && (
          <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }} className="mr-2">
            ▶
          </motion.span>
        )}
        <Link href={item.path}>{item.name}</Link>
      </motion.div>
      {item.children && isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4"
        >
          {item.children.map((child, index) => (
            <TreeItem key={index} item={child} depth={depth + 1} />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

const TreeNavigation = () => {
  return (
    <nav className="w-64 h-screen bg-gray-900 p-4 overflow-auto">
      <motion.h2
        className="text-2xl font-bold mb-4 text-neon-green glitch-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Rascal Network
      </motion.h2>
      {treeItems.map((item, index) => (
        <TreeItem key={index} item={item} />
      ))}
    </nav>
  )
}

export default TreeNavigation

