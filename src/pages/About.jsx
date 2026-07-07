export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-walmart to-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">About Journey Connects</h1>
          <p className="text-lg mt-2">Your trusted Salesforce consulting partner</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Journey Connects, we're committed to helping businesses unlock the full potential of their Salesforce investment. We combine deep technical expertise with strategic thinking to deliver solutions that drive real business results.
              </p>
              <p className="text-gray-600">
                Our tagline says it all: <span className="font-bold text-walmart">Connecting Data. Automating Email. Driving Results.</span>
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-bold text-walmart mb-1">Excellence</h3>
                  <p className="text-gray-600">We deliver high-quality solutions that exceed expectations</p>
                </li>
                <li>
                  <h3 className="font-bold text-walmart mb-1">Partnership</h3>
                  <p className="text-gray-600">We work closely with clients as true partners in their success</p>
                </li>
                <li>
                  <h3 className="font-bold text-walmart mb-1">Innovation</h3>
                  <p className="text-gray-600">We stay current with the latest Salesforce technologies and best practices</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-navy mb-8">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-walmart mb-4">Marketing Cloud Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Journey Builder & Automation Studio</li>
                  <li>• Email Studio & Template Development</li>
                  <li>• AMPscript & SSJS Development</li>
                  <li>• Deliverability & Compliance</li>
                  <li>• Content Builder Optimization</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-walmart mb-4">Data Cloud & Integration</h3>
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

          {/* Stats */}
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

      {/* CTA */}
      <section className="bg-walmart text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
          <a href="https://outlook.office.com/bookwithme/user/638faf7d7c3644adaf9acfa7aedbe539@journeyconnects.com/meetingtype/u85uVO4i-kK8IYZZqTqvuA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile" 
             className="inline-block bg-white text-walmart px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
