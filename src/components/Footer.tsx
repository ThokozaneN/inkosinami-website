import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display">INkosinami</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Restoring hope, one child at a time. We are a registered Non-Profit Organization dedicated to empowering vulnerable children.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary-blue transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/impact" className="hover:text-white transition-colors">Impact</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-primary-blue" />
                <span>123 Hope Street, Embalenhle, Mpumalanga</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary-blue" />
                <span>+27 72 863 1740</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-primary-blue" />
                <span>hello@inkosinami.org</span>
              </li>
            </ul>
          </div>

          {/* Legal / CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Make a Difference</h4>
            <p className="text-slate-300 text-sm mb-4">
              Your support changes lives. Every donation goes directly to feeding and educating a child.
            </p>
            <Link 
              to="/donate" 
              className="inline-block bg-primary-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors w-full text-center"
            >
              Donate Now
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} INkosinami Drop-In Center. All rights reserved.</p>
            <p className="mt-1">
              Developed by <a href="https://thokozane.co.za" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-blue transition-colors font-medium">Thokozane</a>
            </p>
          </div>
          <div className="flex gap-6">
            <span>NPO Reg: 123-456 NPO</span>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
