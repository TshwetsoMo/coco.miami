import { useRef } from 'react';
import { motion } from 'motion/react';
import {
  Users,
  Music,
  GlassWater,
  ShieldCheck,
  ArrowRight,
  Star,
  ChevronRight,
  ChevronLeft,
  Layout,
  Sparkles,
  Trophy,
} from 'lucide-react';

import deco1 from '../assets/DECO/Photo0--8reserve.png';
import deco2 from '../assets/DECO/Photo0--10DJbooth.png';
import deco3 from '../assets/DECO/Photo0--11section.png';
import deco4 from '../assets/DECO/Photo0--12section.png';
import deco5 from '../assets/DECO/Photo0--13section.png';
import deco6 from '../assets/DECO/Photo0--14section.png';
import deco7 from '../assets/DECO/Photo0--16section.png';
import deco8 from '../assets/DECO/Photo0--19stage.png';
import deco9 from '../assets/DECO/Photo0--20bar.png';
import deco10 from '../assets/DECO/Photo0--21DJbooth.png';
import deco11 from '../assets/DECO/Photo0--22stage.png';
import deco12 from '../assets/DECO/Photo0--23bar.png';
import deco13 from '../assets/DECO/Photo0--24stagestairs.png';
import deco14 from '../assets/DECO/Photo0--25section.png';
import deco15 from '../assets/DECO/Photo0--27section.png';
import deco16 from '../assets/DECO/Photo0--31bottles.png';
import deco17 from '../assets/DECO/Photo0--32bottles.png';
import deco18 from '../assets/DECO/stage.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const decoImages = [
  deco1,
  deco2,
  deco3,
  deco4,
  deco5,
  deco6,
  deco7,
  deco8,
  deco9,
  deco10,
  deco11,
  deco12,
  deco13,
  deco14,
  deco15,
  deco16,
  deco17,
  deco18,
];

export default function Events() {
  const decoCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollDeco = (direction: 'left' | 'right') => {
    if (!decoCarouselRef.current) return;

    decoCarouselRef.current.scrollBy({
      left: direction === 'left' ? -360 : 360,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-midnight min-h-screen pt-28 md:pt-36">
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2000"
            alt="Private Event Atmosphere"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-midnight/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40 z-10" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="h-[1px] w-8 bg-gold/50" />
            <span className="text-gold uppercase text-[10px] font-bold tracking-[0.4em]">
              Private Bookings
            </span>
            <div className="h-[1px] w-8 bg-gold/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif text-ivory leading-[0.9] mb-10"
          >
            Host Your <br />
            <span className="italic text-gold">Masterpiece.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-stone text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            From high-stakes corporate activations to intimate private celebrations, Coco Miami provides a cinematic backdrop for Miami&apos;s most exclusive gatherings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="mailto:Info@coco.miami?subject=Event%20Inquiry"
              className="btn-primary px-12 py-5 inline-flex items-center justify-center"
            >
              Inquire About Events
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Canvas (Event Types) */}
      <section className="py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {[
              {
                title: 'Corporate Activations',
                subtitle: 'Brand Presence',
                desc: 'Elevate your brand with a venue that speaks to exclusivity and modern luxury. Ideal for product launches, press previews, and high-level corporate hosting.',
                img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000',
              },
              {
                title: 'Private Celebrations',
                subtitle: 'Personal Milestones',
                desc: 'From landmark birthdays to curated late-night anniversaries, create memories in an atmosphere designed for the extraordinary.',
                img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000',
              },
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group"
              >
                <div className="aspect-[16/10] overflow-hidden mb-10 grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 border border-white/5">
                  <img
                    src={type.img}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4">
                  <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">
                    {type.subtitle}
                  </span>
                  <h3 className="text-4xl font-serif italic text-ivory">{type.title}</h3>
                  <p className="text-stone text-sm leading-relaxed font-light max-w-md">
                    {type.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Specs (The Space) */}
      <section className="py-32 bg-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
            <div className="lg:col-span-1">
              <span className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-6 block">
                The Space
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-ivory leading-tight mb-8">
                Versatility <br />
                <span className="italic text-gold">Defined.</span>
              </h2>
              <p className="text-stone font-light leading-relaxed mb-10">
                Our venue is a blank canvas of luxury, equipped with world-class technology and a layout that adapts to your vision.
              </p>
              <div className="space-y-6">
                {[
                  { label: 'Capacity', value: '250 Guests' },
                  { label: 'Location', value: 'Miami Design District' },
                  { label: 'Availability', value: '7 Days a Week' },
                ].map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-4 border-b border-white/5"
                  >
                    <span className="text-stone text-[10px] uppercase tracking-widest">
                      {spec.label}
                    </span>
                    <span className="text-ivory font-serif italic">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: Music,
                  title: 'Elite Sound',
                  desc: 'State-of-the-art acoustics and sound systems curated for high-energy environments.',
                },
                {
                  icon: Layout,
                  title: 'Modular Layout',
                  desc: 'Flexible floor plans that accommodate everything from sit-down dinners to dance floor activations.',
                },
                {
                  icon: GlassWater,
                  title: 'Bespoke Bar',
                  desc: 'Custom mixology programs and premium beverage service tailored to your event theme.',
                },
                {
                  icon: Sparkles,
                  title: 'Lighting Design',
                  desc: 'Intelligent lighting systems that transform the mood from day to night seamlessly.',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-midnight p-10 border border-white/5 hover:border-gold/20 transition-all duration-500"
                >
                  <feature.icon
                    className="text-gold mb-8 opacity-50"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <h4 className="text-ivory font-serif text-xl mb-4 italic">
                    {feature.title}
                  </h4>
                  <p className="text-stone text-xs leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decor Gallery Carousel */}
      <section className="py-24 bg-midnight border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-5 block">
                Atmosphere & Detail
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-ivory leading-tight mb-6">
                A closer look at the <span className="italic text-gold">setting.</span>
              </h2>
              <p className="text-stone font-light leading-relaxed">
                A visual sequence of textures, lighting, décor, and atmosphere that helps define the Coco Miami event experience.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollDeco('left')}
                className="flex h-12 w-12 items-center justify-center border border-white/10 bg-charcoal text-ivory hover:border-gold/30 hover:text-gold transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollDeco('right')}
                className="flex h-12 w-12 items-center justify-center border border-white/10 bg-charcoal text-ivory hover:border-gold/30 hover:text-gold transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={decoCarouselRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {decoImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.03 }}
                className="snap-start shrink-0 w-[78vw] sm:w-[48vw] md:w-[320px] lg:w-[360px]"
              >
                <div className="group relative aspect-[4/5] overflow-hidden border border-white/5 bg-charcoal">
                  <img
                    src={image}
                    alt={`Coco Miami decor image ${index + 1}`}
                    className="w-full h-full object-cover grayscale-[0.12] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/90">
                      Frame {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-32 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-charcoal border border-white/5 p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] -z-10" />

            <div className="text-center mb-20">
              <span className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-6 block">
                Inquiry
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-6">
                Start the <span className="italic text-gold">Process</span>
              </h2>
              <p className="text-stone font-light max-w-xl mx-auto">
                Tell us about your vision, and our dedicated event management team will be in touch to curate your experience.
              </p>
            </div>

            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-stone font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-ivory focus:border-gold outline-none transition-colors font-light placeholder:text-stone/30"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-stone font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-ivory focus:border-gold outline-none transition-colors font-light placeholder:text-stone/30"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-stone font-bold">
                    Event Type
                  </label>
                  <select className="w-full bg-transparent border-b border-white/10 py-4 text-ivory focus:border-gold outline-none transition-colors font-light appearance-none cursor-pointer">
                    <option className="bg-midnight">Corporate Activation</option>
                    <option className="bg-midnight">Private Celebration</option>
                    <option className="bg-midnight">Brand Launch</option>
                    <option className="bg-midnight">Other</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-stone font-bold">
                    Guest Count
                  </label>
                  <input
                    type="number"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-ivory focus:border-gold outline-none transition-colors font-light placeholder:text-stone/30"
                    placeholder="Expected Guests"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] text-stone font-bold">
                  Message / Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-ivory focus:border-gold outline-none transition-colors font-light resize-none placeholder:text-stone/30"
                  placeholder="Tell us more about your vision..."
                />
              </div>
              <a
                href="mailto:Info@coco.miami?subject=Private-Event%20Inquiry"
                className="btn-primary w-full py-6 text-sm inline-flex items-center justify-center"
              >
                Inquire About Events
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* Execution Reassurance */}
      <section className="py-32 bg-charcoal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-ivory mb-8">
              Polished <span className="italic text-gold">Execution.</span>
            </h2>
            <p className="text-stone text-lg font-light leading-relaxed">
              Our events team specializes in high-stakes hospitality. From the initial concept to the final toast, we ensure your event is executed with the precision and polish that Coco Miami is known for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Trophy,
                title: 'Dedicated Management',
                desc: 'A single point of contact to manage every detail of your booking.',
              },
              {
                icon: ShieldCheck,
                title: 'Technical Support',
                desc: 'On-site sound and lighting engineers to ensure seamless production.',
              },
              {
                icon: Star,
                title: 'Premium Catering',
                desc: "Access to Miami's elite culinary partners for bespoke menus.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-6">
                <item.icon
                  className="text-gold mx-auto opacity-40"
                  size={32}
                  strokeWidth={1}
                />
                <h4 className="text-ivory font-serif text-xl italic">{item.title}</h4>
                <p className="text-stone text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
