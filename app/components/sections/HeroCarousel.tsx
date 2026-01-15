'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { YoutubeIcon, LinkedinIcon, FacebookIcon, ChevronLeftIcon, ChevronRightIcon } from '../icons'
import { EnquireModal } from '../EnquireModal'

const slides = [
  {
    id: 1,
    type: 'JEE',
    year: '2025',
    title: 'JEE Advanced Champions',
    description: 'Our students dominated JEE Advanced 2025 with stellar All India Ranks.',
    students: [
      { name: 'Arnav', rank: 'AIR 903', image: '/2025/JEE/arnav_air_903.jpg' },
      { name: 'Dhyey', rank: 'AIR 1569', image: '/2025/JEE/dhyey_air_1569.jpeg' },
      { name: 'Dhyey', rank: 'AIR 5448', image: '/2025/JEE/dhyey_air_5448.png' },
    ],
    bgGradient: 'from-blue-900 via-indigo-900 to-slate-900'
  },
  {
    id: 2,
    type: 'NEET',
    year: '2025',
    title: 'NEET Result Superstars',
    description: 'Outstanding performance in NEET 2025. Shaping the doctors of tomorrow.',
    students: [
      { name: 'Kratavya', rank: '535 / 720', image: '/2025/NEET/kratavya_535.webp' },
      { name: 'Rushil', rank: '528 / 720', image: '/2025/NEET/rushil_528.jpeg' },
      { name: 'Simran', rank: '519 / 720', image: '/2025/NEET/simran_519.jpeg' },
    ],
    bgGradient: 'from-emerald-900 via-teal-900 to-slate-900'
  },
  {
    id: 3,
    type: 'DISCOUNT',
    year: '2026-27',
    title: 'Early Bird Admission',
    description: 'Secure your future today! Flat 25% discount on early admissions for the 2026-2027 session.',
    promo: 'SAVE25',
    bgGradient: 'from-orange-700 via-red-800 to-slate-900'
  }
]

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) return

    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [current, isModalOpen])

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] overflow-hidden bg-black pt-20 md:pt-0">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].bgGradient} flex items-center`}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-[100px] md:mt-2">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-white space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-semibold tracking-wider uppercase mb-4 border border-white/20">
                    {slides[current].type} {slides[current].year}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    {slides[current].title.split(' ').map((word, i) => (
                      <span key={i} className={i === slides[current].title.split(' ').length - 1 ? 'text-orange-400' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  <p className="text-xl text-gray-300 max-w-lg leading-relaxed mb-8">
                    {slides[current].description}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                  >
                    Enquire Now
                  </button>
                  <a 
                    href="https://drive.google.com/file/d/18ywLwQ_TZGLSsCgqJm6WHVXSV-RBJQcL/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold transition-all duration-300 inline-block"
                  >
                    Get Brochure
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex space-x-4 pt-4"
                >
                  <a href="https://youtube.com/@ACMECoachingClasses" target="_blank" rel="noopener" className="p-3 bg-white/10 rounded-full hover:bg-red-500 transition-colors">
                    <YoutubeIcon className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener" className="p-3 bg-white/10 rounded-full hover:bg-blue-500 transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener" className="p-3 bg-white/10 rounded-full hover:bg-blue-700 transition-colors">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              {/* Visual Content */}
              <div className="relative">
                {slides[current].students ? (
                  <div className={`grid ${current < 2 ? 'grid-cols-3' : 'grid-cols-2'} sm:grid-cols-3 gap-4`}>
                    {slides[current].students.map((student, idx) => (
                      <motion.div
                        key={student.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + (idx * 0.1) }}
                        className="relative group"
                      >
                        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl">
                          <Image
                            src={student.image}
                            alt={student.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <p className="font-semibold text-xs md:text-sm text-gray-300 mb-1 truncate">{student.name}</p>
                            <p className="text-orange-400 font-black text-lg md:text-3xl leading-none drop-shadow-lg">{student.rank}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-square flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full animate-pulse" />
                    <div className="relative z-10 text-center p-12 bg-white/10 backdrop-blur-xl rounded-[40px] border border-white/20 shadow-2xl">
                      <div className="text-8xl mb-4">🦅</div>
                      <h2 className="text-4xl font-black text-white mb-2">EARLY BIRD</h2>
                      <p className="text-6xl font-black text-orange-400 mb-6">25% OFF</p>
                      <div className="inline-block px-6 py-2 bg-white text-orange-600 rounded-full font-bold text-xl">
                        CODE: {slides[current].promo}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 right-12 flex space-x-4 z-20">
        <button 
          onClick={prevSlide}
          className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1)
              setCurrent(i)
            }}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-orange-500 w-20' : 'bg-white/30'}`}
          />
        ))}
      </div>

      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
