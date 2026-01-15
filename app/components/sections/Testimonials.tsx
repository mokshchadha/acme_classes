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
    <section className="py-20 bg-[#004d40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Acme Achievers</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Celebrate our students' remarkable achievements and top ranks for JEE and NEET.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-[#003d33] rounded-xl overflow-hidden shadow-2xl border border-[#00695c]">
              <div className="aspect-[16/9] relative group">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={`${testimonials[currentTestimonial].name} success story`}
                  fill
                  className="object-contain"
                  priority
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-20 pb-8 px-8 text-white">
                  <h4 className="font-extrabold text-4xl text-center mb-2 tracking-wide text-yellow-400 drop-shadow-md">
                    {testimonials[currentTestimonial].name}
                  </h4>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md shadow-lg rounded-full p-4 transition-all z-10 border border-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="w-8 h-8 text-white" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md shadow-lg rounded-full p-4 transition-all z-10 border border-white/20"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-8 h-8 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-yellow-400 w-8' : 'bg-gray-500 w-3 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
