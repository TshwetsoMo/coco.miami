import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { VerticalRitualCarousel } from '../components/3d-carousel';
import cocoOutside from '../assets/COCO_OUTSIDE.png';
import cocoWed from '../assets/COCO-WED.png';
import cocoFri from '../assets/COCO-FRI.png';
import cocoSat from '../assets/COCO-SAT.png';
import gallery1 from '../assets/GALLERY/image-asset6.png';
import gallery2 from '../assets/GALLERY/image1-asset2.png';
import gallery3 from '../assets/GALLERY/image1-asset7.png';
import gallery4 from '../assets/GALLERY/image1-asset8.png';
import gallery5 from '../assets/GALLERY/image8-asset1.png';
import gallery6 from '../assets/GALLERY/image8-asset3.png';
import gallery7 from '../assets/GALLERY/image8-asset4.png';
import gallery8 from '../assets/GALLERY/image8-asset5.png';
import cocoBackground from '../assets/COCO_background.png';
import hostingEventImage from '../assets/GALLERY/image8-asset13.png';
import privateEventImage from '../assets/GALLERY/image8-asset11.png';
import gallery9 from '../assets/GALLERY/image1-asset17.png';
import gallery10 from '../assets/GALLERY/image1-asset18.png';
import gallery11 from '../assets/GALLERY/image1-asset19.png';
import gallery12 from '../assets/GALLERY/image1-asset21.png';
import gallery13 from '../assets/GALLERY/image1-asset23.png';
import gallery14 from '../assets/GALLERY/image1-asset24.png';
import gallery15 from '../assets/GALLERY/image1-asset25.png';
import gallery16 from '../assets/GALLERY/image1-asset26.png';
import gallery17 from '../assets/GALLERY/image1-asset27.png';
import gallery18 from '../assets/GALLERY/image1-asset28.png';
import gallery19 from '../assets/GALLERY/image1-asset29.png';
import gallery20 from '../assets/GALLERY/image1-asset30.png';
import gallery21 from '../assets/GALLERY/image1-asset31.png';
import gallery22 from '../assets/GALLERY/image1-asset32.png';
import gallery23 from '../assets/GALLERY/image1-asset12.png';
import gallery24 from '../assets/GALLERY/image1-asset14.png';
import gallery25 from '../assets/GALLERY/image1-asset15.png';
import cocoBackground2 from '../assets/COCO_background2.png';
import {
  ArrowRight,
  ChevronRight,
  Clock,
  MapPin,
  ShieldCheck,
  Users,
  GlassWater,
  CalendarDays,
} from 'lucide-react';

const heroMeta = [
  { label: 'Open Wed / Fri / Sat', value: '12:00am — 5:00am' },
  { label: 'Private Bookings', value: 'Available 7 Days a Week' },
  { label: 'Entry', value: '21+ with proper ID' },
];

const eventProgram = [
  {
    number: '01',
    title: 'Velvet Hour',
    date: 'Friday / 11 PM onward',
    desc: 'A darker, more intimate current of late-night energy built for slower arrivals and stronger atmosphere.',
    image: cocoFri,
    aspect: 'aspect-[4/5]',
  },
  {
    number: '02',
    title: 'Noir Saturdays',
    date: 'Saturday / 12 AM onward',
    desc: 'A sharper, high-energy sequence of premium tables, curated sound, and after-hours momentum.',
    image: cocoSat,
    aspect: 'aspect-[4/5]',
  },
  {
    number: '03',
    title: 'Aura Sessions',
    date: 'Wednesday / 12 AM onward',
    desc: 'Mid-week magnetism in the Design District, shaped for guests who prefer atmosphere over noise.',
    image: cocoWed,
    aspect: 'aspect-[4/5]',
  },
];

const ritualImages = [
  {
    src: gallery1,
    alt: 'Coco Miami gallery image 1',
  },
  {
    src: gallery2,
    alt: 'Coco Miami gallery image 2',
  },
  {
    src: gallery3,
    alt: 'Coco Miami gallery image 3',
  },
  {
    src: gallery4,
    alt: 'Coco Miami gallery image 4',
  },
  {
    src: gallery5,
    alt: 'Coco Miami gallery image 5',
  },
  {
    src: gallery6,
    alt: 'Coco Miami gallery image 6',
  },
  {
    src: gallery7,
    alt: 'Coco Miami gallery image 7',
  },
  {
    src: gallery8,
    alt: 'Coco Miami gallery image 8',
  },
];

const houseNotesImages = [
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  //gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
];

const experiencePoints = [
  'Premium late-night table experiences',
  'Fast access to reservations',
  'Built for memorable group nights',
];

const eventTags = [
  'Private celebrations',
  'Brand activations',
  'Corporate gatherings',
  'Full venue moments',
];

const faqs = [
  {
    q: 'Dress Code',
    a: 'We maintain a strict dress-attire policy. Fashionable attire is required. No shorts, sandals, or athletic wear.',
  },
  {
    q: 'Hours of Operation',
    a: 'We are open Wednesday, Friday, and Saturday, 12:00 AM until 5:00 AM.',
  },
  {
    q: 'Age Requirement',
    a: 'Coco Miami is a 21+ venue. Valid government-issued ID or passport is required for entry.',
  },
  {
    q: 'Filming & Photography',
    a: 'Professional photography and filming require prior authorization. Personal captures are welcome but must respect guest privacy.',
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-midnight text-ivory">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-36">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/deGtAXJPx54?autoplay=1&mute=1&controls=0&loop=1&playlist=deGtAXJPx54&playsinline=1&modestbranding=1&rel=0"
              title="Coco Miami background video"
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-105"
              allow="autoplay; encrypted-media"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.96)_0%,rgba(9,9,11,0.80)_38%,rgba(9,9,11,0.30)_70%,rgba(9,9,11,0.18)_100%)] z-10" />
          <div className="absolute inset-0 bg-midnight/30 z-10" />
        </div>

        {/* Ghost typography */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[16%] left-[4%] text-[16vw] leading-none font-serif tracking-[-0.06em] opacity-[0.06] select-none">
            COCO
          </div>
          <div className="absolute bottom-[10%] right-[-2%] text-[14vw] leading-none font-serif italic tracking-[-0.06em] opacity-[0.05] select-none">
            AFTER DARK
          </div>
        </div>

        {/* Main hero grid */}
        <div className="relative z-20 max-w-[1800px] mx-auto w-full px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 pb-10 md:pb-16"
            >
              <span className="text-gold uppercase text-[10px] font-bold mb-5 block tracking-[0.6em]">
                COCO MIAMI
              </span>

              <h1 className="max-w-5xl text-[3.4rem] sm:text-[4.3rem] md:text-[6rem] lg:text-[8rem] font-serif leading-[0.84] tracking-tight">
                Where the
                <br />
                <span className="italic text-gold">night</span> turns up.
              </h1>

              <p className="text-stone text-lg md:text-xl mt-8 mb-10 max-w-2xl font-light leading-relaxed opacity-0">
                A late-night destination in Miami for elevated tables, curated nights,
                and private celebrations shaped by atmosphere.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <Link to="/reservations" className="btn-primary min-w-[220px] text-center">
                  Reserve a Table
                </Link>
                <Link to="/events" className="btn-secondary min-w-[220px] text-center">
                  Explore the Nights
                </Link>
              </div>
            </motion.div>

            {/* Right floating info panel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 lg:justify-self-end w-full max-w-md"
            >
              <div className="border border-white/10 bg-black/20 backdrop-blur-md p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold">
                    House Notes
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.28em] text-stone/50">
                    Design District
                  </span>
                </div>

                <div className="space-y-6">
                  {heroMeta.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start justify-between gap-6 border-b border-white/5 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[10px] uppercase tracking-[0.28em] text-stone/60 font-bold">
                        {item.label}
                      </span>
                      <span className="text-sm text-ivory text-right font-light">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program / Events */}
      <section className="section-padding bg-midnight relative overflow-hidden">
        <div className="absolute top-20 left-0 text-[18vw] leading-none font-serif opacity-[0.04] pointer-events-none select-none">
          PROGRAM
        </div>

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left sticky intro */}
            <div className="lg:col-span-4 sticky top-32">
              <span className="text-gold font-bold uppercase text-[10px] tracking-[0.4em] mb-6 block">
                The Nights Ahead
              </span>

              <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
                A curated
                <br />
                <span className="italic text-gold">rhythm</span> of nights.
              </h2>

              <p className="text-stone text-lg leading-relaxed mt-8 mb-10 font-light opacity-80 max-w-md">
                A curated rhythm of nights, reservations, and after-hours energy in the
                heart of the Design District.
              </p>

              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] font-bold text-stone/60 mb-10">
                <span>Entry 01</span>
                <span className="w-8 h-px bg-white/10" />
                <span>House Program</span>
              </div>

              <Link to="/events" className="btn-secondary inline-block">
                View All Events
              </Link>
            </div>

            {/* Right sequence */}
            <div className="lg:col-span-8 space-y-16">
              {eventProgram.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end ${
                    i % 2 === 1 ? 'md:pl-12' : ''
                  }`}
                >
                  {/* connecting line */}
                  <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-white/10 to-transparent" />

                  {/* Number block */}
                  <div className="md:col-span-2 relative z-10">
                    <div className="text-gold/30 font-serif text-6xl md:text-7xl italic leading-none">
                      {event.number}
                    </div>
                    <div className="mt-4 text-[10px] uppercase tracking-[0.35em] text-stone/50 font-bold">
                      House Entry
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`md:col-span-4 overflow-hidden ${event.aspect} group`}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale-[0.45] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-6 border-t border-white/10 pt-6 md:pt-10">
                    <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">
                      {event.date}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-serif italic text-ivory mb-5">
                      {event.title}
                    </h3>
                    <p className="text-stone text-sm md:text-base font-light leading-relaxed max-w-lg opacity-80">
                      {event.desc}
                    </p>

                    <div className="pt-8 flex flex-wrap items-center gap-8">
                      <Link
                        to="/reservations"
                        className="text-ivory text-[10px] font-bold uppercase tracking-widest border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                      >
                        Reserve
                      </Link>
                      <Link
                        to="/events"
                        className="text-stone/60 text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservation ritual */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={cocoBackground}
            alt=""
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="absolute right-[-6%] top-[12%] text-[15vw] leading-none font-serif italic opacity-[0.04] pointer-events-none select-none">
          RITUAL
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative">
              <VerticalRitualCarousel images={ritualImages} />
            </div>

            <div className="lg:col-span-6 space-y-12 bg-charcoal/85">
              <div>
                <span className="text-gold font-bold uppercase text-[10px] tracking-[0.4em] mb-6 block">
                  The Scene
                </span>
                <h2 className="text-5xl md:text-6xl leading-[1.02] tracking-tight">
                  Reserve the night
                  <br />
                  <span className="italic text-gold">before</span> it begins.
                </h2>
                <p className="text-stone text-lg leading-relaxed font-light opacity-80 max-w-xl mt-8">
                  For guests who prefer the night to begin with intention.
                </p>
              </div>

              <div className="space-y-6">
                {experiencePoints.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-5 group">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-gold group-hover:border-gold transition-colors">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-ivory text-sm uppercase tracking-[0.18em] font-light">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col md:flex-row items-start gap-8">
                <Link to="/reservations" className="btn-primary inline-block">
                  Reserve Now
                </Link>

                <div className="opacity-0 p-8 border border-white/5 bg-midnight/40 max-w-sm min-w-[280px]">
                  <div className="flex items-center space-x-4 mb-5">
                    <Clock size={16} className="text-gold" />
                    <span className="text-ivory text-[10px] uppercase tracking-widest font-bold">
                      Operating Hours
                    </span>
                  </div>
                  <p className="text-stone text-xs leading-relaxed mb-4">
                    Open Wednesday, Friday & Saturday
                    <br />
                    12:00am – 5:00am
                  </p>
                  <div className="text-gold text-[9px] uppercase tracking-widest font-bold">
                    21+ with proper ID
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue identity */}
      <section className="section-padding bg-midnight overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="relative">
            <div className="absolute -top-10 left-0 text-[16vw] md:text-[10vw] font-serif leading-none tracking-[-0.06em] opacity-[0.07] pointer-events-none select-none">
              DESTINATION
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end relative z-10">
              <div className="lg:col-span-7">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={cocoOutside}
                    alt="Coco Miami exterior"
                    className="w-full h-full object-cover grayscale-[0.28]"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8 lg:-ml-12 pb-4">
                <span className="text-gold font-bold uppercase text-[10px] tracking-[0.4em] block">
                  House Setting
                </span>

                <h2 className="text-5xl md:text-6xl font-serif italic leading-tight text-ivory">
                  More than a venue.
                  <br />
                  A late-night <span className="text-gold">setting.</span>
                </h2>

                <p className="text-stone text-lg leading-relaxed font-light opacity-80 max-w-xl">
                  Coco Miami blends atmosphere, design, and after-hours energy into a
                  destination for nights that ask for more than a reservation link.
                </p>

                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="text-gold text-[10px] font-bold uppercase tracking-widest mb-3">
                      Location
                    </h4>
                    <p className="text-stone text-sm leading-relaxed">
                      Design District, Miami
                    </p>
                  </div>
                  <div>
                    <h4 className="text-gold text-[10px] font-bold uppercase tracking-widest mb-3">
                      Standards
                    </h4>
                    <p className="text-stone text-sm leading-relaxed">
                      Selective guest entry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private events sales section */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute left-[-3%] bottom-[8%] text-[14vw] font-serif italic leading-none opacity-[0.04] pointer-events-none select-none">
          PRIVATE
        </div>

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/5 bg-midnight">
            <div className="lg:col-span-7 p-10 md:p-14 lg:p-16">
              <span className="text-gold font-bold uppercase text-[10px] tracking-[0.4em] mb-8 block">
                Private Nights
              </span>

              <h2 className="text-5xl md:text-7xl leading-[1.02] tracking-tight mb-8">
                Host with
                <br />
                <span className="italic text-gold">intention.</span>
              </h2>

              <p className="text-stone text-lg leading-relaxed mb-10 font-light opacity-80 max-w-2xl">
                From private celebrations to brand activations, Coco Miami offers a
                late-night setting with atmosphere, flexibility, and presence.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {eventTags.map((tag, i) => (
                  <div
                    key={i}
                    className="px-5 py-3 border border-white/10 bg-white/5 text-ivory text-[10px] uppercase tracking-widest font-medium"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <Link to="/events" className="btn-primary inline-block">
                Inquire About Private Events
              </Link>
            </div>

            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/5 grid grid-cols-1">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden min-h-[320px]">
                <img
                  src={hostingEventImage}
                  alt="Private events"
                  className="w-full h-full object-cover grayscale-[0.18]"
                />
              </div>

              <div className="grid grid-cols-2 border-t border-white/5">
                <div className="p-6 md:p-8 border-r border-white/5">
                  <Users size={18} className="text-gold mb-4" />
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-3">
                    Capacity
                  </div>
                  <p className="text-stone text-sm leading-relaxed">
                    Up to 250 guests for full venue experiences.
                  </p>
                </div>
                <div className="p-6 md:p-8">
                  <GlassWater size={18} className="text-gold mb-4" />
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-3">
                    Venue Features
                  </div>
                  <p className="text-stone text-sm leading-relaxed">
                    Full-service bar, flexible layout, and private room access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Notes / In the Frame */}
      <section className="section-padding bg-midnight overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-gold font-bold uppercase text-[10px] tracking-[0.4em] mb-6 block">
                House Notes
              </span>

              <h2 className="text-5xl md:text-6xl font-serif italic leading-tight text-ivory">
                In the frame.
                <br />
                After the hour.
              </h2>

              <p className="text-stone text-base md:text-lg font-light leading-relaxed opacity-75 mt-8 max-w-md">
                Coco is shaped as much by atmosphere as by the people, textures, and
                late-night details that define it.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4 text-stone/70 text-sm">
                  <MapPin size={16} className="text-gold" />
                  <span>8 NE 41st St, Miami, FL</span>
                </div>
                <div className="flex items-center gap-4 text-stone/70 text-sm">
                  <ShieldCheck size={16} className="text-gold" />
                  <span>Strict dress-attire standards</span>
                </div>
                <div className="flex items-center gap-4 text-stone/70 text-sm">
                  <CalendarDays size={16} className="text-gold" />
                  <span>Reservations, events, and private nights</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {houseNotesImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden border border-white/5 bg-charcoal"
                  >
                    <img
                      src={image}
                      alt={`Coco Miami gallery image ${index + 1}`}
                      className="w-full h-full object-cover grayscale-[0.12] hover:grayscale-0 hover:scale-[1.04] transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Essentials */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={cocoBackground2}
            alt=""
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-gold font-bold uppercase text-[10px] tracking-[0.4em] mb-6 block">
                The Essentials
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.04] tracking-tight">
                Before
                <br />
                <span className="italic text-gold">you arrive.</span>
              </h2>
              <p className="text-stone text-base md:text-lg leading-relaxed font-light opacity-80 max-w-sm mt-8">
                A few essentials for a smoother arrival and a more elevated night.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-midnight/30 border border-white/5 p-8 md:p-9 cursor-pointer transition-all duration-500 hover:border-gold/20"
                >
                  <summary className="flex items-center justify-between font-serif text-xl md:text-2xl list-none tracking-wide text-ivory">
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-open:rotate-45 transition-transform">
                      <ArrowRight size={14} className="text-gold opacity-50" />
                    </div>
                  </summary>
                  <p className="mt-6 text-stone text-sm leading-relaxed font-light max-w-2xl">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mailing list */}
      <section className="relative py-36 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={cocoOutside}
            alt=""
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-midnight/60 z-10" />
        </div>

        <div className="relative z-20 max-w-3xl mx-auto px-6 text-center">
          <span className="text-gold font-bold uppercase text-[10px] tracking-[0.4em] mb-8 block">
            Stay Connected
          </span>

          <h2 className="text-5xl md:text-7xl leading-[1.04] tracking-tight">
            Stay in the know
            <br />
            <span className="italic text-gold">after dark.</span>
          </h2>

          <p className="text-stone text-lg leading-relaxed mt-8 mb-12 font-light opacity-80">
            Sign up for event updates, special nights, and what’s next at Coco Miami.
          </p>

          <form className="flex flex-col md:flex-row items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 px-8 py-4 text-ivory placeholder:text-stone/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button className="btn-primary w-full md:w-auto whitespace-nowrap">
              Join the List
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}