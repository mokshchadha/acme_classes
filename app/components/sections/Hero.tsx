import Image from 'next/image'
import { motion } from 'framer-motion'
import { YoutubeIcon, LinkedinIcon, FacebookIcon } from '../icons'

export const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Shape Your <span className="text-blue-600">Future</span> with
              <span className="text-orange-500 block">Acme Classes</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Excellence in NEET, JEE, NDA & Foundation courses. Join thousands of successful students who achieved their dreams with us.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@ACMECoachingClasses" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <YoutubeIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/acme-coaching-classes-190b04375" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">Enroll Now</button>
              <a 
                href="https://drive.google.com/file/d/18ywLwQ_TZGLSsCgqJm6WHVXSV-RBJQcL/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center"
              >
                Download Brochure
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="/test.jpg"
                alt="Students studying"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-500/20 rounded-2xl transform rotate-6 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
