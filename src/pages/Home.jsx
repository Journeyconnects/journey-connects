export default function Home() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section id="home" className="bg-gradient-to-r from-walmart to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Journey Connects</h1>
          <p className="text-2xl mb-4">Salesforce Marketing Cloud & Data Cloud Solutions</p>
          <p className="text-xl mb-8 text-gray-100">Connecting Data. Automating Email. Driving Results.</p>
          
          <div className="flex gap-4 justify-center">
            <a href="https://outlook.office.com/bookwithme/user/638faf7d7c3644adaf9acfa7aedbe539@journeyconnects.com/meetingtype/u85uVO4i-kK8IYZZqTqvuA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile" 
               className="bg-white text-walmart px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Book Free Consultation
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-walmart transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img src="/icons/email.png" alt="Email Automation" className="w-12 h-12 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-navy">Email Automation</h3>
              <p className="text-gray-600">Scale your email campaigns with Salesforce Marketing Cloud Engagement</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img src="/icons/journey.png" alt="Customer Journeys" className="w-12 h-12 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-navy">Customer Journeys</h3>
              <p className="text-gray-600">Build intelligent, personalized customer journeys with Journey Builder</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img src="/icons/data.png" alt="Data & Analytics" className="w-12 h-12 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-navy">Data & Analytics</h3>
              <p className="text-gray-600">Unify customer data with Salesforce Data Cloud for real-time insights</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img src="/icons/engagement.png" alt="Customer Engagement" className="w-12 h-12 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-navy">Customer Engagement</h3>
              <p className="text-gray-600">Drive engagement and loyalty through personalized marketing</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-walmart mb-4">Email Automation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Journey Builder automation and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Email Studio template development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Automation Studio workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Deliverability optimization</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-walmart mb-4">Data Cloud Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Identity resolution and data ingestion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Unified Individual Profiles (UIP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Calculated Insights and segmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Real-time activation strategies</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-walmart mb-4">Integration Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Marketing Cloud Connect (MCC) setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">MuleSoft API integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Sales Cloud and Service Cloud sync</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Custom REST/SOAP API implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">About Journey Connects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                At Journey Connects, we're committed to helping businesses unlock the full potential of their Salesforce investment. We combine deep technical expertise with strategic thinking to deliver solutions that drive real business results.
              </p>
              <p className="text-gray-600">
                Our tagline says it all: <span className="font-bold text-walmart">Connecting Data. Automating Email. Driving Results.</span>
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-navy mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-bold text-walmart mb-1">Excellence</h4>
                  <p className="text-gray-600">We deliver high-quality solutions that exceed expectations</p>
                </li>
                <li>
                  <h4 className="font-bold text-walmart mb-1">Partnership</h4>
                  <p className="text-gray-600">We work closely with clients as true partners in their success</p>
                </li>
                <li>
                  <h4 className="font-bold text-walmart mb-1">Innovation</h4>
                  <p className="text-gray-600">We stay current with the latest Salesforce technologies and best practices</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-3xl font-bold text-navy mb-8">Our Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-walmart mb-4">Marketing Cloud Expertise</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Journey Builder & Automation Studio</li>
                  <li>• Email Studio & Template Development</li>
                  <li>• AMPscript & SSJS Development</li>
                  <li>• Deliverability & Compliance</li>
                  <li>• Content Builder Optimization</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-walmart mb-4">Data Cloud & Integration</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Data Cloud Architecture</li>
                  <li>• Identity Resolution</li>
                  <li>• MuleSoft Integrations</li>
                  <li>• Marketing Cloud Connect</li>
                  <li>• REST/SOAP APIs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-walmart text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-sm">Years of Experience</div>
            </div>
            <div className="bg-walmart text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm">Successful Projects</div>
            </div>
            <div className="bg-walmart text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-sm">Salesforce Certifications</div>
            </div>
            <div className="bg-walmart text-white p-6 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-navy mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-walmart mb-2">Email</h4>
                  <a href="mailto:contact@journeyconnects.com" className="text-gray-600 hover:text-walmart">
                    contact@journeyconnects.com
                  </a>
                </div>

                <div>
                  <h4 className="font-bold text-walmart mb-2">Website</h4>
                  <a href="https://journeyconnects.com" className="text-gray-600 hover:text-walmart">
                    journeyconnects.com
                  </a>
                </div>

                <div>
                  <h4 className="font-bold text-walmart mb-2">Quick Response</h4>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>

                <div className="bg-white p-6 rounded-lg mt-8">
                  <h4 className="font-bold text-walmart mb-4">Book a Meeting</h4>
                  <p className="text-gray-600 mb-4">Schedule a 30-minute consultation directly:</p>
                  <a href="https://outlook.office.com/bookwithme/user/638faf7d7c3644adaf9acfa7aedbe539@journeyconnects.com/meetingtype/u85uVO4i-kK8IYZZqTqvuA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile" 
                     className="inline-block bg-walmart text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 transition">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-navy mb-8">Send us a Message</h3>
              
              <form action="https://formspree.io/f/meebdryq" method="POST" className="space-y-4">
                <div>
                  <label className="block text-navy font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-walmart"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-walmart"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-walmart"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-walmart"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-walmart"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-walmart hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-walmart text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
          <p className="text-xl mb-8">Let's discuss how Salesforce SFMC and Data Cloud can drive your business forward.</p>
          
          <a href="https://outlook.office.com/bookwithme/user/638faf7d7c3644adaf9acfa7aedbe539@journeyconnects.com/meetingtype/u85uVO4i-kK8IYZZqTqvuA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile" 
             className="inline-block bg-white text-walmart px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  )
}