import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Clock, ArrowRight, ChevronRight, MessageSquare } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function Contact() {
  return (
    <div className="bg-midnight min-h-screen pt-28 md:pt-36">
      {/* Cinematic Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Atmosphere" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/70 to-midnight z-10" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="h-[1px] w-8 bg-gold/50" />
            <span className="text-gold uppercase text-[10px] font-bold tracking-[0.4em]">
              Connect
            </span>
            <div className="h-[1px] w-8 bg-gold/50" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif italic text-ivory mb-10"
          >
            Let's Start a <span className="text-gold">Conversation.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-stone text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Whether you're planning a visit, an event, or just have a question, our team is here to ensure your experience is seamless.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-20">
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] block">Direct Channels</span>
                  <h2 className="text-4xl font-serif italic text-ivory">Reach <span className="text-gold">Out.</span></h2>
                </div>
                
                <div className="space-y-12">
                  <div className="flex items-start space-x-8 group">
                    <div className="w-14 h-14 border border-white/5 flex items-center justify-center text-gold shrink-0 group-hover:border-gold/40 transition-all duration-500">
                      <MapPin size={22} strokeWidth={1} />
                    </div>
                    <div>
                      <h4 className="text-ivory font-serif text-xl mb-2 italic">Location</h4>
                      <p className="text-stone text-sm leading-relaxed font-light">
                        8 NE 41st St,<br />
                        Miami, FL 33137
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-8 group">
                    <div className="w-14 h-14 border border-white/5 flex items-center justify-center text-gold shrink-0 group-hover:border-gold/40 transition-all duration-500">
                      <Phone size={22} strokeWidth={1} />
                    </div>
                    <div>
                      <h4 className="text-ivory font-serif text-xl mb-2 italic">Phone</h4>
                      <p className="text-stone text-sm leading-relaxed font-light">(786) 389-6789</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-8 group">
                    <div className="w-14 h-14 border border-white/5 flex items-center justify-center text-gold shrink-0 group-hover:border-gold/40 transition-all duration-500">
                      <Mail size={22} strokeWidth={1} />
                    </div>
                    <div>
                      <h4 className="text-ivory font-serif text-xl mb-2 italic">Email</h4>
                      <p className="text-stone text-sm leading-relaxed font-light">Info@coco.miami</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-8 group">
                    <div className="w-14 h-14 border border-white/5 flex items-center justify-center text-gold shrink-0 group-hover:border-gold/40 transition-all duration-500">
                      <Clock size={22} strokeWidth={1} />
                    </div>
                    <div>
                      <h4 className="text-ivory font-serif text-xl mb-2 italic">Hours</h4>
                      <p className="text-stone text-sm leading-relaxed font-light">WED, FRI, SAT: 12AM - 5AM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5">
                <h4 className="text-ivory font-serif text-xl mb-8 italic">Follow the Night</h4>
                <div className="flex space-x-6">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-14 h-14 border border-white/5 flex items-center justify-center text-stone hover:text-gold hover:border-gold transition-all duration-500"
                    >
                      <Icon size={20} strokeWidth={1} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-charcoal border border-white/5 p-12 md:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] -z-10" />
                
                <div className="space-y-6 mb-16">
                  <h2 className="text-4xl font-serif italic text-ivory">Send a <span className="text-gold">Message.</span></h2>
                  <p className="text-stone font-light">Have a general question? Fill out the form below and our team will respond shortly.</p>
                </div>
                
                <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-stone font-bold">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-white/10 py-4 text-ivory focus:border-gold outline-none transition-colors font-light placeholder:text-stone/30"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-stone font-bold">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-white/10 py-4 text-ivory focus:border-gold outline-none transition-colors font-light placeholder:text-stone/30"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-stone font-bold">Subject</label>
                    <select className="w-full bg-transparent border-b border-white/10 py-4 text-ivory focus:border-gold outline-none transition-colors font-light appearance-none cursor-pointer">
                      <option className="bg-midnight">General Inquiry</option>
                      <option className="bg-midnight">Reservation Question</option>
                      <option className="bg-midnight">Private Event Inquiry</option>
                      <option className="bg-midnight">Press & Media</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-stone font-bold">Message</label>
                    <textarea 
                      rows={5} 
                      className="w-full bg-transparent border-b border-white/10 py-4 text-ivory focus:border-gold outline-none transition-colors font-light resize-none placeholder:text-stone/30"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-6 text-sm">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Block */}
      <section className="h-[600px] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-midnight">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000&grayscale" 
            alt="Map Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-charcoal border border-white/5 p-12 md:p-16 text-center max-w-lg relative"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-midnight border border-white/5 flex items-center justify-center text-gold">
              <MapPin size={24} strokeWidth={1} />
            </div>
            
            <h4 className="text-ivory font-serif text-3xl mb-6 italic">Visit Us.</h4>
            <p className="text-stone text-lg mb-10 font-light leading-relaxed">
              Located in the heart of the Design District, Miami's premier destination for luxury and culture.
            </p>
            <div className="space-y-6">
              <p className="text-ivory/60 text-sm font-light">8 NE 41st St, Miami, FL 33137</p>
              <a 
                href="#" 
                className="inline-flex items-center space-x-4 text-gold hover:text-gold-light font-bold uppercase tracking-[0.3em] text-[11px] transition-colors group"
              >
                <span>Get Directions</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
