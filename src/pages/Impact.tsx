import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, 
  Utensils, 
  BookOpen, 
  Calendar,
  Award,
  Quote,
  ArrowRight,
  Target,
  Rocket,
  TrendingUp
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Title Animation
      gsap.from('.impact-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.1
      });

      // Stats reveal
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 85%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // Counter animation
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.to(stat, {
          innerText: target,
          duration: 2.5,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: stat,
            start: 'top 90%',
            once: true
          },
          onUpdate: function() {
             const current = Math.ceil(Number(this.targets()[0].innerText));
             stat.innerHTML = current.toLocaleString();
          }
        });
      });

      // Area cards
      const areaCards = document.querySelectorAll('.area-card');
      if (areaCards.length > 0) {
        gsap.set(areaCards, { opacity: 0, y: 30 }); // Set initial state immediately
        
        ScrollTrigger.batch('.area-card', {
          start: 'top 85%',
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.15,
              duration: 0.8,
              ease: 'power3.out',
              overwrite: true
            });
          },
          once: true 
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const impactStats = [
    { number: 10, suffix: '+', label: 'Years of Service', icon: Calendar, color: 'blue' },
    { number: 300, suffix: '+', label: 'Children Supported', icon: Users, color: 'emerald' },
    { number: 1000, suffix: '+', label: 'Meals Served Monthly', icon: Utensils, color: 'orange' },
    { number: 8, suffix: ' Years', label: 'Registered NPO', icon: Award, color: 'violet' },
  ];

  const impactAreas = [
    {
      title: 'Nutritional Support',
      description: 'Combating food insecurity with daily nutritious meals, allowing children to focus on growth.',
      icon: Utensils,
      stats: '30,000+ meals annually',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
    },
    {
      title: 'Educational Excellence',
      description: 'Dedicated mentorship that has led to a documented improvement in school grade outcomes.',
      icon: BookOpen,
      stats: '85% grade improvement',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
    },
    {
      title: 'Life Skills',
      description: 'Comprehensive development workshops teaching everything from hygiene to leadership.',
      icon: Rocket,
      stats: '50+ workshops yearly',
      color: 'bg-emerald-500',
      lightColor: 'bg-emerald-50',
    },
    {
      title: 'Safe Sanctuary',
      description: 'Providing a protective environment where children find belonging and peace.',
      icon: Target,
      stats: '1 loving community',
      color: 'bg-rose-500',
      lightColor: 'bg-rose-50',
    },
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative pt-40 md:pt-52 pb-24 md:pb-40 overflow-hidden bg-primary-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-blue text-[10px] font-black uppercase tracking-[0.2em] mb-10">
              <TrendingUp size={14} className="text-secondary-orange" />
              Decade of Impact
            </div>
            
            <h1 className="impact-title text-[2.75rem] sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10">
              MEASURABLE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-blue-400 to-primary-blue italic">CHANGE.</span>
            </h1>
            
            <p className="impact-title text-xl md:text-3xl text-blue-100/60 max-w-3xl font-medium leading-tight">
              Evidence of hope. From daily nutrition to long-term academic success, we track every milestone of progress.
            </p>
          </div>
        </div>
      </section>

      {/* Main Stats Grid */}
      <section className="relative z-20 -mt-20 container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stats-grid">
          {impactStats.map((stat, i) => (
            <div key={i} className="stat-card bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col items-center sm:items-start text-center sm:text-left group hover:-translate-y-2 transition-transform duration-500">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg ${
                stat.color === 'blue' ? 'bg-primary-blue text-white' :
                stat.color === 'emerald' ? 'bg-emerald-500 text-white' :
                stat.color === 'orange' ? 'bg-secondary-orange text-white' :
                'bg-violet-500 text-white'
              }`}>
                <stat.icon size={28} />
              </div>
              <div className="text-5xl md:text-6xl font-black text-primary-navy tracking-tighter mb-3">
                <span className="stat-number" data-target={stat.number}>0</span>
                {stat.suffix}
              </div>
              <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Areas */}
      <section className="container mx-auto px-6 mb-40">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-end mb-20">
          <div className="lg:w-2/3">
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-navy tracking-tighter leading-tight mb-8">
               WHERE THE <br />
               <span className="text-primary-blue">MAGIC</span> HAPPENS.
             </h2>
             <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
               Impact isn't just about numbers—it's about transformed lives. We focus our resources where they create the most sustainable change.
             </p>
          </div>
          <div className="lg:w-1/3 hidden lg:block pb-4">
             <div className="w-full h-px bg-slate-200"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 areas-grid">
           {impactAreas.map((area, i) => (
             <div key={i} className="area-card bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6 mb-8 md:mb-10">
                 <div className={`${area.color} w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shrink-0`}>
                   <area.icon size={28} className="md:w-8 md:h-8" />
                 </div>
                 <div>
                    <h3 className="text-xl md:text-3xl font-black text-primary-navy tracking-tight leading-tight">{area.title}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full ${area.lightColor} text-primary-navy/70 text-[10px] font-bold uppercase tracking-widest mt-2`}>
                      {area.stats}
                    </div>
                 </div>
               </div>
               <p className="text-base md:text-xl text-slate-500 font-medium leading-relaxed mb-8 md:mb-10 flex-grow">
                 {area.description}
               </p>
               <div className="flex items-center gap-2 text-primary-blue font-black text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all mt-auto">
                  LEARN MORE <ArrowRight size={16} />
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* Community Voices */}
      <section className="bg-slate-50 py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
             <h2 className="text-4xl md:text-7xl font-black text-primary-navy tracking-tighter mb-8 leading-[0.9]">
               VOICES FROM THE <br />
               <span className="text-secondary-orange">GROUND.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { author: "Thandi M.", role: "Parent", quote: "INkosinami has been a blessing. My kids come home happy, fed, and excited about learning." },
              { author: "Sipho K.", role: "Student", quote: "Now I have people who believe in me and help me study. My grades have improved so much!" },
              { author: "Sarah P.", role: "Volunteer", quote: "The children's resilience and joy are truly inspiring. This is where real change happens." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
                <div>
                  <Quote className="text-primary-blue/20 w-12 h-12 mb-8 group-hover:text-primary-blue transition-colors" />
                  <p className="text-xl font-bold text-primary-navy leading-relaxed mb-12 italic">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                   <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-black text-primary-navy text-sm uppercase">{t.author[0]}</div>
                   <div>
                      <h4 className="font-black text-primary-navy text-sm uppercase">{t.author}</h4>
                      <p className="text-xs font-black text-slate-400 tracking-widest uppercase">{t.role}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-primary-navy tracking-tighter text-center mb-16">
            MOMENTS OF <span className="text-secondary-orange">IMPACT.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { src: "/images/children-hero.png", alt: "Children at INkosinami", caption: "Our Community" },
               { src: "/images/playtime.jpg", alt: "Playtime activities", caption: "Joy & Play" },
               { src: "/images/outdoor-activities.jpeg", alt: "Outdoor activities", caption: "Active Learning" },
               { src: "/images/absa-visit.jpeg", alt: "Absa corporate visit", caption: "Partnerships" },
               { src: "/images/spur-visit.jpg", alt: "Spur restaurant visit", caption: "Special Treats" },
               { src: "/images/center.jpg", alt: "Our center", caption: "Our Home" },
               { src: "/images/mall-visit.jpeg", alt: "Mall outing", caption: "Field Trips" },
               { src: "/images/debonairs-visit.jpg", alt: "Debonairs visit", caption: "Community Love" },
             ].map((image, i) => (
               <div key={i} className={`relative overflow-hidden rounded-[2rem] aspect-square group cursor-pointer ${
                 i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''
               }`}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-primary-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                     <span className="text-white font-black text-xs md:text-sm tracking-[0.2em] uppercase">{image.caption}</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary-navy py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-tight">
                WRITE THE NEXT <br />
                <span className="text-primary-blue font-black italic">CHAPTER.</span>
              </h2>
              <p className="text-xl md:text-3xl text-blue-100/60 mb-14 font-medium leading-tight">
                Your support sustain these outcomes. Every contribution ensures our doors stay open and our plates stay full.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
                <Link to="/donate" className="bg-secondary-orange text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-xl shadow-orange-900/20">
                  Fund A Program
                </Link>
                <Link to="/contact" className="bg-white text-primary-navy px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all hover:scale-105">
                  Volunteer Time
                </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
