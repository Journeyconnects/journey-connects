import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/xyzqwert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-walmart to-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-lg mt-2">Let's discuss how we can help your business</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-walmart mb-2">Email</h3>
                  <a href="mailto:contact@journeyconnects.com" className="text-gray-600 hover:text-walmart">
                    contact@journeyconnects.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-walmart mb-2">Website</h3>
                  <a href="https://journeyconnects.com" className="text-gray-600 hover:text-walmart">
                    journeyconnects.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-walmart mb-2">Quick Response</h3>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="font-bold text-walmart mb-4">Book a Meeting</h3>
                  <p className="text-gray-600 mb-4">Schedule a 30-minute consultation directly:</p>
                  <a href="https://outlook.office.com/bookwithme/user/638faf7d7c3644adaf9acfa7aedbe539@journeyconnects.com/meetingtype/u85uVO4i-kK8IYZZqTqvuA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile" 
                     className="btn-primary inline-block">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Send us a Message</h2>
              
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you! Your message has been sent successfully. We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-navy font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-walmart"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-walmart"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-walmart"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-walmart"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-walmart"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
