export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-walmart to-blue-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-lg mt-2">Comprehensive Salesforce solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Email Automation */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-navy mb-4">Email Automation</h2>
              <p className="text-gray-600 mb-6">Scale your email marketing with Salesforce Marketing Cloud Engagement (SFMC).</p>
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

            {/* Data Cloud */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-navy mb-4">Data Cloud Solutions</h2>
              <p className="text-gray-600 mb-6">Unify and activate your customer data with Salesforce Data Cloud.</p>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Integration Services */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-navy mb-4">Integration Services</h2>
              <p className="text-gray-600 mb-6">Connect your entire marketing stack with seamless integrations.</p>
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

            {/* Consulting & Strategy */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-navy mb-4">Consulting & Strategy</h2>
              <p className="text-gray-600 mb-6">Strategic guidance to maximize your Salesforce investment.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Architecture and platform design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Performance optimization audits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Training and knowledge transfer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-walmart mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Business requirements and implementation roadmaps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-walmart text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <a href="https://outlook.office.com/bookwithme/user/638faf7d7c3644adaf9acfa7aedbe539@journeyconnects.com/meetingtype/u85uVO4i-kK8IYZZqTqvuA2?anonymous&ismsaljsauthenabled&ep=mCardFromTile" 
             className="inline-block bg-white text-walmart px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
