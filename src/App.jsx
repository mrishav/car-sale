import { useState } from 'react'
import { ChevronDown, Check, Phone, Mail, MapPin, Wrench, Shield, X, ChevronLeft, ChevronRight } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('overview')
  const [selectedImage, setSelectedImage] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll for animations
  useState(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const exteriorImages = [
    'DSC06431.jpeg', 'DSC06437.jpeg', 'DSC06440.jpeg', 'DSC06442.jpeg',
    'DSC06459.jpeg', 'DSC06465.jpeg', 'DSC06470.jpeg', 'DSC06476.jpeg',
    'DSC06477.jpeg', 'DSC06482.jpeg', 'DSC06500.jpeg', 'DSC06503.jpeg',
    'DSC06505.jpeg', 'DSC06511.jpeg', 'DSC06515.jpeg', 'DSC06521.jpeg',
    'DSC06545.jpeg', 'DSC06551.jpeg', 'DSC06554.jpeg', 'DSC06569.jpeg',
    'DSC06572.jpeg', 'DSC06574.jpeg', 'DSC06577.jpeg', 'DSC06579.jpeg',
    'DSC06584.jpeg', 'DSC06587.jpeg', 'DSC06592.jpeg', 'DSC06596.jpeg',
    'DSC06599.jpeg', 'DSC06666.jpeg', 'DSC06668.jpeg', 'DSC06670.jpeg',
    'DSC06672.jpeg', 'DSC06674.jpeg', 'DSC06679.jpeg', 'DSC06683.jpeg'
  ]

  const interiorImages = [
    'DSC06491.jpeg', 'DSC06522.jpeg', 'DSC06527.jpeg', 'DSC06530.jpeg',
    'DSC06531.jpeg', 'DSC06536.jpeg', 'DSC06603.jpeg', 'DSC06606.jpeg',
    'DSC06607.jpeg', 'DSC06609.jpeg', 'DSC06610.jpeg', 'DSC06613.jpeg',
    'DSC06624.jpeg', 'DSC06626.jpeg', 'DSC06629.jpeg', 'DSC06632.jpeg',
    'DSC06635.jpeg', 'DSC06641.jpeg', 'DSC06652.jpeg', 'DSC06695.jpeg',
    'DSC06698.jpeg'
  ]

  const experimentalImages = [
    'DSC06449.jpeg', 'DSC06451.jpeg', 'DSC06560.jpeg',
    'DSC06562.jpeg', 'DSC06719.jpeg', 'DSC06724.jpeg'
  ]

  const features = [
    'Pirelli P ZERO tyres',
    'Ceramic brakes with McLaren Orange calipers',
    'Vehicle lift',
    'Front and rear parking sensors',
    'Lithium-ion battery charger',
    'Soft close doors',
    'Sports exhaust',
    'Exterior special paint – Silica White',
    'Luxury Pack',
    'Nappa Sport interior trim',
    'Electric and heated memory seats',
    'Bowers & Wilkins 12-speaker audio system',
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-2xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg md:text-xl font-bold tracking-tight">
              <span className="text-white">McLaren 570S</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition">Options</a>
              <a href="#gallery" className="text-sm text-gray-400 hover:text-white transition">Gallery</a>
              <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-all">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-white/10 animate-fade-in-up">
              <a 
                href="#features" 
                className="block text-gray-400 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Options
              </a>
              <a 
                href="#gallery" 
                className="block text-gray-400 hover:text-white transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="block bg-white text-black px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full Screen Image */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden bg-black">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/car/Experimental/DSC06719.jpeg" 
            alt="McLaren 570S"
            className="w-full h-full object-contain md:object-cover md:object-center"
          />
          {/* Top and bottom gradient blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent via-50% to-black"></div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="text-white" size={28} />
        </div>

        {/* Minimal badge - always visible */}
        <div className="absolute top-20 md:top-24 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in-up px-4">
          <div className="glass-card px-4 md:px-6 py-2 md:py-3 rounded-full animate-glow-pulse">
            <span className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">2019 McLaren 570S • 8,699 Miles</span>
          </div>
        </div>
      </section>

      {/* About Section - Personal Story */}
      <section className="relative py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter gradient-text mb-4 md:mb-6 animate-fade-in-up stagger-1">
                2019 McLaren 570S
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl font-light text-gray-400 mb-2 animate-fade-in-up stagger-2">Coupe • Silica White • 8,699 Miles</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mt-4 animate-scale-in stagger-3">$145,000</p>
            </div>

            <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-12 text-left animate-fade-in-up stagger-4">
              <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed space-y-6">
                <p>
                  We're looking to sell our McLaren 570S because we're unfortunately out of garage space. The car belongs to my dad and has been with us for almost its entire life. He bought it when it was a year old with just 1,797 miles, and it has stayed in California ever since.
                </p>
                
                <p>
                  It's been cared for extremely well. The car has full STEK Dyno PPF and ceramic coating from Wrap Culture, and it's been regularly detailed by Josh Tan. All servicing has been done exclusively through McLaren San Francisco. My dad mainly drove it to dinners and the occasional Trader Joe's run.
                </p>
                
                <p>
                  It has 8,699 miles and is a great 570S spec: metallic Silica White, sports exhaust, carbon ceramic brakes, and the Bowers & Wilkins audio system. It's always been garage-kept and the condition inside and out reflects that.
                </p>
                
                <p>
                  We really love this car and just want it to go to someone who'll appreciate it as much as we have. Happy to share more photos or videos if needed.
                </p>
              </div>

              {/* CARFAX Link & Service Info */}
              <div className="mt-6 md:mt-8 pt-6 border-t border-white/10 flex flex-col md:grid md:grid-cols-2 gap-6">
                <a 
                  href="/Carfax.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                >
                  <Shield size={20} />
                  <span className="font-semibold">View Clean CARFAX Report</span>
                  <ChevronDown size={16} className="rotate-[-90deg]" />
                </a>
                
                <div className="flex items-start gap-2 text-gray-400">
                  <Wrench size={20} className="flex-shrink-0 mt-1" />
                  <p className="text-sm">
                    Most recent service performed July 2025 including oil and filter change, full inspection, and system diagnostics. Clean underbody with minimal wear consistent with dry-climate California ownership.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
              <a href="#contact" className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.98] animate-fade-in-up stagger-5 text-center">
                Contact Info
              </a>
              <a href="#gallery" className="glass-card text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.98] animate-fade-in-up stagger-6 text-center">
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experimental Photos Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight gradient-text mb-4 animate-fade-in-up">
              Featured Shots
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {experimentalImages.map((image, index) => (
              <div 
                key={index}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group glass-card hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 animate-scale-in stagger-${(index % 6) + 1}`}
                onClick={() => setSelectedImage({ src: `/images/car/Experimental/${image}`, type: 'Experimental' })}
              >
                <img 
                  src={`/images/car/Experimental/${image}`}
                  alt={`McLaren 570S Featured ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options & Features */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center animate-fade-in-up">
            <span className="gradient-text">Options</span>
          </h2>
          <p className="text-gray-400 text-center mb-8 md:mb-12 text-base md:text-lg">
            Comprehensive factory specifications
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <div key={index} className={`flex items-start space-x-3 glass-card rounded-2xl p-5 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 animate-fade-in-up stagger-${(index % 6) + 1}`}>
                <Check className="text-white flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="gradient-text">Contact Info</span>
            </h2>
            <p className="text-gray-500 text-sm italic mt-2">
              Serious inquiries only
            </p>
          </div>
          
          <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-12 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={28} />
                </div>
                <h3 className="font-bold mb-2 text-white">Call</h3>
                <a href="tel:650-279-1905" className="text-gray-400 hover:text-white transition font-medium">650-279-1905</a>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="font-bold mb-2 text-white">Email</h3>
                <a href="mailto:rishavmitrasaab@gmail.com" className="text-gray-400 hover:text-white transition font-medium break-all">rishavmitrasaab@gmail.com</a>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="font-bold mb-2 text-white">Location</h3>
                <p className="text-gray-400 font-medium">California</p>
              </div>
            </div>
            
            <div className="text-center">
              <a href="mailto:rishavmitrasaab@gmail.com" className="inline-block bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.98] animate-glow-pulse">
                Contact Seller
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full Gallery Section */}
      <section id="gallery" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight gradient-text mb-4 animate-fade-in-up">
              Complete Gallery
            </h2>
          </div>
          
          {/* Exterior Photos */}
          <div className="mb-24">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white">Exterior</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {exteriorImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group bg-white/5 border border-white/10"
                  onClick={() => setSelectedImage({ src: `/images/car/Exterior/${image}`, type: 'Exterior' })}
                >
                  <img 
                    src={`/images/car/Exterior/${image}`}
                    alt={`McLaren 570S Exterior ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {index + 1} / {exteriorImages.length}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interior Photos */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white">Interior</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {interiorImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group bg-white/5 border border-white/10"
                  onClick={() => setSelectedImage({ src: `/images/car/Interior/${image}`, type: 'Interior' })}
                >
                  <img 
                    src={`/images/car/Interior/${image}`}
                    alt={`McLaren 570S Interior ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {index + 1} / {interiorImages.length}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (() => {
        const currentList = selectedImage.type === 'Exterior' ? exteriorImages : 
                           selectedImage.type === 'Interior' ? interiorImages : 
                           experimentalImages;
        const currentFolder = selectedImage.type;
        const currentIndex = currentList.findIndex(img => selectedImage.src.includes(img));
        
        const goToNext = () => {
          const nextIndex = (currentIndex + 1) % currentList.length;
          setSelectedImage({ 
            src: `/images/car/${currentFolder}/${currentList[nextIndex]}`, 
            type: currentFolder 
          });
        };
        
        const goToPrev = () => {
          const prevIndex = (currentIndex - 1 + currentList.length) % currentList.length;
          setSelectedImage({ 
            src: `/images/car/${currentFolder}/${currentList[prevIndex]}`, 
            type: currentFolder 
          });
        };
        
        return (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition p-2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            {/* Previous Button */}
            <button 
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 z-10 touch-manipulation"
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            >
              <ChevronLeft size={32} className="md:w-10 md:h-10" />
            </button>
            
            {/* Next Button */}
            <button 
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition p-2 md:p-3 bg-black/50 rounded-full hover:bg-black/70 z-10 touch-manipulation"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
            >
              <ChevronRight size={32} className="md:w-10 md:h-10" />
            </button>
            
            <img 
              src={selectedImage.src}
              alt={`McLaren 570S ${selectedImage.type}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-white text-sm">
              {currentIndex + 1} / {currentList.length}
            </div>
          </div>
        );
      })()}

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p className="font-medium">2019 McLaren 570S Coupe • Silica White • 8,699 Miles</p>
          <p className="mt-2 text-sm">Clean CARFAX • No Accidents • California Car • McLaren Serviced</p>
          <p className="mt-4 text-xs text-gray-500">Contact: rishavmitrasaab@gmail.com • 650-279-1905</p>
        </div>
      </footer>
    </div>
  )
}

export default App
