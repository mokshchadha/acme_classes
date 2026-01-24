'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { EnquireModal } from '../EnquireModal'

export const NewsBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const newsItems = [
    { id: 1, text: "🚀 Crash Course starting from March 2026", clickable: false },
    { id: 2, text: "🔥 Jee Advance batch starts - click enquire for more", clickable: true },
  ]

  // Duplicate items for seamless loop
  const displayItems = [...newsItems, ...newsItems, ...newsItems]

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-800 to-blue-900 py-3 border-y border-white/10">
      <div className="flex items-center">
        {/* News Label */}
        <div className="absolute left-0 z-20 bg-orange-500 text-white px-4 py-3 font-bold text-sm uppercase tracking-wider shadow-xl flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          Latest News
          <div className="absolute right-[-12px] top-0 bottom-0 w-0 h-0 border-y-[24px] border-y-transparent border-l-[12px] border-l-orange-500"></div>
        </div>

        {/* Ticker Container */}
        <div className="flex overflow-hidden whitespace-nowrap ml-32">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-x-12"
          >
            {displayItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => item.clickable && setIsModalOpen(true)}
                className={`flex items-center gap-2 text-white font-medium text-sm md:text-base ${
                  item.clickable ? 'cursor-pointer hover:text-orange-300 transition-colors underline-offset-4 hover:underline decoration-orange-400' : ''
                }`}
              >
                <span>{item.text}</span>
                <span className="mx-4 text-blue-300">|</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
