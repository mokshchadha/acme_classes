'use client'

import { useState, useEffect, JSX } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

// SVG Icon Components
const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const PlayIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const UsersIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const AwardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const BookOpenIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const FacebookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const YoutubeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const LinkedinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const PhoneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const MapPinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const SendIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const ChevronLeftIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRightIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

// TypeScript interfaces
interface Testimonial {
  id: number;
  name: string;
  course: string;
  videoId: string;
  thumbnail: string;
}

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   course: string;
//   message: string;
// }

interface VisibilityState {
  [key: string]: boolean;
}

interface AboutItem {
  icon: JSX.Element;
  title: string;
  desc: string;
}

interface Statistic {
  number: number;
  label: string;
  icon: JSX.Element;
}

interface TeamMember {
  name: string;
  subject: string;
  experience: string;
  image: string;
}

export default function Home(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<VisibilityState>({})

  // Sample testimonial data with YouTube video IDs
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "NEET 2024",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
     thumbnail: "/testimonial.jpg"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      course: "JEE Main 2024",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Ankit Singh",
      course: "NDA 2023",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/testimonial3.jpg"
    }
  ]

  const nextTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data: { [key: string]: string } = Object.fromEntries(formData) as { [key: string]: string }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        alert('Message sent successfully!')
        ;(e.target as HTMLFormElement).reset()
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const aboutItems: AboutItem[] = [
    { 
      icon: <UsersIcon className="w-12 h-12" />, 
      title: "Expert Faculty", 
      desc: "Highly qualified and experienced teachers dedicated to your success" 
    },
    { 
      icon: <AwardIcon className="w-12 h-12" />, 
      title: "Proven Results", 
      desc: "Consistent track record of students clearing prestigious entrance exams" 
    },
    { 
      icon: <BookOpenIcon className="w-12 h-12" />, 
      title: "Comprehensive Study", 
      desc: "Complete study materials and regular assessments for thorough preparation" 
    }
  ]

  const statistics: Statistic[] = [
    { number: 150, label: "IIT Selections", icon: <AwardIcon className="w-8 h-8" /> },
    { number: 300, label: "IIIT/NIT Selections", icon: <StarIcon className="w-8 h-8" /> },
    { number: 500, label: "NEET Qualified", icon: <UsersIcon className="w-8 h-8" /> },
    { number: 200, label: "NDA/NTSE Success", icon: <BookOpenIcon className="w-8 h-8" /> }
  ]

  const teamMembers: TeamMember[] = [
    { 
      name: "Dr. Rajesh Kumar", 
      subject: "Physics", 
      experience: "15+ years", 
      image: "/teacher.jpg" 
    },
    { 
      name: "Prof. Meena Sharma", 
      subject: "Chemistry", 
      experience: "12+ years", 
      image: "/teacher.jpg" 
    },
    { 
      name: "Mr. Vikash Singh", 
      subject: "Mathematics", 
      experience: "10+ years", 
       image: "/teacher.jpg" 
    },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpenIcon className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-blue-600">Acme Coaching Classes</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</Link>
              <Link href="#team" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Team</Link>
              <Link href="#results" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Results</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="#team" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Team</Link>
                <Link href="#results" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Results</Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">Download Brochure</button>
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Acme Coaching Classes</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Acme Coaching Classes, we believe in transforming dreams into reality. With over a decade of excellence in competitive exam preparation, we have established ourselves as the premier coaching institute in Hamirpur, Himachal Pradesh. Our dedicated team of expert faculty members, innovative teaching methodologies, and personalized attention to each student has helped thousands achieve their goals in NEET, JEE, NDA, and Foundation courses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
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

      {/* Results Dashboard */}
      <section id="results" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.results ? { opacity: 1, y: 0 } : {}}
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
                animate={isVisible.results ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-orange-500 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2">
                  {isVisible.results && (
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

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.team ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced faculty members are the backbone of our success, bringing years of expertise and dedication to student achievement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((teacher, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.team ? { opacity: 1, y: 0 } : {}}
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

      {/* Testimonials */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your journey? Contact us today for enrollment details and course information.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible.contact ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl text-gray-800 font-semibold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-4 py-3 text-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block  text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="text-gray-600 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="text-gray-600 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course Interest</label>
                  <select 
                    name="course"
                    required
                    className="text-gray-600 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a course</option>
                    <option value="NEET">NEET</option>
                    <option value="JEE">JEE</option>
                    <option value="NDA">NDA</option>
                    <option value="Foundation IX">Foundation Class IX</option>
                    <option value="Foundation X">Foundation Class X</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="text-gray-600 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your goals and any questions you have..."
                  ></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full flex items-center justify-center space-x-2">
                  <SendIcon className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible.contact ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl text-gray-800 font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600/10 p-3 rounded-lg">
                      <PhoneIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone Numbers</h4>
                      <p className="text-gray-600">86288-92408 (Office)</p>
                      <p className="text-gray-600">98164-01407</p>
                      <p className="text-gray-600">99780-04629</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600/10 p-3 rounded-lg">
                      <MailIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">acme.sgc@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600/10 p-3 rounded-lg">
                      <MapPinIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">Shishe wali gali,<br />Hamirpur, H.P.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPinIcon className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpenIcon className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">Acme Coaching Classes</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering students to achieve their dreams through quality education and dedicated mentorship. Join us in your journey to success.
              </p>
              <div className="flex space-x-4">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300">
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-800 p-3 rounded-full transition-all duration-300">
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Our Courses</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-500 transition-colors">NEET Coaching</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">JEE Main & Advanced</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">NDA Preparation</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Foundation IX</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Foundation X</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#home" className="hover:text-orange-500 transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                <li><Link href="#team" className="hover:text-orange-500 transition-colors">Our Team</Link></li>
                <li><Link href="#results" className="hover:text-orange-500 transition-colors">Results</Link></li>
                <li><Link href="#contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                  <PhoneIcon className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">Call Us</span>
                </div>
                <p className="text-gray-300 text-sm">86288-92408 (Office)</p>
                <p className="text-gray-300 text-sm">98164-01407 • 99780-04629</p>
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                  <MailIcon className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">Email Us</span>
                </div>
                <p className="text-gray-300 text-sm">acme.sgc@gmail.com</p>
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                  <MapPinIcon className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">Visit Us</span>
                </div>
                <p className="text-gray-300 text-sm">Shishe wali gali, Hamirpur, H.P.</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Acme Coaching Classes. All rights reserved. | Designed with ❤️ for student success
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}