import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import cocoLogo from '../assets/COCOLOGO.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-midnight/80 backdrop-blur-xl py-4 border-b border-white/5'
          : 'bg-transparent py-7 md:py-8'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          to="/"
          className="relative z-50 flex items-center"
          aria-label="Coco Miami Home"
        >
          <img
            src={cocoLogo}
            alt="Coco Miami"
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? 'h-10 md:h-11' : 'h-12 md:h-14'
            }`}
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-12">
          <div className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name + link.path}
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:text-gold ${
                  location.pathname === link.path ? 'text-gold' : 'text-ivory/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-4 w-px bg-white/10 mx-2" />

          <div className="flex items-center space-x-8">
            <a
              href="https://www.instagram.com/cocomiami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/50 hover:text-gold transition-colors"
              aria-label="Follow Coco Miami on Instagram"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>

            <a
              href="https://www.sevenrooms.com/events/cocomiami"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold/40 hover:border-gold bg-transparent hover:bg-gold text-gold hover:text-midnight px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 inline-flex items-center justify-center"
            >
              Reserve Now
            </a>
          </div>
        </div>

        <div className="flex lg:hidden items-center space-x-5">
          <a
            href="https://www.sevenrooms.com/events/cocomiami"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] font-bold uppercase tracking-[0.22em] text-gold border-b border-gold/30 pb-1"
          >
            Reserve
          </a>

          <button
            type="button"
            className="relative z-50 text-ivory p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden fixed inset-0 bg-midnight z-40"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,164,106,0.10),transparent_35%)] pointer-events-none" />

            <div className="h-full flex flex-col justify-between px-6 pt-28 pb-10">
              <div className="flex flex-col items-center text-center">
                <span className="text-gold text-[10px] uppercase tracking-[0.45em] font-bold mb-10">
                  Miami After Midnight
                </span>

                <div className="flex flex-col space-y-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name + link.path}
                      to={link.path}
                      className={`text-3xl font-serif italic tracking-[0.05em] transition-colors ${
                        location.pathname === link.path ? 'text-gold' : 'text-ivory'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-sm mx-auto flex flex-col items-center space-y-6">
                <a
                  href="https://www.sevenrooms.com/events/cocomiami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold text-gold hover:bg-gold hover:text-midnight px-12 py-4 text-center font-bold uppercase tracking-[0.2em] w-full transition-all duration-500"
                >
                  Reserve Now
                </a>

                <a
                  href="https://www.instagram.com/cocomiami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold flex items-center space-x-3"
                  aria-label="Follow Coco Miami on Instagram"
                >
                  <Instagram size={20} />
                  <span className="text-[10px] uppercase tracking-widest">Follow Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}