import { motion } from 'framer-motion'
import Image from 'next/image'

interface FoundersMessageProps {
  isVisible: boolean
}

export const FoundersMessage = ({ isVisible }: FoundersMessageProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Message from Our Founder</h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Founder Image and Info */}
              <div className="flex-shrink-0 text-center md:text-left">
                <Image 
                  src="/rajeev_chauhan_chemistry_22yrs.png" 
                  alt="Rajeev Chauhan" 
                  width={250} 
                  height={250} 
                  className="rounded-full shadow-xl border-4 border-white mx-auto md:mx-0"
                />
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rajeev Chauhan</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-1">Founder & Chemistry Faculty</p>
                  <p className="text-base text-gray-600">22+ Years of Experience</p>
                </div>
              </div>
              
              {/* Founder Message */}
              <div className="flex-1">
                <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-blue-600 pl-8 py-6 bg-white/70 rounded-r-xl shadow-lg">
                  &ldquo;ACME Coaching Classes does not focus solely on creating doctors and engineers; it is equally committed to shaping responsible, ethical, and compassionate human beings. Along with academic excellence, we emphasize values such as discipline, integrity, social responsibility, and respect for the nation. Our objective is to develop individuals who contribute positively to society, uphold moral character, and use their knowledge for the betterment of the country. At ACME, success is defined not only by professional achievement but by the quality of character and service to society and the nation.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
