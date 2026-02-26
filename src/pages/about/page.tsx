import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-lime-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Naloxone Advocates Plymouth CIC
            </h1>
            <p className="text-2xl text-white font-semibold max-w-3xl mx-auto">
              A grassroots, peer-led organisation saving lives through harm reduction and community action
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-bold mb-6">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Born from Lived Experience
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Naloxone Advocates Plymouth CIC was founded by people with <strong className="text-blue-500">lived experience of drug use and addiction</strong>. We understand the challenges, the stigma, and the barriers that prevent people from accessing life-saving support.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our organisation emerged from a simple truth: <strong className="text-blue-500">people who use drugs deserve dignity, respect, and the chance to stay alive</strong>. We believe that harm reduction is healthcare, and that every life has value.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since our founding, we've trained hundreds of people, distributed thousands of naloxone kits, and helped save over 150 lives across Plymouth and Devon.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20community%20health%20advocates%20and%20peer%20support%20workers%20standing%20together%20outdoors%20in%20Plymouth%20Devon%20UK%2C%20warm%20supportive%20atmosphere%2C%20natural%20daylight%2C%20people%20of%20different%20ages%20and%20backgrounds%20united%20for%20harm%20reduction%20cause%2C%20documentary%20style%20photography%2C%20authentic%20and%20hopeful%20mood&width=800&height=600&seq=2&orientation=landscape" 
                  alt="Naloxone Advocates team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-yellow-400 font-semibold max-w-3xl mx-auto">
              Everything we do is guided by compassion, dignity, and the belief that harm reduction saves lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-fill text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Compassion First
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                We approach every person with empathy, understanding, and zero judgement. Everyone deserves support and respect.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-fill text-gray-900 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Peer-Led Approach
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Our team includes people with lived experience who understand the realities of drug use and can connect authentically.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-fill text-gray-900 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Evidence-Based
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                We use proven harm reduction strategies backed by research and best practices from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-lime-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-6">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services & Programs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-graduation-cap-fill text-white text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Naloxone Training</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Free training sessions teaching people how to recognise an overdose and administer naloxone safely. We've trained over 500 people across Plymouth and Devon.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-hand-heart-fill text-white text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Peer-to-Peer Project</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our P2P program connects people with lived experience to provide support, training, and outreach in a stigma-free environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-medicine-bottle-fill text-gray-900 text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Naloxone Distribution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We distribute free naloxone kits to trained individuals, ensuring life-saving medication is available where it's needed most.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-user-fill text-gray-900 text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Outreach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our outreach team connects with people on the streets, at events, and in community spaces to provide information and support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-book-open-fill text-white text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Education & Awareness</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We work to reduce stigma and increase understanding of harm reduction through workshops, campaigns, and community events.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-heart-fill text-white text-3xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Peer Support Network</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We facilitate connections between people with lived experience, creating a supportive community where everyone belongs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-yellow-400 font-semibold">
              Real lives saved, real communities strengthened
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
              <div className="text-5xl font-bold text-blue-500 mb-2">500+</div>
              <div className="text-lg text-gray-700 font-semibold">People Trained</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
              <div className="text-5xl font-bold text-pink-500 mb-2">1,200+</div>
              <div className="text-lg text-gray-700 font-semibold">Kits Distributed</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
              <div className="text-5xl font-bold text-yellow-500 mb-2">150+</div>
              <div className="text-lg text-gray-700 font-semibold">Lives Saved</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
              <div className="text-5xl font-bold text-lime-500 mb-2">50+</div>
              <div className="text-lg text-gray-700 font-semibold">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-6">
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the People Behind the Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team includes peer trainers, outreach workers, and volunteers—all united by a commitment to saving lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="ri-user-fill text-white text-5xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <div className="text-pink-500 font-semibold mb-4">Founder & Lead Trainer</div>
              <p className="text-gray-700 leading-relaxed">
                Sarah founded Naloxone Advocates after losing a close friend to overdose. Her lived experience drives the organisation's compassionate approach.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-lime-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="ri-user-fill text-gray-900 text-5xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Marcus Thompson</h3>
              <div className="text-blue-500 font-semibold mb-4">Outreach Coordinator</div>
              <p className="text-gray-700 leading-relaxed">
                Marcus leads our street outreach program, connecting with people who use drugs and ensuring they have access to naloxone and support.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="ri-user-fill text-white text-5xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Emma Davies</h3>
              <div className="text-lime-500 font-semibold mb-4">P2P Project Manager</div>
              <p className="text-gray-700 leading-relaxed">
                Emma manages our Peer-to-Peer project, training and supporting peer trainers who share their lived experience with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-lime-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white font-semibold mb-10">
            Whether you want training, to volunteer, or to support our work—we'd love to hear from you
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/training" className="bg-pink-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-pink-600 transition-all shadow-xl whitespace-nowrap">
              Get Training <i className="ri-arrow-right-line ml-2"></i>
            </Link>
            <Link to="/volunteer" className="bg-white text-blue-500 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-xl whitespace-nowrap">
              Volunteer <i className="ri-arrow-right-line ml-2"></i>
            </Link>
            <Link to="/contact" className="bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-600 transition-all shadow-xl whitespace-nowrap">
              Contact Us <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
