import Link from 'next/link'
import { BookOpenIcon, YoutubeIcon, LinkedinIcon, FacebookIcon, PhoneIcon, MailIcon, MapPinIcon } from '../icons'

export const Footer = () => {
  return (
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
  )
}
