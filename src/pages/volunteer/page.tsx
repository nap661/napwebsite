import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: '',
    motivation: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formDataToSend = new FormData(form);
    
    try {
      await fetch('https://readdy.ai/api/form/volunteer-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formDataToSend as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', role: '', experience: '', availability: '', motivation: '' });
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const roles = [
    {
      icon: 'ri-presentation-fill',
      title: 'Peer Trainer',
      color: 'bg-blue-500',
      description: 'Lead naloxone training sessions in the community. Share your lived experience to help others learn life-saving skills.',
      commitment: '4-8 hours per month',
      requirements: ['Complete our trainer programme', 'Lived experience preferred', 'Good communication skills', 'Reliable and punctual']
    },
    {
      icon: 'ri-team-fill',
      title: 'Outreach Volunteer',
      color: 'bg-pink-500',
      description: 'Connect with people in the community, distribute naloxone kits, and raise awareness at events and public spaces.',
      commitment: '3-6 hours per month',
      requirements: ['Non-judgmental approach', 'Comfortable talking to strangers', 'Empathy and patience', 'Flexible availability']
    },
    {
      icon: 'ri-customer-service-2-fill',
      title: 'Peer Support Worker',
      color: 'bg-lime-500',
      description: 'Provide one-to-one support, signposting, and a listening ear to people affected by drug use.',
      commitment: '4-6 hours per month',
      requirements: ['Lived experience essential', 'Active listening skills', 'Boundaries awareness', 'Completed peer support training']
    },
    {
      icon: 'ri-calendar-event-fill',
      title: 'Events Coordinator',
      color: 'bg-yellow-400',
      description: 'Help organize community events, awareness campaigns, and fundraising activities.',
      commitment: '2-5 hours per month',
      requirements: ['Organizational skills', 'Creative thinking', 'Team player', 'Event planning experience helpful']
    },
    {
      icon: 'ri-article-fill',
      title: 'Content Creator',
      color: 'bg-purple-500',
      description: 'Create social media content, write blog posts, design posters, and help spread our message online.',
      commitment: '2-4 hours per month',
      requirements: ['Writing or design skills', 'Social media savvy', 'Understanding of harm reduction', 'Creative mindset']
    },
    {
      icon: 'ri-settings-3-fill',
      title: 'Admin Support',
      color: 'bg-teal-500',
      description: 'Help with behind-the-scenes tasks like data entry, scheduling, emails, and general administration.',
      commitment: '3-5 hours per month',
      requirements: ['Computer literacy', 'Attention to detail', 'Reliable', 'Can work independently']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-yellow-400 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="ri-heart-pulse-fill text-white text-2xl"></i>
              </div>
              <span className="font-bold text-xl text-gray-900">Naloxone Advocates</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Home</Link>
              <Link to="/about" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">About Us</Link>
              <Link to="/training" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Training &amp; P2P</Link>
              <Link to="/get-naloxone" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Get Naloxone</Link>
              <Link to="/volunteer" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Volunteer</Link>
              <Link to="/resources" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Resources</Link>
              <Link to="/contact" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Contact</Link>
            </div>

            <div className="hidden md:flex items-center">
              <Link to="/get-naloxone" className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg whitespace-nowrap">
                Get Naloxone Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 to-purple-600 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-6">
            Join Our Team
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Volunteer With Us
          </h1>
          <p className="text-xl text-white/90 font-semibold max-w-3xl mx-auto mb-8">
            Be part of a grassroots movement saving lives. Whether you have lived experience or just want to help, there's a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#signup" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl whitespace-nowrap">
              Sign Up Now <i className="ri-arrow-down-line ml-2"></i>
            </a>
            <Link to="/contact" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all whitespace-nowrap">
              Ask Questions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-lime-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-6">
              Make a Difference
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a supportive, peer-led community where your contribution directly saves lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-fill text-blue-500 text-3xl"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Save Lives</h3>
              <p className="text-white/90 text-sm">
                Your work directly prevents overdose deaths and supports people in crisis
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-group-fill text-pink-500 text-3xl"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Build Community</h3>
              <p className="text-white/90 text-sm">
                Connect with like-minded people who understand and support each other
              </p>
            </div>

            <div className="bg-gradient-to-br from-lime-500 to-lime-600 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-fill text-lime-500 text-3xl"></i>
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-3">Learn Skills</h3>
              <p className="text-gray-800 text-sm">
                Gain training, experience, and confidence in harm reduction and peer support
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-fill text-yellow-500 text-3xl"></i>
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-3">Make Impact</h3>
              <p className="text-gray-800 text-sm">
                Be part of real change in Plymouth and Devon's harm reduction landscape
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-bold mb-6">
              Find Your Role
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a role that fits your skills, interests, and availability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className={`${role.color} p-6 text-center`}>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${role.icon} ${role.color.replace('bg-', 'text-')} text-4xl`}></i>
                  </div>
                  <h3 className="text-white font-bold text-2xl">{role.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {role.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-time-fill text-pink-500"></i>
                      <span className="font-bold text-gray-900 text-sm">Time Commitment:</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-6">{role.commitment}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <i className="ri-checkbox-circle-fill text-lime-500"></i>
                      <span className="font-bold text-gray-900 text-sm">What You'll Need:</span>
                    </div>
                    <ul className="space-y-2 pl-6">
                      {role.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-bold mb-6">
              Support for Volunteers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Provide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-lime-400 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-book-open-fill text-yellow-500 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">Full Training</h3>
                  <p className="text-gray-800">
                    Comprehensive training in naloxone administration, harm reduction principles, safeguarding, and peer support techniques
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-fill text-pink-500 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Ongoing Support</h3>
                  <p className="text-white/90">
                    Regular supervision, peer support meetings, and access to experienced team members whenever you need guidance
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-file-text-fill text-blue-500 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">References &amp; Certificates</h3>
                  <p className="text-white/90">
                    Receive certificates for completed training and volunteer references for future opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-lime-500 to-green-500 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-money-pound-circle-fill text-lime-500 text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">Expenses Covered</h3>
                  <p className="text-gray-800">
                    Travel expenses reimbursed and refreshments provided at training sessions and events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-6">
              Real Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hear From Our Volunteers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Sarah</h4>
                  <p className="text-gray-600 text-sm">Peer Trainer</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "Volunteering here gave me purpose. I've been in recovery for 3 years and being able to share my experience to help others stay safe is incredibly rewarding."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Marcus</h4>
                  <p className="text-gray-600 text-sm">Outreach Volunteer</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "I lost my brother to an overdose. Now I hand out naloxone kits and talk to people about harm reduction. It's my way of making sure others don't lose someone they love."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl">
                  J
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Jess</h4>
                  <p className="text-gray-600 text-sm">Admin Support</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                "I don't have lived experience but wanted to help. The admin role lets me contribute behind the scenes. The team is so welcoming and the work is genuinely life-saving."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section id="signup" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-bold mb-6">
              Ready to Join?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Volunteer Sign-Up
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll be in touch within 48 hours
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-lime-400 rounded-3xl p-8 md:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-check-line text-lime-500 text-5xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Application Received!</h3>
                <p className="text-gray-800 text-lg mb-6">
                  Thank you for wanting to volunteer with us. We'll review your application and get back to you within 48 hours.
                </p>
                <p className="text-gray-700 font-semibold">
                  Check your email for confirmation
                </p>
              </div>
            ) : (
              <form
                id="volunteer-signup-form"
                data-readdy-form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-white bg-white rounded-xl focus:border-pink-500 focus:outline-none transition-colors text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-white bg-white rounded-xl focus:border-pink-500 focus:outline-none transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-white bg-white rounded-xl focus:border-pink-500 focus:outline-none transition-colors text-sm"
                    placeholder="07xxx xxxxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Which role interests you most? *</label>
                  <select
                    name="role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-white bg-white rounded-xl focus:border-pink-500 focus:outline-none transition-colors text-sm cursor-pointer"
                  >
                    <option value="">Select a role</option>
                    <option value="peer-trainer">Peer Trainer</option>
                    <option value="outreach">Outreach Volunteer</option>
                    <option value="peer-support">Peer Support Worker</option>
                    <option value="events">Events Coordinator</option>
                    <option value="content">Content Creator</option>
                    <option value="admin">Admin Support</option>
                    <option value="flexible">Flexible - Open to any role</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Do you have lived experience? *</label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-white bg-white rounded-xl focus:border-pink-500 focus:outline-none transition-colors text-sm cursor-pointer"
                  >
                    <option value="">Please select</option>
                    <option value="yes-personal">Yes - Personal experience with substance use</option>
                    <option value="yes-family">Yes - Family/friend affected</option>
                    <option value="no">No lived experience</option>
                    <option value="prefer-not">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Your Availability *</label>
                  <select
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={(e) => setFormData({...formData, availability: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-white bg-white rounded-xl focus:border-pink-500 focus:outline-none transition-colors text-sm cursor-pointer"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekday-mornings">Weekday Mornings</option>
                    <option value="weekday-afternoons">Weekday Afternoons</option>
                    <option value="weekday-evenings">Weekday Evenings</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible - Various times</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Why do you want to volunteer with us? *</label>
                  <textarea
                    name="motivation"
                    required
                    rows={5}
                    maxLength={500}
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-white bg-white rounded-xl focus:border-pink-500 focus:outline-none transition-colors text-sm resize-none"
                    placeholder="Tell us what motivates you to join our team..."
                  ></textarea>
                  <p className="text-xs text-gray-700 mt-2">Maximum 500 characters</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-all shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Submit Application <i className="ri-send-plane-fill ml-2"></i>
                </button>

                <p className="text-xs text-gray-700 text-center">
                  We'll contact you within 48 hours to discuss next steps
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-bold mb-6">
              Got Questions?
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Volunteer FAQs
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                <i className="ri-question-line text-pink-500 mr-2"></i>
                Do I need previous experience?
              </h3>
              <p className="text-gray-600 pl-8">
                No! We provide full training for all roles. Whether you have lived experience or are completely new to harm reduction, you're welcome here.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                <i className="ri-question-line text-pink-500 mr-2"></i>
                How much time do I need to commit?
              </h3>
              <p className="text-gray-600 pl-8">
                It varies by role, but most positions require 2-8 hours per month. We're flexible and work around your schedule.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                <i className="ri-question-line text-pink-500 mr-2"></i>
                Will I be working alone?
              </h3>
              <p className="text-gray-600 pl-8">
                Never! You'll always have support from experienced team members. We work in pairs for outreach and provide ongoing supervision for all volunteers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                <i className="ri-question-line text-pink-500 mr-2"></i>
                What if I'm in recovery?
              </h3>
              <p className="text-gray-600 pl-8">
                We welcome volunteers in recovery! We'll discuss your situation individually to ensure volunteering supports your wellbeing and recovery journey.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                <i className="ri-question-line text-pink-500 mr-2"></i>
                Can I volunteer if I'm under 18?
              </h3>
              <p className="text-gray-600 pl-8">
                Volunteers must be 18 or over for most roles due to safeguarding requirements. However, we have youth engagement opportunities - contact us to discuss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 font-semibold mb-10">
            Get in touch and we'll answer any questions you have about volunteering
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-block bg-yellow-400 text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-500 transition-all shadow-xl whitespace-nowrap">
              Contact Us <i className="ri-mail-line ml-2"></i>
            </Link>
            <a href="tel:01752000000" className="inline-block bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/30 transition-all whitespace-nowrap">
              Call: 01752 000 000
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-heart-pulse-fill text-white text-xl"></i>
                </div>
                <span className="font-bold text-lg">Naloxone Advocates</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A grassroots, peer-led harm reduction organisation dedicated to saving lives through naloxone training and community support.
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/training" className="text-gray-400 hover:text-white transition-colors">Training &amp; P2P</Link></li>
                <li><Link to="/volunteer" className="text-gray-400 hover:text-white transition-colors">Volunteer</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-pink-500 font-bold text-lg mb-4">Get Help</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="font-semibold text-white">Emergency: 999</p>
                <p>Phone: 01752 000 000</p>
                <p>Email: info@naloxoneadvocates.org</p>
              </div>
            </div>

            <div>
              <h3 className="text-lime-400 font-bold text-lg mb-4">Location</h3>
              <p className="text-gray-400 text-sm">
                123 Union Street<br />
                Plymouth, PL1 3AA<br />
                Devon, United Kingdom
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-500 text-sm">
              <p>&copy; 2025 Naloxone Advocates Plymouth CIC. All rights reserved.</p>
              <p className="mt-2">
                <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Powered by Readdy</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
