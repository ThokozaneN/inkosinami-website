import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Copy, Heart, ShieldCheck, Gift, Coffee, BookOpen, ArrowRight, CheckCircle2, Info, Share2, DollarSign, UserPlus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Donate = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.donate-title', { y: 60, opacity: 0, duration: 1.2, ease: 'power4.out' });
      gsap.from('.donate-subtitle', { y: 30, opacity: 0, duration: 1.2, delay: 0.2, ease: 'power4.out' });
      
      // Impact Tiers reveal
      gsap.to('.impact-tier', {
        scrollTrigger: {
          trigger: '.impact-tiers-grid',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // Guide reveal
      gsap.to('.guide-step', {
        scrollTrigger: {
          trigger: '.donation-guide',
          start: 'top 80%',
        },
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary-navy text-white px-8 py-4 rounded-2xl shadow-2xl z-[200] font-black text-sm animate-bounce uppercase tracking-widest';
    toast.innerText = 'DETAILS COPIED';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  };

  const impactTiers = [
    {
      amount: "R50",
      label: "Provide",
      title: "Five Meals",
      desc: "Covers a full week of nutritious, cooked lunches for a child.",
      icon: <Coffee size={32} />,
      img: "/images/food-donations.jpeg",
    },
    {
      amount: "R150",
      label: "Support",
      title: "Academic Kit",
      desc: "Provides a full school uniform or a complete set of stationery for a term.",
      icon: <BookOpen size={32} />,
      img: "/images/books.jpeg",
    },
    {
      amount: "R350",
      label: "Empower",
      title: "Skill Workshop",
      desc: "Sponsors a child's participation in our specialized life-skills programs.",
      icon: <CheckCircle2 size={32} />,
      img: "/images/outdoor-activities.jpeg",
    },
    {
      amount: "Custom",
      label: "Transform",
      title: "General Fund",
      desc: "Enables organizational growth, staff training, and sanctuary maintenance.",
      icon: <DollarSign size={32} />,
      img: "/images/absa-visit.jpeg",
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Cinematic Hero */}
      <section className="relative pt-40 md:pt-52 pb-24 md:pb-40 overflow-hidden bg-secondary-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-primary-navy text-[10px] font-black tracking-[0.2em] uppercase mb-10">
              <Heart size={14} className="text-secondary-orange fill-secondary-orange" />
              Impact Partner
           </div>
           
           <h1 className="donate-title text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl font-black text-primary-navy leading-[0.9] tracking-tighter mb-10 uppercase">
             INVEST IN <br />
             <span className="text-primary-blue italic">PROMISE.</span>
           </h1>
           
           <p className="donate-subtitle text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mb-16">
             Your contribution is a seed of hope. We ensure 100% of public donations directly fund our programs and the children we serve.
           </p>

           <div className="flex flex-wrap justify-center gap-6">
              <a href="#bank-details" className="px-10 py-5 bg-primary-navy text-white font-black rounded-2xl hover:bg-primary-blue transition-all hover:scale-105 shadow-xl shadow-navy-900/20 uppercase tracking-widest text-sm">
                View EFT Details
              </a>
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                 <ShieldCheck className="text-emerald-500" size={24} />
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">NPO: 123-456</span>
              </div>
           </div>
        </div>
      </section>

      {/* Impact Tiers */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-7xl font-black text-primary-navy tracking-tighter uppercase mb-6 leading-none">CHOOSE YOUR <br /><span className="text-primary-blue">IMPACT.</span></h2>
             <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Transparent giving. See exactly what your contribution provides for our children.</p>
          </div>

          <div className="impact-tiers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactTiers.map((tier, idx) => (
              <div key={idx} className="impact-tier opacity-0 translate-y-12 group relative h-[500px] rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700">
                {/* Image background */}
                <div className="absolute inset-0">
                   <img src={tier.img} alt={tier.title} className="w-full h-full object-cover grayscale opacity-10 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-transparent group-hover:opacity-40 transition-all"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-12 flex flex-col justify-between">
                   <div className="space-y-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary-blue/5 text-primary-blue text-[10px] font-black uppercase tracking-widest">{tier.label}</span>
                      <h3 className="text-4xl font-black text-primary-navy tracking-tighter leading-none">{tier.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{tier.desc}</p>
                   </div>
                   
                   <div className="space-y-8">
                      <div className="text-5xl font-black text-primary-navy tracking-tighter">{tier.amount}</div>
                      <div className="w-16 h-16 rounded-[1.5rem] bg-primary-navy text-white flex items-center justify-center group-hover:bg-primary-blue group-hover:scale-110 transition-all shadow-xl">
                         {tier.icon}
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EFT Guide & Details */}
      <section id="bank-details" className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(59,130,246,0.05),transparent_60%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            <div className="lg:col-span-5 donation-guide space-y-16">
               <div>
                  <h2 className="text-5xl md:text-7xl font-black text-primary-navy uppercase tracking-tighter leading-[0.9] mb-10">HOW TO <br /><span className="text-primary-blue italic">GIVE.</span></h2>
                  <p className="text-xl text-slate-500 font-medium">Simple, secure, and direct. We currently process all donations via Electronic Funds Transfer (EFT).</p>
               </div>

               <div className="space-y-12">
                  {[
                    { step: "01", title: "Direct Transfer", desc: "Use the banking details provided to initiate a transfer from your banking portal." },
                    { step: "02", title: "Use Reference", desc: "Please use your full name or 'DONATION' as the reference for tracking." },
                    { step: "03", title: "Verify Receipt", desc: "Email donate@inkosinami.org to receive your Section 18A tax certificate." }
                  ].map((s, i) => (
                    <div key={i} className="guide-step opacity-0 -translate-x-10 flex gap-8">
                       <div className="text-5xl font-black text-primary-blue/10 pt-1 select-none">{s.step}</div>
                       <div>
                          <h3 className="text-2xl font-black text-primary-navy mb-2 uppercase tracking-tight">{s.title}</h3>
                          <p className="text-lg text-slate-500 font-medium leading-relaxed">{s.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl flex flex-col sm:flex-row gap-8 items-center">
                  <div className="w-20 h-20 bg-secondary-orange/10 rounded-[2rem] flex items-center justify-center shrink-0">
                     <Info size={40} className="text-secondary-orange" />
                  </div>
                  <div>
                     <h4 className="text-xl font-black text-primary-navy uppercase mb-2">Tax Benefits</h4>
                     <p className="text-slate-500 font-medium leading-relaxed">As a registered NPO, all contributions are fully tax-deductible under South African law.</p>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-7">
               <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-3xl border border-slate-100 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110"></div>
                  
                  <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-8 mb-16">
                     <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-4">
                           <CheckCircle2 size={12} />
                           Verified NPO Account
                        </div>
                        <h3 className="text-4xl font-black text-primary-navy uppercase tracking-tighter">Bank <br />Details.</h3>
                     </div>
                     <button onClick={() => copyToClipboard("1234567890")} className="flex items-center gap-3 px-6 py-4 bg-primary-blue/5 text-primary-blue rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary-blue hover:text-white transition-all">
                        <Share2 size={16} /> Share All
                     </button>
                  </div>

                  <div className="relative z-10 space-y-4">
                    {[
                      { label: "Bank Name", value: "Standard Bank" },
                      { label: "Account Holder", value: "INkosinami Drop-In Center" },
                      { label: "Account Number", value: "123 456 7890", copy: true },
                      { label: "Branch Code", value: "051001", copy: true },
                      { label: "Swift/BIC", value: "SBZA ZAJJ", copy: true }
                    ].map((d, i) => (
                      <div key={i} className="group/item flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2 md:mb-0">{d.label}</span>
                         <div className="flex items-center gap-6 w-full md:w-auto">
                            <span className="text-xl md:text-2xl font-black text-primary-navy tracking-tight">{d.value}</span>
                            {d.copy && (
                              <button onClick={() => copyToClipboard(d.value)} className="p-2 text-slate-300 hover:text-primary-blue transition-colors ml-auto md:ml-0">
                                <Copy size={20} />
                              </button>
                            )}
                         </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10 mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-primary-navy text-white flex items-center justify-center font-black text-xl">INK</div>
                        <div>
                           <p className="font-black text-primary-navy uppercase text-sm">INkosinami NPO</p>
                           <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Est. 2014</p>
                        </div>
                     </div>
                     <p className="text-center md:text-right text-xs font-black text-slate-300 uppercase tracking-widest max-w-[200px]">Thank you for your life-changing support.</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Alternative Giving */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-primary-navy rounded-[4rem] p-10 md:p-24 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 C 20 0 50 0 100 100" stroke="white" fill="transparent" strokeWidth="0.2" />
                  <path d="M0 100 C 50 20 80 50 100 100" stroke="white" fill="transparent" strokeWidth="0.2" />
                </svg>
              </div>

              <div className="relative z-10 max-w-5xl">
                 <h2 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter leading-none uppercase">OTHER WAYS <br />TO <span className="text-primary-blue italic">HELP.</span></h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    <div className="space-y-8">
                       <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 flex items-center justify-center">
                          <Gift size={32} className="text-secondary-orange" />
                       </div>
                       <h3 className="text-3xl font-black uppercase tracking-tight">In-Kind Donations</h3>
                       <p className="text-blue-100/60 text-lg md:text-xl font-medium leading-relaxed">We gratefully accept dry food items, stationery, clothing, and blankets. Contact our logistics team to coordinate a drop-off.</p>
                       <Link to="/contact" className="inline-flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest group">
                          LOGISTICS CHANNEL <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                       </Link>
                    </div>

                    <div className="space-y-8">
                       <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 flex items-center justify-center">
                          <UserPlus size={32} className="text-primary-blue" />
                       </div>
                       <h3 className="text-3xl font-black uppercase tracking-tight">Volunteer Time</h3>
                       <p className="text-blue-100/60 text-lg md:text-xl font-medium leading-relaxed">Whether you're an educator, builder, or mentor—your presence is priceless. Join our dedicated community of change-makers.</p>
                       <Link to="/contact" className="inline-flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest group">
                          VIEW OPPORTUNITIES <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 md:py-40 bg-white border-t border-slate-50">
         <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-12">
               <div className="w-24 h-24 bg-secondary-orange/5 rounded-full flex items-center justify-center mx-auto">
                  <Heart size={40} className="text-secondary-orange fill-secondary-orange animate-pulse" />
               </div>
               <h2 className="text-3xl md:text-6xl font-black text-primary-navy tracking-tighter uppercase italic leading-[0.9]">
                 "Individually, we are one drop. <br /> Together, we are an <span className="text-primary-blue">ocean.</span>"
               </h2>
               <p className="text-xs font-black text-slate-300 uppercase tracking-[0.4em]">Every contribution transforms a legacy.</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Donate;
