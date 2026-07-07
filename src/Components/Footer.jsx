import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Journey Connects</h3>
            <p className="text-gray-300 text-sm">Salesforce SFMC & Data Cloud Solutions</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white text-sm">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-white text-sm">Services</Link>
              <Link to="/about" className="text-gray-300 hover:text-white text-sm">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Email Automation</p>
              <p className="text-gray-300 text-sm">Journey Building</p>
              <p className="text-gray-300 text-sm">Data Integration</p>
              <p className="text-gray-300 text-sm">Consulting</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">📧 contact@journeyconnects.com</p>
            <p className="text-gray-300 text-sm">💬 Let's connect and discuss your Salesforce needs</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2024 Journey Connects. All rights reserved. | Connecting Data. Automating Email. Driving Results.
          </p>
        </div>
      </div>
    </footer>
  )
}
