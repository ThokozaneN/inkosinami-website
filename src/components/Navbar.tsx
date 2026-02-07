import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useGSAP(() => {
    // Initial entrance for desktop items
    gsap.from(".nav-item", {
      y: -10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
      clearProps: "all"
    });

    // Heartbeat animation
    gsap.to(".logo-heart", {
      scale: 1.2,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, { scope: containerRef });

  // Mobile menu GSAP animation
  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(mobileMenuRef.current, 
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.from(".mobile-nav-item", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.1
      });
    }
  }, [isOpen]);

  const isHome = location.pathname === '/';
  const logoTextColor = isHome && !scrolled ? 'text-white' : 'text-primary-navy';
  
  const navLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    const base = "text-sm font-semibold transition-all duration-300 relative py-2";
    const colors = scrolled 
      ? 'text-primary-navy hover:text-primary-blue' 
      : (isHome ? 'text-white/90 hover:text-white' : 'text-primary-navy hover:text-primary-blue');
    const activeLine = isActive ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current" : "";
    
    return `${base} ${colors} ${activeLine}`;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      ref={containerRef}
      className={`fixed z-[100] transition-all duration-700 ease-in-out ${
        scrolled 
          ? 'w-[94%] md:w-[85%] max-w-6xl top-4 left-1/2 -translate-x-1/2 rounded-3xl md:rounded-full bg-white/90 backdrop-blur-lg shadow-2xl border border-white/40 py-2 md:py-3 px-5 md:px-8' 
          : 'w-full top-0 py-6 md:py-8 bg-transparent px-6 md:px-12'
      }`}
    >
      <div className={`mx-auto flex justify-between items-center ${scrolled ? 'w-full' : 'container'}`}>
        <Link to="/" className="text-xl md:text-2xl font-bold text-primary-navy tracking-tight flex items-center group relative z-[101]">
           <Heart size={22} className="logo-heart fill-primary-blue text-primary-blue mr-2" />
           <span className={`font-display uppercase tracking-widest transition-all duration-700 ease-in-out overflow-hidden whitespace-nowrap ${
             scrolled ? 'max-w-0 opacity-0' : 'max-w-[200px] opacity-100'
           } ${!scrolled ? logoTextColor : ''}`}>
             INKOSINAMI
           </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-item ${navLinkClasses(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/donate"
            className="nav-item flex items-center gap-2 bg-primary-blue text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-blue-500/20 active:scale-95"
          >
            <span>Donate</span>
            <Heart size={14} className="fill-current" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-xl transition-all relative z-[101] ${
            scrolled 
              ? 'bg-primary-navy/5 text-primary-navy' 
              : (isHome ? 'bg-white/10 text-white backdrop-blur-sm' : 'bg-primary-navy/5 text-primary-navy')
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          ref={mobileMenuRef}
          className={`fixed inset-0 top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-xl md:hidden flex flex-col pt-32 px-8 gap-6 z-[100]`}
        >
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 px-2">Navigation</p>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`mobile-nav-item text-3xl font-black text-primary-navy py-3 px-2 rounded-2xl flex items-center justify-between group ${
                  location.pathname === link.path ? 'text-primary-blue' : ''
                }`}
              >
                {link.name}
                <ArrowRight size={20} className={`opacity-0 group-hover:opacity-100 transition-all ${location.pathname === link.path ? 'opacity-100' : ''}`} />
              </Link>
            ))}
          </div>
          
          <div className="mt-auto pb-12 flex flex-col gap-4">
             <Link 
              to="/donate"
              className="mobile-nav-item flex items-center justify-center gap-3 bg-primary-blue text-white px-8 py-5 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-200"
            >
              <span>Donate Now</span>
              <Heart size={20} className="fill-current" />
            </Link>
            
            <div className="mobile-nav-item flex justify-center gap-8 pt-4">
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">NPO: 205-757</span>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Est. 2016</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const ArrowRight = ({ size, className }: { size: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default Navbar;
