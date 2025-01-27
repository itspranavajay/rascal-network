"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "rules", label: "Rules" },
  { id: "team", label: "Our Team" },
]

const SideNav = () => {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="bg-black/50 backdrop-blur-md p-4 rounded-r-xl border-r border-t border-b border-purple-500/20">
        <nav>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <motion.li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 group ${
                    activeSection === item.id ? "text-purple-400" : "text-gray-400"
                  }`}
                >
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeSection === item.id ? "translate-x-1" : "group-hover:translate-x-1"
                    }`}
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  )
}

export default SideNav

