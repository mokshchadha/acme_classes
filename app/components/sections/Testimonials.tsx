import Image from 'next/image'
import { motion } from 'framer-motion'
import { Testimonial } from '../types'
import { PlayIcon, ChevronLeftIcon, ChevronRightIcon } from '../icons'

interface TestimonialsProps {
  testimonials: Testimonial[]
  currentTestimonial: number
  setCurrentTestimonial: (value: number) => void
}

export const Testimonials = ({ testimonials, currentTestimonial, setCurrentTestimonial }: TestimonialsProps) => {
  const nextTestimonial = (): void => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)
  }

  const prevTestimonial = (): void => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Student Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our successful students about their journey with Acme Coaching Classes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-gray-500 rounded-xl p-8">
              <div className="aspect-video bg-black rounded-lg mb-6 relative cursor-pointer group">
                <Image
                  src={testimonials[currentTestimonial].thumbnail}
                  alt={`${testimonials[currentTestimonial].name} testimonial`}
                  fill
                  className="object-cover rounded-lg opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 transform group-hover:scale-110 transition-all duration-300">
                    <PlayIcon className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-sm opacity-90">{testimonials[currentTestimonial].course}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
