"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const RascalOfficialTag = () => {
  const [copied, setCopied] = useState(false)

  const copyTag = () => {
    navigator.clipboard.writeText("❰𝗥𝚫𝗦𝗖𝚫𝗟❱")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-neon-blue glitch-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          |══ RASCAL OFFICIAL TAG ══|
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-lg mb-6">
            ʜᴏᴡ ᴛᴏ ʙᴇᴄᴏᴍᴇ ᴀ ᴘᴀʀᴛ ᴏғ ʀᴀsᴄᴀʟs ᴄʀɪᴍɪɴᴀʟs. Sᴏ ᴛʜᴇ ᴘᴜʀᴘᴏsᴇ ᴏғ ʀᴀsᴄᴀʟs ɪs ᴛᴏ ʙᴇᴄᴏᴍᴇ ᴘᴏᴡᴇʀғᴜʟ ᴀᴍᴏɴɢ ᴀʟʟ ᴏғ ᴜs
            sᴏ ᴡᴇ ɴᴇᴇᴅ ǫᴜᴀʟɪᴛʏ ɴᴏᴛ ǫᴜᴀɴᴛɪᴛʏ. Fɪʀsᴛ ᴏғ ᴀʟʟ sʜᴏᴡ ᴜs ᴡʜᴀᴛ ʏᴏᴜ ᴄᴀɴ ᴅᴏ ғᴏʀ ᴏᴜʀ ᴏʀɢᴀɴɪsᴀᴛɪᴏɴ ᴀɴᴅ ʜᴏᴡ ᴄᴀɴ ʏᴏᴜ
            ʙᴏᴏsᴛ ᴏᴜʀ ᴏʀɢᴀɴɪsᴀᴛɪᴏɴ.
          </p>
          <div className="text-center mb-6">
            <p className="text-neon-green mb-2">❭❭ Here is the official tag 🍃</p>
            <motion.div
              className="text-2xl font-bold cursor-pointer"
              onClick={copyTag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ━━━━━━━━━━
              <br />⌯ ❰𝗥𝚫𝗦𝗖𝚫𝗟❱
              <br />
              ━━━━━━━━━━
            </motion.div>
          </div>
          <ul className="list-disc list-inside">
            <li>Click the tag to copy it.</li>
            <li>Use the tag after your name to support us.</li>
            <li>Not compulsory for everyone.</li>
          </ul>
          {copied && (
            <motion.p
              className="text-neon-green mt-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              Tag copied to clipboard!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default RascalOfficialTag

