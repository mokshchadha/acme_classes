'use client'

import { useState, useEffect } from 'react'
import { Navbar, HeroCarousel, NewsBanner, About, Results, FoundersMessage, Team, Testimonials, Contact, Footer } from './components/sections'
import { UsersIcon, AwardIcon, BookOpenIcon, StarIcon } from './components/icons'
import { AboutItem, Statistic, TeamMember, Testimonial, VisibilityState } from './components/types'
import { AlertDialog } from './components/ui/AlertDialog'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<VisibilityState>({})
  
  const [alertConfig, setAlertConfig] = useState<{
    isOpen: boolean
    title: string
    message: string
    type: 'success' | 'error'
  }>({
    isOpen: false,
    title: '',
    message: '',
    type: 'success'
  })

  // Sample testimonial data with YouTube video IDs
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "JEE",
      course: "",
      image: "/gallery/JEE/jee_a1_batch.png"
    },
    {
      id: 2,
      name: "JEE",
      course: "",
      image: "/gallery/JEE/jee_a2_batch.png"
    },
    {
      id: 3,
      name: "NEET",
      course: "",
      image: "/gallery/NEET/a1_batch.png"
    },
    {
      id: 4,
      name: "NEET",
      course: "",
      image: "/gallery/NEET/a2_batch.png"
    }
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      
      if (result.success) {
        setAlertConfig({
          isOpen: true,
          title: 'Message Sent!',
          message: 'We have received your message and will get back to you shortly.',
          type: 'success'
        })
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error('Error:', error)
      setAlertConfig({
        isOpen: true,
        title: 'Error',
        message: 'Failed to send message. Please try again.',
        type: 'error'
      })
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
    { number: 350, label: "IIT/NIT Selections", icon: <AwardIcon className="w-8 h-8" /> },
    { number: 150, label: "NEET Selections", icon: <StarIcon className="w-8 h-8" /> },
    { number: 500, label: "NEET Qualified", icon: <UsersIcon className="w-8 h-8" /> },
    { number: 100, label: "NDA/NTSE Success", icon: <BookOpenIcon className="w-8 h-8" /> }
  ]

  const teamMembers: TeamMember[] = [
    { 
      name: "Suneel Thakur", 
      subject: "Physics Department (Director)", 
      experience: "20+ years", 
      image: "/suneel_dutt_20yrs_physics.png" 
    },
    { 
      name: "Abhishek Srivastava", 
      subject: "Mathematics (Joint Director)", 
      experience: "20+ years", 
      image: "/abhishek_shrivastav_20yrs_maths.png" 
    },
    { 
      name: "Ayush Dixit", 
      subject: "Biology (Joint Director)", 
      experience: "6+ years", 
      image: "/ayush_dixit_6yrs_biology.png" 
    },
  ]

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroCarousel />
      <NewsBanner />
      <About isVisible={isVisible.about || false} aboutItems={aboutItems} />
      <Results isVisible={isVisible.results || false} statistics={statistics} />
      <FoundersMessage isVisible={isVisible.team || false} />
      <Team isVisible={isVisible.team || false} teamMembers={teamMembers} />
      <Testimonials 
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
      />
      <Contact isVisible={isVisible.contact || false} handleSubmit={handleSubmit} />
      <Footer />

      <AlertDialog
        isOpen={alertConfig.isOpen}
        onClose={() => setAlertConfig(prev => ({ ...prev, isOpen: false }))}
        title={alertConfig.title}
        message={alertConfig.message}
        type={alertConfig.type}
      />
    </>
  )
}