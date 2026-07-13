import { useState, useRef } from 'react'

export default function DashboardCarousel() {
  const scrollContainer = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const dashboards = [
    {
      id: 1,
      image: '/Dashboard-1.png',
      title: 'Campaign Performance',
      description: 'Track campaigns, metrics, and ROI in real-time'
    },
    {
      id: 2,
      image: '/Dashboard-2.png',
      title: 'Email Analytics',
      description: 'Monitor open rates, click rates, and engagement'
    },
    {
      id: 3,
      image: '/Dashboard-3.png',
      title: 'Customer Profiles',
      description: 'Unified customer data from all sources'
    },
    {
      id: 4,
      image: '/Dashboard-4.png',
      title: 'Journey Builder',
      description: 'Design and automate customer journeys'
    }
  ]

  const checkScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 400
      const newScrollLeft = scrollContainer.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollContainer.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-4 text-navy">See It In Action</h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Explore real Salesforce dashboards showing email campaigns, customer data, and marketing automation in action
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-walmart hover:bg-blue-900 text-white p-3 rounded-full shadow-lg transition hidden md:block"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-walmart hover:bg-blue-900 text-white p-3 rounded-full shadow-lg transition hidden md:block"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainer}
            onScroll={checkScroll}
            onLoad={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4 md:px-16 scroll-snap-type-x"
            style={{ scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
          >
            {dashboards.map((dashboard) => (
              <div
                key={dashboard.id}
                className="flex-shrink-0 w-full md:w-[450px] scroll-snap-align-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Dashboard Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-100 h-64 md:h-72">
                    <img
                      src={dashboard.image}
                      alt={dashboard.title}
                      className="w-full h-full object-cover hover:scale-110 transition duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">{dashboard.title}</h3>
                    <p className="text-gray-600 text-sm">{dashboard.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden text-center mt-6">
          <p className="text-sm text-gray-500">← Swipe to see more →</p>
        </div>
      </div>
    </section>
  )
}