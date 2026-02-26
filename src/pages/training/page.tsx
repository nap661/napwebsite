import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function TrainingPage() {
  const [selectedTraining, setSelectedTraining] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-pink-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Naloxone Training & P2P Project
            </h1>
            <p className="text-2xl text-yellow-400 font-semibold max-w-3xl mx-auto mb-8">
              Free, life-saving training delivered by people with lived experience
            </p>
            <Link to="/contact" className="inline-block bg-yellow-400 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-500 transition-all shadow-xl whitespace-nowrap">
              Book Your Training Now
            </Link>
          </div>
        </div>
      </section>

      {/* What is Naloxone */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-bold mb-6">
                What is Naloxone?
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Life-Saving Medication Everyone Should Know About
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-blue-500">Naloxone (also known as Narcan)</strong> is a medication that rapidly reverses opioid overdose. It works by blocking the effects of opioids on the brain and restoring breathing within 2-3 minutes.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Naloxone is <strong className="text-blue-500">safe, easy to use, and has no potential for abuse</strong>. It only works if opioids are present in the body, so there's no harm in administering it if you're unsure.
              </p>
              <div className="bg-yellow-400 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <i className="ri-information-fill text-gray-900 text-3xl flex-shrink-0"></i>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Important to Know</h3>
                    <p className="text-gray-800">
                      Naloxone is a temporary measure. Always call 999 first—professional medical help is essential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=naloxone%20nasal%20spray%20medication%20kit%20on%20clean%20white%20surface%20with%20simple%20medical%20supplies%2C%20bright%20clinical%20lighting%2C%20harm%20reduction%20healthcare%20product%2C%20clear%20detailed%20view%20of%20life-saving%20medication%2C%20professional%20medical%20photography%20style%2C%20educational%20and%20informative%20composition&width=800&height=600&seq=3&orientation=landscape" 
                  alt="Naloxone kit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-lime-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-900 font-semibold max-w-3xl mx-auto">
              Choose the training that's right for you—all sessions are free and include a naloxone kit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Community Training */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-fill text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Community Training
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-500">Free</span>
                <div className="text-gray-600">90 minutes</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Recognising overdose signs</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">How to administer naloxone</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Recovery position & aftercare</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Free naloxone kit provided</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Certificate of completion</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Open to everyone</span>
                </li>
              </ul>
              <button 
                onClick={() => setSelectedTraining('community')}
                className="block w-full bg-yellow-400 text-gray-900 px-6 py-4 rounded-full font-bold text-center hover:bg-yellow-500 transition-all whitespace-nowrap"
              >
                Book This Training
              </button>
            </div>

            {/* P2P Training - Featured */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl ring-4 ring-pink-500 transform md:scale-105">
              <div className="bg-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-hand-heart-fill text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Peer-to-Peer (P2P)
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-pink-500">Free</span>
                <div className="text-gray-600">2 hours</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">All community training content</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Lived-experience led sessions</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Stigma-free environment</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Peer support network access</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Ongoing community connection</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Outreach opportunities</span>
                </li>
              </ul>
              <button 
                onClick={() => setSelectedTraining('p2p')}
                className="block w-full bg-yellow-400 text-gray-900 px-6 py-4 rounded-full font-bold text-center hover:bg-yellow-500 transition-all whitespace-nowrap"
              >
                Book This Training
              </button>
            </div>

            {/* Organisational Training */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-fill text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Organisational
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-500">Free</span>
                <div className="text-gray-600">Flexible duration</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Tailored for workplaces</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Group sessions available</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Policy guidance included</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Kits for all participants</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-gray-700">On-site or virtual options</span>
                </li>
              </ul>
              <button 
                onClick={() => setSelectedTraining('organisational')}
                className="block w-full bg-yellow-400 text-gray-900 px-6 py-4 rounded-full font-bold text-center hover:bg-yellow-500 transition-all whitespace-nowrap"
              >
                Book This Training
              </button>
            </div>
          </div>

          {selectedTraining && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Training</h3>
                <p className="text-gray-700 mb-6">
                  Please contact us to book your {selectedTraining} training session. We'll find a time that works for you.
                </p>
                <div className="flex gap-4">
                  <Link 
                    to="/contact" 
                    className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-full font-bold text-center hover:bg-blue-600 transition-all whitespace-nowrap"
                  >
                    Contact Us
                  </Link>
                  <button 
                    onClick={() => setSelectedTraining(null)}
                    className="flex-1 bg-gray-200 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-300 transition-all whitespace-nowrap"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-bold mb-6">
              Training Content
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What You'll Learn
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-lime-400 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Skills</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-gray-900">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Recognising Overdose</h4>
                    <p className="text-gray-800">Learn the signs of opioid overdose and how to assess the situation quickly</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-gray-900">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Calling for Help</h4>
                    <p className="text-gray-800">When and how to call 999, and what information to provide</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-gray-900">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Administering Naloxone</h4>
                    <p className="text-gray-800">Step-by-step guidance on using naloxone nasal spray safely</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-gray-900">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Recovery Position</h4>
                    <p className="text-gray-800">How to position someone safely while waiting for emergency services</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-gray-900">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Aftercare</h4>
                    <p className="text-gray-800">What to do after naloxone is administered and how to support recovery</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-blue-500 rounded-3xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Additional Topics</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <i className="ri-checkbox-circle-fill text-yellow-400 text-2xl flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-1">Understanding Opioids</h4>
                    <p className="text-white/90">Types of opioids and how they affect the body</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <i className="ri-checkbox-circle-fill text-yellow-400 text-2xl flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-1">Harm Reduction Principles</h4>
                    <p className="text-white/90">Evidence-based approaches to reducing drug-related harm</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <i className="ri-checkbox-circle-fill text-yellow-400 text-2xl flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-1">Reducing Stigma</h4>
                    <p className="text-white/90">Language and attitudes that support people who use drugs</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <i className="ri-checkbox-circle-fill text-yellow-400 text-2xl flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-1">Legal Considerations</h4>
                    <p className="text-white/90">Your rights and protections when responding to overdose</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <i className="ri-checkbox-circle-fill text-yellow-400 text-2xl flex-shrink-0"></i>
                  <div>
                    <h4 className="font-bold mb-1">Support Resources</h4>
                    <p className="text-white/90">Where to find ongoing support and additional help</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* P2P Project Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=peer%20support%20group%20meeting%20with%20people%20sharing%20experiences%20in%20comfortable%20community%20space%2C%20warm%20welcoming%20atmosphere%2C%20diverse%20participants%20sitting%20in%20circle%2C%20supportive%20and%20non-judgmental%20environment%2C%20natural%20lighting%2C%20authentic%20documentary%20photography%2C%20harm%20reduction%20peer-led%20session&width=800&height=600&seq=4&orientation=landscape" 
                  alt="P2P training session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-bold mb-6">
                Our P2P Project
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Peer-to-Peer: Lived Experience Leading the Way
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our <strong className="text-blue-500">Peer-to-Peer (P2P) project</strong> is at the heart of what we do. It's built on the belief that people with lived experience of drug use are best placed to support others in their community.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                P2P training sessions are delivered by <strong className="text-blue-500">peer trainers who understand the challenges</strong> faced by people who use drugs. This creates a stigma-free, non-judgemental space where everyone feels welcome.
              </p>
              <div className="bg-yellow-400 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 text-xl mb-3">Why P2P Works</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-gray-900 text-xl flex-shrink-0"></i>
                    <span className="text-gray-800">Builds trust through shared experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-gray-900 text-xl flex-shrink-0"></i>
                    <span className="text-gray-800">Reduces stigma and shame</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-gray-900 text-xl flex-shrink-0"></i>
                    <span className="text-gray-800">Creates lasting community connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="ri-check-line text-gray-900 text-xl flex-shrink-0"></i>
                    <span className="text-gray-800">Empowers people to help themselves and others</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg whitespace-nowrap">
                Join Our P2P Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-lime-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-6">
              FAQs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need any medical experience?</h3>
              <p className="text-gray-700 leading-relaxed">
                No! Our training is designed for everyone, regardless of background. We'll teach you everything you need to know.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is the training really free?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, completely free. This includes the training session, your naloxone kit, and certificate of completion.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does naloxone last?</h3>
              <p className="text-gray-700 leading-relaxed">
                Naloxone kits typically last 2-3 years. We'll provide information on checking expiry dates and getting replacements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I get in trouble for using naloxone?</h3>
              <p className="text-gray-700 leading-relaxed">
                No. Good Samaritan laws protect people who respond to overdoses in good faith. We'll cover the legal aspects in training.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What if I use naloxone and it doesn't work?</h3>
              <p className="text-gray-700 leading-relaxed">
                You can give a second dose after 2-3 minutes if needed. Always call 999 first—naloxone is temporary and professional help is essential.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I become a peer trainer?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! If you have lived experience and want to help train others, we'd love to hear from you. Contact us to learn about our peer trainer program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-lime-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Learn How to Save a Life?
          </h2>
          <p className="text-xl text-white font-semibold mb-10">
            Book your free naloxone training today—it could make all the difference
          </p>
          <Link to="/contact" className="inline-block bg-pink-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-pink-600 transition-all shadow-xl whitespace-nowrap">
            Book Your Training Now <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
