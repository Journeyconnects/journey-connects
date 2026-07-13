import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Journey Connects" className="h-10" />
            <span className="text-xl font-bold text-navy hidden sm:inline">Journey Connects</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-walmart transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-walmart transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-walmart transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-walmart transition">Contact</a>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Mobile Hamburger Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Desktop Book Appointment */}
            <a href="https://outlook.office.com/bookwithme/user/638faf7d7c3644adaf9acfa7aedbe539@journeyconnects.com/meetingtype/u85uVO4i-kK8IYZZqTqvuA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile" 
               className="hidden md:inline btn-primary">
              Book Appointment
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3 pb-4">
            <a 
              href="#home" 
              onClick={() => setMobileOpen(false)}
              className="block text-gray-700 hover:text-walmart py-2 font-medium"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileOpen(false)}
              className="block text-gray-700 hover:text-walmart py-2 font-medium"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileOpen(false)}
              className="block text-gray-700 hover:text-walmart py-2 font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileOpen(false)}
              className="block text-gray-700 hover:text-walmart py-2 font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
