import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, BookOpen, HeartHandshake, Calendar, Check, Clock, Star, Sparkles, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const programs = [
    {
      id: "meals",
      icon: <Utensils className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Cooked Meals Program",
      subtitle: "Nutritional Foundation",
      description: "Hunger is the primary barrier to development. Every single day, we prepare and serve warm, balanced meals to ensure no child in Embalenhle is left with an empty stomach.",
      features: [
        "Daily nutritious breakfast & lunch",
        "Locally-sourced ingredients",
        "Weekend meal support packs",
        "Health & nutrition monitoring"
      ],
      stats: { number: "1,000+", label: "Meals Monthly" },
      image: "/images/food-preparation.jpeg",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-500",
      iconColor: "text-orange-600",
    },
    {
      id: "homework",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Homework Assistance",
      subtitle: "Academic Excellence",
      description: "We provide the quiet space and resources that many children lack at home. Dedicated mentors assist with schoolwork, reading literacy, and exam preparation to ensure academic success.",
      features: [
        "One-on-one guided tutoring",
        "Safe, quiet study sanctuary",
        "Literacy & numeracy focus",
        "Exam preparation support"
      ],
      stats: { number: "85%", label: "Grade Improvement" },
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-primary-blue",
      iconColor: "text-blue-600",
    },
    {
      id: "skills",
      icon: <HeartHandshake className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Life Skills Workshops",
      subtitle: "Building Resilience",
      description: "True empowerment goes beyond books. We teach essential skills including hygiene, safety, emotional intelligence, and leadership, preparing our children for the challenges of adult life.",
      features: [
        "Personal hygiene education",
        "Emotional wellness workshops",
        "Leadership development",
        "Conflict resolution training"
      ],
      stats: { number: "300+", label: "Children Trained" },
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-500",
      iconColor: "text-emerald-600",
    },
    {
      id: "holiday",
      icon: <Calendar className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Holiday Programs",
      subtitle: "Engagement & Safety",
      description: "When schools close, the vulnerability of children increases. Our holiday programs provide a safe haven filled with sports, arts, and educational fun, keeping children fed and supervised.",
      features: [
        "Structured sports activities",
        "Creative arts & crafts",
        "Educational excursions",
        "Supervised community play"
      ],
      stats: { number: "4", label: "Major Annual Events" },
      image: "/images/spur-visit.jpg",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      iconBg: "bg-violet-500",
      iconColor: "text-violet-600",
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (heroRef.current) {
        gsap.from('.hero-badge', { opacity: 0, y: 20, duration: 0.8 });
        gsap.from('.hero-title', { opacity: 0, y: 40, duration: 1, delay: 0.2 });
        gsap.from('.hero-nav-item', { opacity: 0, scale: 0.9, duration: 0.5, stagger: 0.1, delay: 0.5 });
      }

      // Program sections
      const sections = gsap.utils.toArray('.program-section') as HTMLElement[];
      sections.forEach((section) => {
        gsap.from(section.querySelector('.section-image'), {
          opacity: 0,
          scale: 1.1,
          duration: 1.2,
          scrollTrigger: { trigger: section, start: "top 75%" }
        });
        gsap.from(section.querySelector('.section-content'), {
          opacity: 0,
          y: 40,
          duration: 1,
          scrollTrigger: { trigger: section, start: "top 75%" }
        });
      });

      // Stats
      if (statsRef.current) {
        gsap.from('.stat-box', {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: { trigger: statsRef.current, start: "top 80%" }
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-40 md:pt-52 pb-24 md:pb-32 overflow-hidden bg-primary-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-blue text-[10px] font-black uppercase tracking-[0.2em] mb-10">
            <Sparkles size={14} className="text-secondary-orange" />
            Holistic Empowerment
          </div>
          
          <h1 className="hero-title text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            PROGRAMS THAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-secondary-orange italic">TRANSFORM.</span>
          </h1>
          
          <p className="hero-title text-xl md:text-2xl text-blue-100/60 max-w-3xl mx-auto font-medium mb-20">
            Addressing the complex needs of vulnerable children through structured care, dedicated mentorship, and unwavering support.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {programs.map((p, i) => (
              <a key={i} href={`#${p.id}`} className="hero-nav-item group bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-all">
                <div className={`w-14 h-14 rounded-2xl ${p.bgColor.replace('bg-', 'bg-')} flex items-center justify-center mx-auto mb-6 text-primary-navy group-hover:scale-110 transition-transform`}>
                  {p.icon}
                </div>
                <span className="block text-white font-black text-sm uppercase tracking-widest">{p.title.split(' ')[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section ref={programsRef} className="py-24 md:py-32 space-y-32 md:space-y-48">
        {programs.map((program, index) => (
          <div key={program.id} id={program.id} className="program-section container mx-auto px-6">
            <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
              
              {/* Image side */}
              <div className="section-image w-full lg:w-1/2">
                <div className="relative">
                  <div className={`absolute -inset-4 md:-inset-6 bg-gradient-to-br ${program.color} opacity-10 rounded-[3rem] transform ${index % 2 === 1 ? '-rotate-3' : 'rotate-3'}`}></div>
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-xl max-w-[200px]">
                      <div className="text-3xl font-black text-primary-navy tracking-tighter">{program.stats.number}</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{program.stats.label}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="section-content w-full lg:w-1/2 space-y-8">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${program.bgColor} ${program.iconColor} text-[10px] font-black uppercase tracking-widest`}>
                  <Award size={14} />
                  {program.subtitle}
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-primary-navy tracking-tighter leading-tight">
                  {program.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                  {program.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {program.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className={`w-8 h-8 rounded-full ${program.bgColor} ${program.iconColor} flex items-center justify-center shrink-0`}>
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="font-bold text-primary-navy text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/donate" className={`px-8 py-4 bg-gradient-to-r ${program.color} text-white font-black rounded-2xl shadow-xl hover:scale-105 transition-all text-center`}>
                    Support This Program
                  </Link>
                  <Link to="/contact" className="px-8 py-4 bg-white text-primary-navy border-2 border-slate-100 font-black rounded-2xl hover:bg-slate-50 transition-all text-center">
                    Get Involved
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Daily Routine Timeline */}
      <section ref={timelineRef} className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-primary-navy tracking-tighter leading-tight mb-6">
              A DAY AT <span className="text-secondary-orange">INKOSINAMI.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Consistency is key to development. Our daily routine ensures every child has structure, nutrition, and guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { time: "08:00 AM", title: "Morning Welcome", desc: "Children arrive to a warm greeting and physical wellness check.", icon: <Clock /> },
              { time: "09:00 AM", title: "Nutrition Time", desc: "A healthy, warm breakfast to fuel bodies and minds for the day.", icon: <Utensils /> },
              { time: "02:00 PM", title: "Learning Hub", desc: "Interactive tutoring, homework help, and academic enrichment.", icon: <BookOpen /> },
              { time: "04:30 PM", title: "Life Guidance", desc: "Mentorship sessions and life skills workshops before home departure.", icon: <Star /> }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-primary-blue/20 transition-all group">
                <div className="inline-block px-3 py-1 rounded-full bg-primary-blue/5 text-primary-blue text-[10px] font-black tracking-widest uppercase mb-6">
                   {step.time}
                </div>
                <h3 className="text-2xl font-black text-primary-navy mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">{step.desc}</p>
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:text-primary-blue group-hover:bg-primary-blue/10 transition-all">
                   {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact CTA */}
      <section ref={statsRef} className="py-24 md:py-32 bg-primary-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(245,158,11,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                YOUR IMPACT <br />
                <span className="text-secondary-orange">VISUALIZED.</span>
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="stat-box">
                  <div className="text-4xl md:text-6xl font-black text-primary-blue tracking-tighter">30,000+</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Annual Meals</div>
                </div>
                <div className="stat-box">
                  <div className="text-4xl md:text-6xl font-black text-primary-blue tracking-tighter">85%</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Pass Rates</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3.5rem] space-y-8">
              <Sparkles className="text-secondary-orange w-12 h-12" />
              <h3 className="text-3xl font-black text-white tracking-tight">Sponsor a program segment today.</h3>
              <p className="text-blue-100/60 text-lg md:text-xl font-medium leading-relaxed">
                Choose a program that resonates with you and help us sustain its impact. Every contribution directly funds staff, supplies, and sanctuary maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link to="/donate" className="px-10 py-5 bg-primary-blue text-white font-black rounded-2xl hover:bg-blue-600 transition-all text-center">
                  Sponsor Program
                </Link>
                <Link to="/contact" className="px-10 py-5 bg-white/10 text-white font-black rounded-2xl hover:bg-white/20 transition-all text-center">
                  Volunteer Time
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
