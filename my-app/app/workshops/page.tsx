import Link from 'next/link'

export default function Workshops() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-forest-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-light tracking-wide text-forest-900 font-serif">
              GreenHeart Designs
            </Link>
            <Link 
              href="/" 
              className="text-stone-600 hover:text-forest-800 transition-all duration-300 font-light tracking-wide text-sm uppercase"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -left-32 w-96 h-96 bg-forest-600/60 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-forest-700/50 blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto px-8 py-28 text-center">
            <span className="text-sm font-light tracking-[0.5em] uppercase text-forest-200">Hands-On Creativity</span>
            <h1 className="text-5xl md:text-7xl font-thin mt-8 mb-6 font-serif">
              Plant Art Workshops
            </h1>
            <p className="text-lg md:text-xl text-forest-100 max-w-3xl mx-auto font-light leading-relaxed">
              Gather around the table for a guided lesson in designing stunning potted arrangements. Discover how texture, color, and structure come together as you plant with friends, family, or colleagues.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#signup"
                className="inline-flex justify-center bg-white text-forest-900 px-12 py-4 rounded-full text-sm font-light tracking-wide uppercase hover:bg-stone-50 transition-all duration-300"
              >
                Reserve Your Spot
              </a>
              <Link
                href="/#consultation"
                className="inline-flex justify-center border border-white/60 text-white px-12 py-4 rounded-full text-sm font-light tracking-wide uppercase hover:bg-white/10 transition-all duration-300"
              >
                Plan a Private Event
              </Link>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-thin font-serif text-forest-900">An Immersive Potting Experience</h2>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              Each workshop is a carefully crafted, two-hour journey guided by our lead designer. We provide premium vessels, seasonal plants, and artistic direction so every participant leaves with a living sculpture and newfound confidence.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: 'Guided Design Lesson',
                  copy: 'Learn how to layer plants for depth, balance colors, and create natural movement in your arrangement.'
                },
                {
                  title: 'All Materials Provided',
                  copy: 'From curated plant selections to designer pottery, we supply everything needed—no experience required.'
                },
                {
                  title: 'Memorable Group Moments',
                  copy: 'Perfect for team building, celebrations, or creative outings where guests connect through making.'
                }
              ].map(item => (
                <div key={item.title} className="bg-white rounded-3xl shadow-lg border border-stone-200/60 p-8">
                  <h3 className="text-xl font-light text-forest-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Workshop */}
        <section id="signup" className="py-20 px-8 bg-gradient-to-br from-forest-100 via-white to-stone-100">
          <div className="max-w-5xl mx-auto rounded-3xl border border-forest-200/60 bg-white/70 backdrop-blur-sm shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-[1.2fr_0.8fr]">
              <div className="p-12">
                <span className="text-sm uppercase tracking-[0.35em] text-forest-600 font-light">Upcoming Date</span>
                <h3 className="text-4xl font-thin text-forest-900 font-serif mt-6 mb-4">Planting With Poetry</h3>
                <p className="text-stone-600 font-light leading-relaxed mb-10">
                  A seasonal workshop focused on creating expressive tabletop planters. Explore botanical palettes, learn soil layering techniques, and finish with styling tips for showcasing your piece at home.
                </p>
                <ul className="space-y-4 text-stone-600 font-light">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-forest-500" />
                    <div>
                      <p className="text-forest-800 font-medium">Saturday, May 17 • 2:00 – 4:00 PM</p>
                      <p>GreenHeart Studio, Santa Monica</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-forest-500" />
                    <div>
                      <p className="text-forest-800 font-medium">Small-group setting</p>
                      <p>Limited to 12 guests for personalized guidance</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-forest-500" />
                    <div>
                      <p className="text-forest-800 font-medium">Take-home planter included</p>
                      <p>Plus care guide and styling suggestions</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-b from-forest-900 to-forest-700 text-white p-12 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-sm uppercase tracking-[0.35em] text-forest-200">Reserve Seats</span>
                  <p className="text-3xl font-thin font-serif">$165 per guest</p>
                  <p className="text-forest-100 font-light leading-relaxed">
                    Includes instruction, premium planter, plant selection, tools, and refreshments.
                  </p>
                </div>
                <div className="space-y-4 mt-10">
                  <a
                    href="mailto:workshops@greenheartdesigns.com?subject=Workshop Reservation"
                    className="block w-full text-center bg-white text-forest-900 py-4 rounded-full text-sm font-light tracking-wide uppercase hover:bg-stone-100 transition-all duration-300"
                  >
                    RSVP by Email
                  </a>
                  <a
                    href="tel:13107468343"
                    className="block w-full text-center border border-white/70 py-4 rounded-full text-sm font-light tracking-wide uppercase text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Call to Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Groups */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-thin font-serif text-forest-900">Designed for Gatherings</h2>
              <p className="text-lg text-stone-600 font-light leading-relaxed mt-4">
                Whether you&apos;re hosting a milestone celebration or planning a team retreat, our workshops bring people together through tactile creativity and lush botanicals.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Corporate Teams',
                  copy: 'Build connection and spark conversation with a collaborative, sensory experience.'
                },
                {
                  title: 'Celebrations',
                  copy: 'Mark birthdays, showers, or reunions with a meaningful keepsake guests will nurture at home.'
                },
                {
                  title: 'Creative Clubs',
                  copy: 'Perfect for plant lovers, art collectives, and groups seeking a new medium to explore together.'
                }
              ].map(item => (
                <div key={item.title} className="bg-white rounded-3xl border border-stone-200/60 shadow-lg p-8">
                  <h3 className="text-xl font-light text-forest-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 text-white px-8 py-16 shadow-2xl">
            <h2 className="text-4xl font-thin font-serif mb-4">Ready to Gather & Plant?</h2>
            <p className="text-lg text-forest-100 font-light leading-relaxed mb-10">
              Share your vision and we&apos;ll craft a workshop tailored to your group—from seasonal themes to custom plant palettes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#consultation"
                className="inline-flex justify-center bg-white text-forest-900 px-10 py-4 rounded-full text-sm font-light tracking-wide uppercase hover:bg-stone-50 transition-all duration-300"
              >
                Schedule a Planning Call
              </Link>
              <a
                href="mailto:workshops@greenheartdesigns.com"
                className="inline-flex justify-center border border-white/70 text-white px-10 py-4 rounded-full text-sm font-light tracking-wide uppercase hover:bg-white/10 transition-all duration-300"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
