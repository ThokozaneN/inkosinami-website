import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();

    // Intro Animation
    tl.from(".hero-badge", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2
    })
    .from(".hero-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    }, "-=0.4")
    .from(".hero-tags", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.6")
    .from(".hero-btn", {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)"
    }, "-=0.5");

    // Scroll Parallax Effect
    gsap.to(bgImageRef.current, {
      yPercent: 20,
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative h-[90vh] md:h-screen min-h-[650px] w-full overflow-hidden flex items-center justify-center">
      {/* Background with Overlay */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="/images/children-hero.png" 
          alt="Children smiling" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-navy/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/40 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-5xl pt-20 md:pt-0">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-10 text-primary-blue shadow-xl">
           <Heart size={14} className="fill-primary-blue" />
           Serving Embalenhle Since 2016
        </div>

        <h1 className="hero-title text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl font-black font-display leading-[1.05] mb-8 md:mb-10 tracking-tight">
          Restoring Hope, <br/>
          <span className="text-primary-blue inline-block mt-2">One Child at a Time.</span>
        </h1>
        
        <div className="hero-tags flex flex-wrap justify-center gap-3 md:gap-5 mb-10 md:mb-14">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold text-white/90 flex items-center gap-2 hover:bg-white/15 transition-all cursor-default shadow-lg">
            <MapPin size={16} className="text-secondary-orange" />
            Embalenhle, Mpumalanga
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold text-white/90 flex items-center gap-2 hover:bg-white/15 transition-all cursor-default shadow-lg">
            <ShieldCheck size={16} className="text-secondary-orange" />
            NPO: 205-757
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center px-4 md:px-0">
          <Link 
            to="/donate" 
            className="hero-btn group bg-primary-blue text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-full font-black text-base md:text-lg hover:bg-blue-600 transition-all hover:scale-[1.03] flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/30"
          >
            Donate Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/contact" 
            className="hero-btn bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-full font-black text-base md:text-lg hover:bg-white/20 transition-all hover:scale-[1.03] text-center"
          >
            Become a Volunteer
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

const Heart = ({ size, className }: { size: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export default Hero;
