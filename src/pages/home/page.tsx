import { Link } from 'react-router-dom';
import { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  price: string;
}

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const upcomingTrainingSessions = [
  { id: '1', name: 'Community Training', date: '15 Feb 2025', time: '10:00 AM', location: 'Plymouth Community Centre', price: 'Free' },
  { id: '2', name: 'Peer-to-Peer (P2P)', date: '22 Feb 2025', time: '2:00 PM', location: 'Devonport Guildhall', price: 'Free' },
  { id: '3', name: 'Organisational Training', date: '1 Mar 2025', time: '9:00 AM', location: 'Your Workplace', price: 'Free' },
  { id: '4', name: 'Community Training', date: '8 Mar 2025', time: '11:00 AM', location: 'Stonehouse Community Hub', price: 'Free' },
  { id: '5', name: 'Evening P2P Session', date: '15 Mar 2025', time: '6:00 PM', location: 'Plymouth Central Library', price: 'Free' },
];

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Plymouth Council Partners with Naloxone Advocates for City-Wide Training',
    excerpt: 'A new partnership will see naloxone training offered at all community centres across Plymouth, making life-saving skills more accessible than ever.',
    date: '28 Jan 2025',
    category: 'Partnership',
    image: 'https://readdy.ai/api/search-image?query=community%20partnership%20meeting%20in%20modern%20council%20building%2C%20diverse%20group%20of%20professionals%20and%20community%20workers%20shaking%20hands%2C%20bright%20natural%20lighting%2C%20official%20setting%20with%20warm%20atmosphere%2C%20documentary%20photography%20style&width=600&height=400&seq=news1&orientation=landscape'
  },
  {
    id: '2',
    title: '150 Lives Saved: Celebrating Our Community Impact',
    excerpt: 'We are proud to announce that naloxone distributed through our program has now been used to reverse over 150 overdoses in Plymouth and Devon.',
    date: '20 Jan 2025',
    category: 'Milestone',
    image: 'https://readdy.ai/api/search-image?query=celebration%20event%20with%20community%20health%20workers%2C%20people%20holding%20certificates%20and%20smiling%2C%20colorful%20balloons%20and%20banners%2C%20warm%20supportive%20atmosphere%2C%20bright%20indoor%20lighting%2C%20documentary%20photography&width=600&height=400&seq=news2&orientation=landscape'
  },
  {
    id: '3',
    title: 'New Peer Trainer Programme Launches This Spring',
    excerpt: 'Applications are now open for our expanded Peer Trainer programme. Share your lived experience and help save lives in your community.',
    date: '15 Jan 2025',
    category: 'Programme',
    image: 'https://readdy.ai/api/search-image?query=training%20workshop%20with%20diverse%20participants%20learning%20together%2C%20instructor%20demonstrating%20to%20engaged%20audience%2C%20bright%20modern%20classroom%20setting%2C%20supportive%20educational%20environment%2C%20natural%20lighting&width=600&height=400&seq=news3&orientation=landscape'
  },
  {
    id: '4',
    title: 'Harm Reduction Week: Events Across Devon',
    excerpt: 'Join us for a week of awareness events, training sessions, and community gatherings as we mark International Harm Reduction Day.',
    date: '8 Jan 2025',
    category: 'Events',
    image: 'https://readdy.ai/api/search-image?query=outdoor%20community%20awareness%20event%20with%20information%20stalls%20and%20banners%2C%20people%20gathering%20and%20talking%2C%20colorful%20promotional%20materials%2C%20sunny%20day%20in%20UK%20town%20square%2C%20documentary%20photography%20style&width=600&height=400&seq=news4&orientation=landscape'
  }
];

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<CartItem | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter submission will be handled later
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const addToCart = (session: typeof upcomingTrainingSessions[0]) => {
    if (!cart.find(item => item.id === session.id)) {
      setCart([...cart, session]);
      setCartOpen(true);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const openBookingModal = (session: CartItem) => {
    setSelectedSession(session);
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch('https://readdy.ai/api/form/d5vnpq9dkj8fk0538e5g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setBookingSubmitted(true);
      if (selectedSession) {
        removeFromCart(selectedSession.id);
      }
      setTimeout(() => {
        setBookingModalOpen(false);
        setBookingSubmitted(false);
        setBookingForm({ name: '', email: '', phone: '', message: '' });
        setSelectedSession(null);
      }, 3000);
    } catch (error) {
      console.error('Booking submission error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-yellow-400 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="ri-heart-pulse-fill text-white text-2xl"></i>
              </div>
              <span className="font-bold text-xl text-gray-900">Naloxone Advocates</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Home</Link>
              <Link to="/about" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">About Us</Link>
              <Link to="/training" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Training & P2P</Link>
              <Link to="/get-naloxone" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Get Naloxone</Link>
              <Link to="/volunteer" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Volunteer</Link>
              <Link to="/resources" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Resources</Link>
              <Link to="/contact" className="text-gray-900 font-semibold hover:text-pink-500 transition-colors whitespace-nowrap">Contact</Link>
            </div>

            {/* Cart & CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setCartOpen(!cartOpen)}
                className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg cursor-pointer"
              >
                <i className="ri-shopping-cart-2-fill text-blue-500 text-xl"></i>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <Link to="/get-naloxone" className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg whitespace-nowrap">
                Get Naloxone Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button 
                onClick={() => setCartOpen(!cartOpen)}
                className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
              >
                <i className="ri-shopping-cart-2-fill text-blue-500 text-lg"></i>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 text-2xl cursor-pointer"
              >
                <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 space-y-4">
              <Link to="/" className="block text-gray-900 font-semibold hover:text-pink-500 transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-900 font-semibold hover:text-pink-500 transition-colors">About Us</Link>
              <Link to="/training" className="block text-gray-900 font-semibold hover:text-pink-500 transition-colors">Training & P2P</Link>
              <Link to="/get-naloxone" className="block text-gray-900 font-semibold hover:text-pink-500 transition-colors">Get Naloxone</Link>
              <Link to="/volunteer" className="block text-gray-900 font-semibold hover:text-pink-500 transition-colors">Volunteer</Link>
              <Link to="/resources" className="block text-gray-900 font-semibold hover:text-pink-500 transition-colors">Resources</Link>
              <Link to="/contact" className="block text-gray-900 font-semibold hover:text-pink-500 transition-colors">Contact</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Shopping Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setCartOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Bookings</h2>
                <button onClick={() => setCartOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                  <i className="ri-close-line text-2xl text-gray-600"></i>
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-calendar-line text-gray-400 text-4xl"></i>
                  </div>
                  <p className="text-gray-500 mb-4">No training sessions booked yet</p>
                  <button 
                    onClick={() => setCartOpen(false)}
                    className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Browse Sessions
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-gray-50 rounded-2xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-gray-900">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 cursor-pointer"
                          >
                            <i className="ri-delete-bin-line text-lg"></i>
                          </button>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><i className="ri-calendar-line mr-2"></i>{item.date}</p>
                          <p><i className="ri-time-line mr-2"></i>{item.time}</p>
                          <p><i className="ri-map-pin-line mr-2"></i>{item.location}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="bg-lime-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">{item.price}</span>
                          <button 
                            onClick={() => openBookingModal(item)}
                            className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-pink-600 transition-all whitespace-nowrap cursor-pointer"
                          >
                            Complete Booking
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Total Sessions:</span>
                      <span className="font-bold text-gray-900">{cart.length}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      <i className="ri-information-line mr-1"></i>
                      All training sessions are completely free
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {bookingModalOpen && selectedSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setBookingModalOpen(false)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {bookingSubmitted ? (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-check-line text-gray-900 text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600">We'll send you a confirmation email shortly.</p>
              </div>
            ) : (
              <>
                <div className="bg-gradient-to-br from-yellow-400 to-lime-400 p-6 rounded-t-3xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Session</h3>
                      <p className="text-white font-semibold">{selectedSession.name}</p>
                    </div>
                    <button 
                      onClick={() => setBookingModalOpen(false)}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer"
                    >
                      <i className="ri-close-line text-xl text-gray-900"></i>
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="bg-blue-50 rounded-2xl p-4 mb-6">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Date:</span>
                        <p className="font-semibold text-gray-900">{selectedSession.date}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Time:</span>
                        <p className="font-semibold text-gray-900">{selectedSession.time}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500">Location:</span>
                        <p className="font-semibold text-gray-900">{selectedSession.location}</p>
                      </div>
                    </div>
                  </div>

                  <form 
                    id="booking-form"
                    data-readdy-form
                    onSubmit={handleBookingSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="session_name" value={selectedSession.name} />
                    <input type="hidden" name="session_date" value={selectedSession.date} />
                    <input type="hidden" name="session_time" value={selectedSession.time} />
                    <input type="hidden" name="session_location" value={selectedSession.location} />

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm"
                        placeholder="07xxx xxxxxx"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                      <textarea
                        name="message"
                        rows={3}
                        maxLength={500}
                        value={bookingForm.message}
                        onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm resize-none"
                        placeholder="Any accessibility needs or questions?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-pink-500 text-white py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-all whitespace-nowrap cursor-pointer"
                    >
                      Confirm Booking <i className="ri-check-line ml-2"></i>
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left Content */}
            <div className="md:col-span-3 bg-gradient-to-br from-yellow-400 to-lime-400 rounded-3xl p-12 shadow-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Saving Lives<br />Through<br />Community Action
              </h1>
              <p className="text-xl text-white mb-8 font-semibold">
                Free naloxone training and kits for Plymouth and Devon communities
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/training" className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-all shadow-lg flex items-center justify-center whitespace-nowrap">
                  Book Free Training <i className="ri-arrow-right-line ml-2"></i>
                </Link>
                <Link to="/get-naloxone" className="bg-white text-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center whitespace-nowrap">
                  Request Naloxone Kit <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="md:col-span-2">
              <div className="bg-blue-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
                <div className="relative">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src="https://readdy.ai/api/search-image?query=diverse%20community%20group%20of%20people%20at%20harm%20reduction%20naloxone%20training%20workshop%2C%20supportive%20atmosphere%2C%20bright%20natural%20lighting%2C%20people%20learning%20together%20in%20circle%2C%20medical%20training%20setting%2C%20inclusive%20and%20welcoming%20environment%2C%20documentary%20photography%20style&width=400&height=400&seq=1&orientation=squarish" 
                      alt="Community training session"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-center gap-4 mt-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-medicine-bottle-fill text-gray-900 text-2xl"></i>
                    </div>
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-team-fill text-white text-2xl"></i>
                    </div>
                    <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-heart-pulse-fill text-gray-900 text-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-blue-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="border-b md:border-b-0 md:border-r border-white/30 pb-8 md:pb-0">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-xl text-yellow-400 font-semibold">People Trained</div>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-white/30 pb-8 md:pb-0">
              <div className="text-5xl font-bold text-white mb-2">1,200+</div>
              <div className="text-xl text-yellow-400 font-semibold">Naloxone Kits Distributed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-xl text-yellow-400 font-semibold">Lives Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Training Sessions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-bold mb-6">
              Book Now
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Training Sessions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose a session that works for you and add it to your booking cart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingTrainingSessions.map((session) => (
              <div 
                key={session.id} 
                className="bg-gray-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-yellow-400"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {session.name}
                  </span>
                  <span className="bg-lime-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {session.price}
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className="ri-calendar-fill text-pink-500 text-xl"></i>
                    </div>
                    <span className="ml-2 font-semibold">{session.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className="ri-time-fill text-pink-500 text-xl"></i>
                    </div>
                    <span className="ml-2">{session.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className="ri-map-pin-fill text-pink-500 text-xl"></i>
                    </div>
                    <span className="ml-2 text-sm">{session.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(session)}
                  disabled={cart.some(item => item.id === session.id)}
                  className={`w-full py-3 rounded-full font-bold transition-all whitespace-nowrap cursor-pointer ${
                    cart.some(item => item.id === session.id)
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                  }`}
                >
                  {cart.some(item => item.id === session.id) ? (
                    <><i className="ri-check-line mr-2"></i>Added to Cart</>
                  ) : (
                    <><i className="ri-shopping-cart-2-line mr-2"></i>Add to Cart</>
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/training" className="inline-block bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-lg whitespace-nowrap">
              View All Training Options <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-bold mb-6">
            Who We Are
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                A Grassroots Movement for Harm Reduction
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Naloxone Advocates Plymouth CIC is a <strong className="text-blue-500">community-led organisation</strong> dedicated to reducing drug-related deaths through education, training, and direct action.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are a <strong className="text-blue-500">peer-led, lived-experience team</strong> who understand the challenges faced by people who use drugs. Our approach is rooted in compassion, dignity, and the belief that every life matters.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Through our <strong className="text-blue-500">Peer-to-Peer (P2P) project</strong>, we provide free naloxone training and kits across Plymouth and Devon, creating a safer community for everyone.
              </p>
              <Link to="/about" className="inline-block bg-lime-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-500 transition-all shadow-lg whitespace-nowrap">
                Read Our Story
              </Link>
            </div>
            <div className="relative">
              <div className="bg-yellow-400 rounded-3xl p-8 transform rotate-3 absolute inset-0"></div>
              <div className="bg-white border-4 border-pink-500 rounded-3xl p-8 relative shadow-xl">
                <blockquote className="text-2xl text-gray-800 italic leading-relaxed mb-6">
                  "This organisation saved my life. The training was non-judgemental, practical, and gave me the confidence to help others in my community."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JM</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">Community Member</div>
                    <div className="text-sm text-gray-600">Plymouth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 bg-lime-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Free Naloxone Training Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-fill text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Community Training
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Learn to recognise overdose signs</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">How to administer naloxone safely</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Free naloxone kit provided</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Certificate of completion</span>
                </li>
              </ul>
              <Link to="/training" className="block w-full bg-yellow-400 text-gray-900 px-6 py-4 rounded-full font-bold text-center hover:bg-yellow-500 transition-all whitespace-nowrap">
                Learn More
              </Link>
            </div>

            {/* Card 2 - Featured */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl ring-4 ring-pink-500 transform md:scale-105">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-hand-heart-fill text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Peer-to-Peer (P2P)
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Lived-experience led training</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Stigma-free, supportive environment</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Ongoing peer support network</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Community outreach opportunities</span>
                </li>
              </ul>
              <Link to="/training" className="block w-full bg-yellow-400 text-gray-900 px-6 py-4 rounded-full font-bold text-center hover:bg-yellow-500 transition-all whitespace-nowrap">
                Learn More
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-fill text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Organisational Training
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Tailored for workplaces & services</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Group sessions available</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Policy guidance included</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-pink-500 text-xl mr-3 mt-1"></i>
                  <span className="text-gray-700">Flexible scheduling options</span>
                </li>
              </ul>
              <Link to="/training" className="block w-full bg-yellow-400 text-gray-900 px-6 py-4 rounded-full font-bold text-center hover:bg-yellow-500 transition-all whitespace-nowrap">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get Naloxone Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            How to Get Naloxone
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="bg-blue-500 rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                <span className="text-blue-500 font-bold text-4xl">1</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Book Free Training</h3>
              <p className="text-white text-lg mb-6 leading-relaxed">
                Attend one of our free naloxone training sessions. Learn how to recognise an overdose and administer naloxone safely and confidently.
              </p>
              <Link to="/training" className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all whitespace-nowrap">
                Book Training
              </Link>
            </div>

            <div className="hidden md:flex justify-center">
              <i className="ri-arrow-right-line text-gray-400 text-6xl"></i>
            </div>

            <div className="md:hidden flex justify-center py-4">
              <i className="ri-arrow-down-line text-gray-400 text-6xl"></i>
            </div>

            <div className="bg-pink-500 rounded-3xl p-10 shadow-xl">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                <span className="text-pink-500 font-bold text-4xl">2</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Get Your Kit</h3>
              <p className="text-white text-lg mb-6 leading-relaxed">
                Receive your free naloxone kit at the end of training. You'll have everything you need to respond to an overdose emergency.
              </p>
              <Link to="/get-naloxone" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all whitespace-nowrap">
                Get Your Kit
              </Link>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="bg-yellow-400 rounded-3xl p-8 shadow-xl text-center">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-alarm-warning-fill text-red-600 text-5xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">In an Emergency</h3>
            <p className="text-lg text-gray-800 font-semibold">
              Always call 999 first. Naloxone is a temporary measure - professional medical help is essential.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Join Our Community
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <i className="ri-user-voice-fill text-gray-900 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Peer Trainer</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Share your lived experience and help train others in your community. Full training and ongoing support provided.
              </p>
              <Link to="/volunteer" className="text-blue-500 font-bold hover:text-blue-600 transition-colors inline-flex items-center whitespace-nowrap">
                Learn More <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-4">
                <i className="ri-map-pin-user-fill text-gray-900 text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Outreach Volunteer</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Help us reach people in the community who need naloxone. Distribute kits and information at events and on the streets.
              </p>
              <Link to="/volunteer" className="text-blue-500 font-bold hover:text-blue-600 transition-colors inline-flex items-center whitespace-nowrap">
                Learn More <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-calendar-event-fill text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Event Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Help at community events, awareness campaigns, and fundraising activities. Flexible commitment options available.
              </p>
              <Link to="/volunteer" className="text-blue-500 font-bold hover:text-blue-600 transition-colors inline-flex items-center whitespace-nowrap">
                Learn More <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <i className="ri-computer-fill text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Behind the Scenes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Support with admin, social media, design, or other skills. Work remotely or in-person based on your availability.
              </p>
              <Link to="/volunteer" className="text-blue-500 font-bold hover:text-blue-600 transition-colors inline-flex items-center whitespace-nowrap">
                Learn More <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/volunteer" className="inline-block bg-yellow-400 text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-500 transition-all shadow-xl whitespace-nowrap">
              <i className="ri-heart-fill mr-2"></i>
              Sign Up to Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-lime-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-6">
            Free Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Download Our Harm Reduction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-yellow-400 flex items-center justify-center">
                <i className="ri-file-text-fill text-gray-900 text-6xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Overdose Response Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Step-by-step instructions for responding to an opioid overdose</p>
                <a href="#" className="text-blue-500 font-bold hover:text-blue-600 transition-colors inline-flex items-center whitespace-nowrap">
                  <i className="ri-download-line mr-2"></i>Download PDF
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-blue-500 flex items-center justify-center">
                <i className="ri-first-aid-kit-fill text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Naloxone Administration</h3>
                <p className="text-gray-600 text-sm mb-4">Visual guide to administering naloxone nasal spray</p>
                <a href="#" className="text-blue-500 font-bold hover:text-blue-600 transition-colors inline-flex items-center whitespace-nowrap">
                  <i className="ri-download-line mr-2"></i>Download PDF
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-pink-500 flex items-center justify-center">
                <i className="ri-heart-pulse-fill text-white text-6xl"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Harm Reduction Poster</h3>
                <p className="text-gray-600 text-sm mb-4">Community awareness poster for public spaces</p>
                <a href="#" className="text-blue-500 font-bold hover:text-blue-600 transition-colors inline-flex items-center whitespace-nowrap">
                  <i className="ri-download-line mr-2"></i>Download PDF
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/resources" className="inline-block bg-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-all shadow-lg whitespace-nowrap">
              View All Resources <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-bold mb-6">
              Latest Updates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              News & Announcements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest initiatives, events, and community impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured News */}
            <div className="md:row-span-2 bg-gradient-to-br from-yellow-400 to-lime-400 rounded-3xl overflow-hidden shadow-xl group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {newsItems[0].category}
                  </span>
                  <span className="text-gray-800 text-sm font-semibold">
                    <i className="ri-calendar-line mr-1"></i>{newsItems[0].date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-800 leading-relaxed mb-6">
                  {newsItems[0].excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-gray-900 font-bold hover:text-pink-600 transition-colors cursor-pointer">
                  Read Full Story <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </div>
            </div>

            {/* Other News Items */}
            {newsItems.slice(1).map((news) => (
              <div key={news.id} className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-40 h-40 sm:h-auto overflow-hidden flex-shrink-0">
                    <img 
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {news.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {news.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                      {news.excerpt}
                    </p>
                    <a href="#" className="inline-flex items-center text-pink-500 font-semibold text-sm hover:text-pink-600 transition-colors cursor-pointer">
                      Read More <i className="ri-arrow-right-s-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#" className="inline-block bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg whitespace-nowrap cursor-pointer">
              View All News <i className="ri-arrow-right-line ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Community Voices
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-yellow-400">
                    <span className="text-gray-900 font-bold text-lg">SH</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">Sarah H.</div>
                    <div className="text-sm text-gray-600">Peer Trainer</div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  "Being part of this organisation has given me purpose. I've used naloxone twice now and saved two lives. The training was clear, compassionate, and empowering."
                </p>
                <div className="flex gap-1">
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center border-4 border-pink-500">
                    <span className="text-white font-bold text-lg">DM</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">David M.</div>
                    <div className="text-sm text-gray-600">Community Member</div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  "I was nervous about attending, but the team made me feel so welcome. No judgement, just practical information that could save a life. Everyone should do this training."
                </p>
                <div className="flex gap-1">
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-lime-400 rounded-full flex items-center justify-center border-4 border-lime-400">
                    <span className="text-gray-900 font-bold text-lg">LT</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">Lisa T.</div>
                    <div className="text-sm text-gray-600">Outreach Volunteer</div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  "Volunteering with Naloxone Advocates has been incredibly rewarding. The peer-led approach means we're helping our own community, and that makes all the difference."
                </p>
                <div className="flex gap-1">
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center border-4 border-blue-400">
                    <span className="text-white font-bold text-lg">RC</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">Robert C.</div>
                    <div className="text-sm text-gray-600">Family Member</div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  "My son struggles with addiction. This training gave me the tools and confidence to keep him safe. I can't thank this team enough for what they do."
                </p>
                <div className="flex gap-1">
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-lime-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white font-semibold mb-10">
            Join us in saving lives and building a safer, more compassionate community
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <Link to="/training" className="bg-pink-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-pink-600 transition-all shadow-xl whitespace-nowrap">
              Get Trained <i className="ri-arrow-right-line ml-2"></i>
            </Link>
            <Link to="/contact" className="bg-white text-blue-500 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-xl whitespace-nowrap">
              Contact Us <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            <a href="tel:01752000000" className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <i className="ri-phone-fill text-blue-500 text-2xl"></i>
            </a>
            <a href="mailto:info@naloxoneadvocates.org" className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <i className="ri-mail-fill text-blue-500 text-2xl"></i>
            </a>
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <i className="ri-facebook-fill text-blue-500 text-2xl"></i>
            </a>
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <i className="ri-instagram-fill text-blue-500 text-2xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Column 1 */}
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
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-facebook-fill text-gray-900 text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-instagram-fill text-white text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-twitter-fill text-white text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-linkedin-fill text-gray-900 text-lg"></i>
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/training" className="text-gray-400 hover:text-white transition-colors">Training & P2P</Link></li>
                <li><Link to="/volunteer" className="text-gray-400 hover:text-white transition-colors">Volunteer</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-pink-500 font-bold text-lg mb-4">Get Help</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="font-semibold text-white">Emergency: 999</p>
                <p>Phone: 01752 000 000</p>
                <p>Email: info@naloxoneadvocates.org</p>
                <Link to="/get-naloxone" className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-yellow-500 transition-all mt-4 whitespace-nowrap">
                  Crisis Resources
                </Link>
              </div>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-lime-400 font-bold text-lg mb-4">Stay Connected</h3>
              <p className="text-gray-400 text-sm mb-4">Get updates on training sessions and harm reduction news</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-transparent border-b-2 border-blue-500 text-white placeholder-gray-500 px-2 py-2 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                />
                <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all whitespace-nowrap">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="bg-yellow-400 rounded-2xl py-6 mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center tracking-tight">
                NALOXONE SAVES LIVES
              </h2>
            </div>
            <div className="text-center text-gray-500 text-sm">
              <p>&copy; 2025 Naloxone Advocates Plymouth CIC. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a></p>
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
