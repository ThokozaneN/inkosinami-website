import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Utensils, BookOpen, HeartHandshake, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to('.bento-card', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
      }
    });
  }, { scope: containerRef });

  const programs = [
    {
      icon: <Utensils className="text-white drop-shadow-lg w-10 h-10 md:w-12 md:h-12" />,
      title: "Cooked Meals Program",
      description: "Providing nutritious daily meals to children who might otherwise go hungry. Our kitchen is the heart of INkosinami.",
      color: "bg-gradient-to-br from-secondary-orange/90 to-secondary-orange",
      bgColor: "bg-white/95 backdrop-blur-sm border border-orange-100/50",
      link: "/programs#meals",
      grid: "md:col-span-2 md:row-span-2", // Large square (2x2)
      hue: "#F59E0B",
      pattern: "orange",
    },
    {
      icon: <BookOpen className="text-white drop-shadow-lg w-8 h-8 md:w-10 md:h-10" />,
      title: "Homework Assistance",
      description: "Academic support and a quiet space for children to complete their schoolwork with guided help.",
      color: "bg-gradient-to-br from-primary-blue/90 to-primary-blue",
      bgColor: "bg-white/95 backdrop-blur-sm border border-blue-100/50",
      link: "/programs#homework",
      grid: "md:col-span-1 md:row-span-1", 
      hue: "#3B82F6",
      pattern: "blue",
    },
    {
      icon: <HeartHandshake className="text-white drop-shadow-lg w-8 h-8 md:w-10 md:h-10" />,
      title: "Life Skills Programs",
      description: "Workshops on personal hygiene, safety, and emotional well-being to build lasting resilience.",
      color: "bg-gradient-to-br from-emerald-500/90 to-emerald-600",
      bgColor: "bg-white/95 backdrop-blur-sm border border-emerald-100/50",
      link: "/programs#skills",
      grid: "md:col-span-1 md:row-span-1", 
      hue: "#10B981",
      pattern: "emerald",
    },
    {
      icon: <Calendar className="text-white drop-shadow-lg w-8 h-8 md:w-10 md:h-10" />,
      title: "Holiday Programs",
      description: "Keeping children engaged, safe, and fed during school holidays with fun educational activities.",
      color: "bg-gradient-to-br from-violet-500/90 to-violet-600",
      bgColor: "bg-white/95 backdrop-blur-sm border border-violet-100/50",
      link: "/programs#holiday",
      grid: "md:col-span-2 md:row-span-1", // Bottom wide (2x1)
      hue: "#8B5CF6",
      pattern: "violet",
    }
  ];

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-secondary-cream relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/5 text-primary-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Empowerment Pillars
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-primary-navy mb-6 tracking-tighter leading-tight">
            Comprehensive <br />
            <span className="text-primary-blue">Care Programs.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            Holistic support designed to nurture the whole child—providing the physical, academic, and emotional foundation for a brighter future.
          </p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Link
              to={program.link}
              key={index}
              className={`bento-card opacity-0 translate-y-12 group ${program.grid} ${program.bgColor} p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 hover:shadow-primary-blue/10 transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden relative flex flex-col`}
            >
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.05]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23${program.hue.replace('#', '')}' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }} />
              
              {/* Content Holder */}
              <div className="relative z-10 h-full flex flex-col">
                <div className={`${program.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {program.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-black font-display text-primary-navy mb-4 tracking-tighter group-hover:text-primary-blue transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-grow text-base md:text-lg">
                  {program.description}
                </p>

                {/* Footer Interaction */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary-blue font-black text-sm uppercase tracking-widest">
                    <span>Explore</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                  </div>
                  
                  {/* Subtle index mark */}
                  <span className="text-slate-200 font-black text-3xl italic select-none">0{index + 1}</span>
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 bg-gradient-to-r ${program.color.replace('from-', 'from-').replace('to-', 'to-')}`} />
            </Link>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-20 text-center">
           <Link 
            to="/programs" 
            className="inline-flex items-center gap-4 text-primary-navy font-black text-base md:text-lg hover:text-primary-blue transition-colors group"
           >
             Discover All Programs 
             <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all">
                <ArrowRight size={20} />
             </div>
           </Link>
        </div>
      </div>
    </section>
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

export default Programs;
