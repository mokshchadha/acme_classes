import { motion } from 'framer-motion'
import { AboutItem } from '../types'

interface AboutProps {
  isVisible: boolean
  aboutItems: AboutItem[]
}

export const About = ({ isVisible, aboutItems }: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Trust & Excellence Since 2004
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500">
              About Acme Coaching Classes
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ACME Coaching Classes was established in 2004 by its founder Rajeev Chauhan, with a clear vision to provide high-quality, concept-driven education for competitive and board examinations. Since its inception, ACME has consistently delivered strong academic results and built a reputation for disciplined teaching and academic excellence.
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
            Over the years, ACME students have successfully secured selections in AIIMS, NEET, IITs, NITs, IISER, NISER, and BITS, reflecting the institute&apos;s focused preparation strategy and rigorous academic standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-blue-600/5 hover:to-orange-500/5 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl text-gray-800 font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
