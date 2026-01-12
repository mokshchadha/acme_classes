import Image from 'next/image'
import { motion } from 'framer-motion'
import { TeamMember } from '../types'

interface TeamProps {
  isVisible: boolean
  teamMembers: TeamMember[]
}

export const Team = ({ isVisible, teamMembers }: TeamProps) => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated faculty members bring years of experience and expertise to guide you towards success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((teacher, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-800 font-semibold text-center mb-2">{teacher.name}</h3>
              <p className="text-blue-600 text-center mb-2">{teacher.subject}</p>
              <p className="text-gray-600 text-center">{teacher.experience} Experience</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
