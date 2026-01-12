import Link from 'next/link'
import { MenuIcon, XIcon, BookOpenIcon } from '../icons'

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

export const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  return (
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
  )
}
