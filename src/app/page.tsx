'use client';

import { useState, useRef } from 'react';
import { motion, useScroll as useFramerScroll, useTransform as useFramerTransform } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail, Instagram, ChevronLeft, ChevronRight, Heart, Star, Calendar, Users, Camera, Music } from 'lucide-react';

const images = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80', alt: 'Wedding ceremony' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80', alt: 'Wedding decorations' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80', alt: 'Event setup' },
  { src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&q=80', alt: 'Celebration' },
];

const services = [
  { icon: Heart, title: 'Weddings', description: 'Complete wedding planning and coordination for your dream day' },
  { icon: Calendar, title: 'Corporate Events', description: 'Professional corporate event management for businesses' },
  { icon: Users, title: 'Birthday Parties', description: 'Memorable birthday celebrations for all ages' },
  { icon: Camera, title: 'Photography', description: 'Capturing every beautiful moment of your event' },
  { icon: Music, title: 'Entertainment', description: 'DJ services, live bands, and entertainment solutions' },
  { icon: Star, title: 'VIP Events', description: 'Exclusive high-end events and private celebrations' },
];

const gallery = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80', category: 'Wedding' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80', category: 'Reception' },
  { src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1200&q=80', category: 'Celebration' },
  { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80', category: 'Corporate' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80', category: 'Party' },
  { src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1200&q=80', category: 'Event' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=80', category: 'Decoration' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80', category: 'Setup' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80', category: 'Details' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80', category: 'Conference' },
  { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80', category: 'Lighting' },
  { src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80', category: 'Live Music' },
];

export default function MarolesEventsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [hoveredGallery, setHoveredGallery] = useState<number | null>(null);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useFramerScroll({ target: heroRef });
  const y = useFramerTransform(scrollYProgress, [0, 1], ['0%', '0%']);
  const opacity = useFramerTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  
  const nextGallerySlide = () => setCurrentGallerySlide((prev) => (prev + 1) % gallery.length);
  const prevGallerySlide = () => setCurrentGallerySlide((prev) => (prev - 1 + gallery.length) % gallery.length);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-rose/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="font-serif text-2xl font-semibold text-charcoal tracking-wide">Maroles</span>
              <span className="text-champagne">Events</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors tracking-wide"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.a
              href="https://wa.me/2348172916965"
              target="_blank"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block px-6 py-2.5 bg-charcoal text-cream text-sm font-medium rounded-full hover:bg-charcoal/90 transition-colors"
            >
              Get in Touch
            </motion.a>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-cream border-t border-rose/20"
          >
            <div className="px-6 py-4 space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-sm font-medium text-charcoal/80"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section with Carousel */}
      <section id="home" ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/50" />
            </div>
          ))}
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-cream/80 text-sm tracking-[0.3em] uppercase mb-4"
          >
            Lagos, Nigeria
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-6 text-balance"
          >
            Creating Unforgettable{' '}
            <span className="italic text-rose">Moments</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-cream/80 text-lg md:text-xl max-w-xl mb-8"
          >
            Professional event planning and wedding coordination for your special occasions
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4"
          >
            <a href="#contact" className="px-8 py-3 bg-cream text-charcoal font-medium rounded-full hover:bg-cream/90 transition-colors">
              Plan Your Event
            </a>
            <a href="#gallery" className="px-8 py-3 border border-cream/50 text-cream font-medium rounded-full hover:bg-cream/10 transition-colors">
              View Gallery
            </a>
          </motion.div>
        </motion.div>

        {/* Carousel Controls */}
        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-cream/20 backdrop-blur-sm rounded-full hover:bg-cream/30 transition-colors">
          <ChevronLeft className="text-cream" size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-cream/20 backdrop-blur-sm rounded-full hover:bg-cream/30 transition-colors">
          <ChevronRight className="text-cream" size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-cream' : 'bg-cream/50'}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-champagne text-sm tracking-[0.2em] uppercase mb-4">About Us</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
                Crafting Dreams{' '}
                <span className="italic text-rose">Into Reality</span>
              </h2>
              <div className="w-20 h-px bg-champagne mb-6" />
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Maroles Events is a premier event planning company based in Lagos, Nigeria. 
                We specialize in creating unforgettable experiences for weddings, corporate events, 
                and celebrations of all kinds.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-8">
                With years of experience and a passion for perfection, our team ensures every 
                detail is handled with care and creativity. From intimate gatherings to grand 
                celebrations, we bring your vision to life.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[['150+', 'Events'], ['8+', 'Years'], ['100%', 'Satisfaction']].map(([num, label]) => (
                  <div key={label} className="text-center">
                    <p className="font-serif text-3xl text-charcoal">{num}</p>
                    <p className="text-sm text-charcoal/60">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80" 
                  alt="Event planning" 
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-rose/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-champagne rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-champagne text-sm tracking-[0.2em] uppercase mb-4">What We Do</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Our <span className="italic text-rose">Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-cream rounded-2xl text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center group-hover:bg-champagne transition-colors">
                  <service.icon className="text-champagne group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal/60 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-champagne text-sm tracking-[0.2em] uppercase mb-4">Our Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Event <span className="italic text-rose">Gallery</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Main Gallery Image */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl bg-slate-100">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === currentGallerySlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img 
                    src={img.src} 
                    alt={img.category} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="font-serif text-3xl md:text-4xl text-cream">{img.category}</p>
                    <p className="text-cream/70 text-sm mt-1">{i + 1} / {gallery.length}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Navigation Arrows */}
            <button 
              onClick={prevGallerySlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-cream/90 backdrop-blur-sm rounded-full hover:bg-cream transition-all shadow-lg"
            >
              <ChevronLeft className="text-charcoal" size={28} />
            </button>
            <button 
              onClick={nextGallerySlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-cream/90 backdrop-blur-sm rounded-full hover:bg-cream transition-all shadow-lg"
            >
              <ChevronRight className="text-charcoal" size={28} />
            </button>

            {/* Gallery Thumbnails */}
            <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentGallerySlide(i)}
                  className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden transition-all ${
                    i === currentGallerySlide 
                      ? 'ring-2 ring-champagne scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt={img.category} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
        

      {/* Parallax Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80" 
            alt="Wedding" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <Heart className="mx-auto text-rose mb-6" size={48} />
          <h2 className="font-serif text-4xl md:text-6xl text-cream mb-6">
            Your Dream Wedding Awaits
          </h2>
          <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us transform your vision into an unforgettable celebration. 
            Every detail, every moment, crafted with love.
          </p>
          <a 
            href="https://wa.me/2348172916965" 
            className="inline-block px-10 py-4 bg-cream text-charcoal font-medium rounded-full hover:bg-cream/90 transition-colors"
          >
            Start Planning Today
          </a>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-champagne text-sm tracking-[0.2em] uppercase mb-4">Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Let's <span className="italic text-rose">Connect</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-champagne" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-charcoal mb-1">Location</h4>
                  <p className="text-charcoal/60">8, NNPC Pipeline Road, Ikeja<br />Lagos State, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-champagne" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-charcoal mb-1">Phone</h4>
                  <a href="tel:+2348172916965" className="text-charcoal/60 hover:text-champagne transition-colors">+234 817 291 6965</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-champagne" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-charcoal mb-1">Email</h4>
                  <a href="mailto:marolesservers@gmail.com" className="text-charcoal/60 hover:text-champagne transition-colors">marolesservers@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-champagne" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-charcoal mb-1">Instagram</h4>
                  <a href="https://instagram.com/marolesevents" target="_blank" className="text-charcoal/60 hover:text-champagne transition-colors">@marolesevents</a>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                window.open('https://wa.me/2348172916965', '_blank');
              }}
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-cream rounded-xl border border-rose/20 focus:outline-none focus:border-champagne transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-cream rounded-xl border border-rose/20 focus:outline-none focus:border-champagne transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Event Type"
                  className="w-full px-6 py-4 bg-cream rounded-xl border border-rose/20 focus:outline-none focus:border-champagne transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="w-full px-6 py-4 bg-cream rounded-xl border border-rose/20 focus:outline-none focus:border-champagne transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-charcoal text-cream font-medium rounded-xl hover:bg-charcoal/90 transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal text-cream/80">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-serif text-2xl text-cream mb-2">Maroles Events</p>
              <p className="text-sm">Creating unforgettable moments in Lagos, Nigeria</p>
            </div>
            <div className="flex gap-4">
              <a href="https://instagram.com/marolesevents" target="_blank" className="p-3 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/2348172916965" target="_blank" className="p-3 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cream/10 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Maroles Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
