import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import cocoLogo from '../assets/COCOLOGO.png';

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link
            to="/"
            className="inline-flex items-center mb-6"
            aria-label="Coco Miami Home"
          >
            <img
              src={cocoLogo}
              alt="Coco Miami"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="text-stone text-sm leading-relaxed mb-8 max-w-xs">
            An elevated late-night experience in the heart of Miami. Sensual, selective, and visually composed.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/cocomiami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone hover:text-gold transition-colors"
              aria-label="Follow Coco Miami on Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-ivory font-serif text-lg mb-8 tracking-wide">Explore</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-stone hover:text-gold text-[13px] uppercase tracking-widest transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="text-stone hover:text-gold text-[13px] uppercase tracking-widest transition-colors">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-stone hover:text-gold text-[13px] uppercase tracking-widest transition-colors">
                Private Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-stone hover:text-gold text-[13px] uppercase tracking-widest transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-ivory font-serif text-lg mb-8 tracking-wide">Contact</h4>
          <ul className="space-y-6">
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-gold shrink-0 mt-1" />
              <span className="text-stone text-[13px] leading-relaxed">
                8 NE 41st St,
                <br />
                Miami, FL 33137
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-gold shrink-0" />
              <span className="text-stone text-[13px]">(786) 389-6789</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-gold shrink-0" />
              <span className="text-stone text-[13px]">Info@coco.miami</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-ivory font-serif text-lg mb-8 tracking-wide">Newsletter</h4>
          <p className="text-stone text-[13px] mb-6 leading-relaxed">
            Join our inner circle for exclusive updates and event access.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-charcoal border border-white/5 rounded-sm px-4 py-3 text-sm text-ivory placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors"
            />
            <button className="bg-ivory text-midnight font-bold py-3 rounded-sm text-[11px] uppercase tracking-[0.2em] hover:bg-gold transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-stone text-[10px] uppercase tracking-[0.3em]">
        <p>© 2026 COCO MIAMI. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-ivory transition-colors">Privacy</a>
          <a href="#" className="hover:text-ivory transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}