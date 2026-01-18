import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MenuIcon, XIcon } from '../icons'

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

export const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navbar styling:
  // Mobile: 
  // - Top: Fixed, Transparent (unless scrolled or menu open), Transition
  // - Icon: White (unless scrolled or menu open, then Dark that matched white bg)
  // Desktop: Sticky, White, Shadow (as before)
  
  const navClasses = `
    transition-all duration-300 w-full z-50 top-0
    md:sticky md:bg-white md:shadow-lg
    ${isMenuOpen ? 'fixed bg-white' : scrolled ? 'fixed bg-white shadow-lg' : 'fixed bg-transparent shadow-none'}
  `

  const iconColorClass = (isMenuOpen || scrolled) ? 'text-gray-700' : 'text-white'

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end md:justify-between items-center py-4 mr-6">
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
              <Image 
                src="/favicon.ico" 
                alt="Acme Logo" 
                width={56} 
                height={56} 
                className="w-full h-full object-contain"
              />
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
            {isMenuOpen ? <XIcon className={`w-6 h-6 ${iconColorClass}`} /> : <MenuIcon className={`w-6 h-6 ${iconColorClass}`} />}
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
  )
}
