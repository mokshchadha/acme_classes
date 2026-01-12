'use client'

import { useState, useEffect } from 'react'
import { Navbar, Hero, About, Results, FoundersMessage, Team, Testimonials, Contact, Footer } from './components/sections'
import { UsersIcon, AwardIcon, BookOpenIcon, StarIcon } from './components/icons'
import { AboutItem, Statistic, TeamMember, Testimonial, VisibilityState } from './components/types'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<VisibilityState>({})

  // Sample testimonial data with YouTube video IDs
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "NEET 2024",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "/testimonial.jpg"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      course: "JEE Main 2024",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Ankit Singh",
      course: "NDA 2023",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "/testimonial3.jpg"
    }
  ]

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
      <Hero />
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
    </>
  )
}