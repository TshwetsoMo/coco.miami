import { motion } from 'motion/react';
import { Calendar, Clock, ShieldCheck, Users, ArrowRight, ChevronRight, Star, Info, MapPin } from 'lucide-react';
import bottlesPhoto from '../assets/DECO/Photo0--32bottles.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Reservations() {
  return (
    <div className="bg-midnight min-h-screen pt-28 md:pt-36">
      {/* Cinematic Hero */}
      <section className="relative h-[75vh] min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=2000" 
            alt="Coco Miami Interior" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-gold/50" />
              <span className="text-gold uppercase text-[10px] font-bold tracking-[0.4em]">
                The Table Experience
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif text-ivory leading-[0.9] mb-8"
            >
              Reserve the <br />
              <span className="italic text-gold">Exceptional.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-stone text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12"
            >
              Secure your place in the heart of Miami's Design District. From intimate tables to expansive group settings, every night is a curated masterpiece.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <a
                href="https://www.sevenrooms.com/events/cocomiami"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-10 py-5 inline-flex items-center justify-center"
              >
                Book a Table
              </a>

              <button className="px-10 py-5 border border-white/10 text-ivory hover:bg-white/5 transition-all text-[11px] font-bold uppercase tracking-[0.2em]">
                View Floor Plan
              </button>
            </motion.div>
          </div>
        </div>

        {/* Vertical Side Info */}
        <div className="absolute right-12 bottom-12 z-20 hidden xl:flex flex-col items-end space-y-8">
          <div className="flex flex-col items-end">
            <span className="text-gold text-[10px] uppercase tracking-widest font-bold mb-1">Operating Hours</span>
            <span className="text-ivory/60 text-xs font-light">WED, FRI, SAT | 12AM - 5AM</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-gold text-[10px] uppercase tracking-widest font-bold mb-1">Age Requirement</span>
            <span className="text-ivory/60 text-xs font-light">21+ Strictly Enforced</span>
          </div>
        </div>
      </section>

      {/* The Ritual Section */}
      <section className="py-32 bg-midnight relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden grayscale-[0.2] border border-white/5">
                <img
                  src={bottlesPhoto}
                  alt="Cocktail Ritual"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-gold/20 -z-10 hidden md:block" />
            </motion.div>

            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] block">The Ritual</span>
                <h2 className="text-4xl md:text-5xl font-serif text-ivory leading-tight">
                  A Night Built with <br />
                  <span className="italic text-gold">Intention.</span>
                </h2>
                <p className="text-stone font-light leading-relaxed text-lg">
                  Reservations at Coco Miami are more than a booking—they are an entry into a nocturnal world where every detail is considered. From the moment you arrive at our Design District entrance, the experience is seamless.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { 
                    title: 'Priority Entry', 
                    desc: 'Dedicated VIP entrance ensuring immediate access to the venue.' 
                  },
                  { 
                    title: 'Bespoke Service', 
                    desc: 'A dedicated host team managing your table experience all night.' 
                  },
                  { 
                    title: 'Prime Placement', 
                    desc: 'Tables positioned for optimal sound and social visibility.' 
                  },
                  { 
                    title: 'Curated Menu', 
                    desc: 'Access to our premium bottle service and late-night pairings.' 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-3"
                  >
                    <h4 className="text-ivory font-serif text-xl italic">{item.title}</h4>
                    <p className="text-stone text-sm font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Portal Section */}
      <section className="py-32 bg-charcoal border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-serif text-ivory">Secure Your <span className="italic text-gold">Table</span></h2>
              <p className="text-stone font-light text-lg max-w-2xl mx-auto">
                Select your date and preferred experience below. For groups larger than 12, please inquire through our private events channel.
              </p>
            </div>

            <div className="bg-midnight p-12 md:p-20 border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 space-y-8">
                <div className="flex justify-center space-x-12">
                  <div className="flex flex-col items-center space-y-2">
                    <Calendar className="text-gold opacity-50" size={24} strokeWidth={1} />
                    <span className="text-[10px] uppercase tracking-widest text-stone">Select Date</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Users className="text-gold opacity-50" size={24} strokeWidth={1} />
                    <span className="text-[10px] uppercase tracking-widest text-stone">Guest Count</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Clock className="text-gold opacity-50" size={24} strokeWidth={1} />
                    <span className="text-[10px] uppercase tracking-widest text-stone">Arrival Time</span>
                  </div>
                </div>
                
                <a
                  href="https://www.sevenrooms.com/events/cocomiami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-6 text-sm inline-flex items-center justify-center"
                >
                  Open Booking Portal
                </a>
                
                <div className="flex items-center justify-center space-x-4 text-[10px] uppercase tracking-[0.3em] text-stone/60">
                  <div className="h-[1px] w-8 bg-white/10" />
                  <span>Powered by SevenRooms</span>
                  <div className="h-[1px] w-8 bg-white/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guest Standards Section */}
      <section className="py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <span className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-6 block">The Standards</span>
              <h2 className="text-4xl font-serif text-ivory leading-tight mb-8">
                Before You <br />
                <span className="italic text-gold">Arrive.</span>
              </h2>
              <p className="text-stone font-light leading-relaxed">
                To maintain the curated atmosphere of Coco Miami, we kindly ask all guests to observe our venue standards.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { 
                  title: 'Dress Code', 
                  desc: 'Strict dress-attire policy. Fashionable, upscale attire is required. No athletic wear, sandals, or casual headwear.' 
                },
                { 
                  title: 'Age Requirement', 
                  desc: 'Strictly 21+ with valid government-issued ID. International guests must present a physical passport.' 
                },
                { 
                  title: 'Arrival Policy', 
                  desc: 'Reservations are held for a maximum of 15 minutes. Please notify us of any delays via phone.' 
                },
                { 
                  title: 'Guest Conduct', 
                  desc: 'We prioritize a safe, respectful, and high-energy environment for all our guests.' 
                }
              ].map((item, i) => (
                <div key={i} className="space-y-4 pb-8 border-b border-white/5">
                  <h4 className="text-ivory font-serif text-xl italic">{item.title}</h4>
                  <p className="text-stone text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-serif text-ivory mb-2 italic">Planning a private event?</h3>
              <p className="text-stone font-light">Inquire about our venue buyout and private booking options.</p>
            </div>
            <a
              href="mailto:Info@coco.miami?subject=Event%20Inquiry"
              className="px-10 py-5 border border-gold/30 text-gold hover:bg-gold hover:text-midnight transition-all text-[11px] font-bold uppercase tracking-[0.2em] inline-flex items-center justify-center cursor-pointer"
            >
              Inquire About Events
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-midnight/90 backdrop-blur-xl border-t border-white/5 z-50">
        <button className="btn-primary w-full py-4">
          Reserve a Table
        </button>
      </div>
    </div>
  );
}
