import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { Statistic } from '../types'

interface ResultsProps {
  isVisible: boolean
  statistics: Statistic[]
}

export const Results = ({ isVisible, statistics }: ResultsProps) => {
  return (
    <section id="results" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Our Outstanding Results</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Numbers speak louder than words. Here is what we have achieved together with our dedicated students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-orange-500 mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-5xl font-bold mb-2">
                {isVisible && (
                  <CountUp start={0} end={stat.number} duration={2.5} />
                )}
                +
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
