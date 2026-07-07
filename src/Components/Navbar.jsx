import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Journey Connects" className="h-10" />
            <span className="text-xl font-bold text-navy">Journey Connects</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-walmart transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-walmart transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-walmart transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-walmart transition">Contact</a>
          </div>
          
          <a href="https://outlook.office.com/bookwithme/user/638faf7d7c3644adaf9acfa7aedbe539@journeyconnects.com/meetingtype/u85uVO4i-kK8IYZZqTqvuA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile" 
             className="btn-primary">
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  )
}
