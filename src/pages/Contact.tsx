import { useRef } from 'react';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, ArrowRight, ShieldCheck, Globe, HelpCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Title Animation
    gsap.from('.editorial-title', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      stagger: 0.1
    });

    // Bento Cards
    gsap.from('.bento-contact-card', {
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 85%'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-secondary-cream min-h-screen">
      {/* Editorial Hero Section */}
      <section className="pt-40 md:pt-52 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/5 text-primary-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <Globe size={14} />
                Connect with the sanctuary
              </div>
              
              <h1 className="editorial-title text-5xl md:text-8xl lg:text-9xl font-black text-primary-navy leading-[0.9] mb-10 tracking-tighter uppercase">
                LET'S START <br />
                <span className="text-primary-blue italic">TALKING.</span>
              </h1>
              
              <p className="editorial-title text-xl md:text-2xl text-slate-500 max-w-xl font-medium leading-relaxed mb-12">
                We believe in total transparency. Whether you want to partner, volunteer, or just learn more—our team is here.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/27728631740" className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-200">
                  <MessageSquare size={18} /> WhatsApp Chat
                </a>
                <a href="tel:+27728631740" className="flex items-center gap-3 px-8 py-4 bg-primary-navy text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all">
                  <Phone size={18} /> Call Directly
                </a>
              </div>
            </div>

            <div className="lg:w-1/3 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary-blue/5 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
                  <h3 className="text-2xl font-black text-primary-navy mb-8 flex items-center gap-2 tracking-tight uppercase">
                    <Clock className="text-primary-blue" size={24} />
                    Center Hours
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-slate-50">
                      <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Weekdays</span>
                      <span className="text-primary-navy font-black text-lg">08:00 — 16:30</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-slate-50">
                      <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Saturdays</span>
                      <span className="text-primary-navy font-black text-lg">09:00 — 13:00</span>
                    </div>
                    <div className="flex justify-between items-center py-4 text-rose-500">
                      <span className="font-bold text-xs uppercase tracking-widest">Sundays</span>
                      <span className="font-black text-lg underline decoration-2 underline-offset-8">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Contact Grid */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bento-grid">
            
            {/* Location */}
            <div className="bento-contact-card md:col-span-8 bg-secondary-cream p-10 md:p-16 rounded-[3rem] border border-slate-100 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mb-8">
                  <MapPin className="text-rose-500" size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-primary-navy mb-6 uppercase tracking-tighter leading-none">OUR <br /> LOCATION.</h3>
                <p className="text-slate-500 mb-8 text-lg md:text-xl font-medium leading-relaxed">
                  10743 Ampie Mayisa Street Ext 14, Embalenhle, <br />
                  Mpumalanga, South Africa, 2285
               </p>
                <a href="#map" className="inline-flex items-center gap-3 text-primary-blue font-black text-sm uppercase tracking-widest group">
                  Navigate <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
              <div className="md:w-1/2 h-full min-h-[300px] w-full bg-slate-200 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4604.859056368303!2d29.079782!3d-26.563519000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeb153b3f4e21fd%3A0x7472a3efc212a870!2s10743%20Ampie%20Mayisa%20Cres%2C%20Embalenhle%2C%202285!5e1!3m2!1sen!2sza!4v1770445186748!5m2!1sen!2sza"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            {/* Email Card */}
            <div className="bento-contact-card md:col-span-4 bg-primary-blue p-10 md:p-14 rounded-[3rem] text-white flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-10">
                  <Mail className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">EMAIL <br /> DIRECT.</h3>
                <p className="text-blue-100 text-lg font-medium mb-10 leading-relaxed">Dedicated support team monitors this 24/7.</p>
              </div>
              <a href="mailto:hello@inkosinami.org" className="relative z-10 text-xl md:text-2xl font-black break-words hover:underline underline-offset-8 transition-all">
                hello@inkosinami.org
              </a>
            </div>

            {/* Direct Call Card */}
            <div className="bento-contact-card md:col-span-12 bg-secondary-orange p-10 md:p-20 rounded-[4rem] text-white relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
               <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
                 <div className="max-w-xl text-center lg:text-left">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                      Urgent Support
                   </div>
                   <h3 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">HOTLINE.</h3>
                   <p className="text-orange-100 text-xl md:text-2xl font-medium leading-relaxed italic">"Because hope shouldn't have to wait."</p>
                 </div>
                 <a href="tel:+27728631740" className="px-12 py-6 bg-white text-secondary-orange rounded-[2rem] font-black text-3xl md:text-5xl shadow-2xl hover:scale-105 transition-all tracking-tighter">
                   072 863 1740
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Form */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/2">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h2 className="text-5xl md:text-8xl font-black text-primary-navy mb-8 uppercase tracking-tighter leading-[0.9]">
                    SEND A <br />
                    <span className="text-primary-blue italic">NOTE.</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-500 max-w-md font-medium leading-relaxed">
                    Have a specific partnership proposal or complex question? Our leadership team reviews every digital note.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { q: "Can I donate school supplies?", a: "Absolutely. We accept physical donations at the center daily." },
                    { q: "Do you offer tax certificates?", a: "Yes, as a registered NPO we issue Section 18A certificates." },
                    { q: "How can my company partner?", a: "Submit this form with 'Partnership' as the subject." }
                  ].map((faq, i) => (
                    <div key={i} className="flex gap-6 p-8 bg-secondary-cream rounded-[2.5rem] border border-slate-100">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                        <HelpCircle size={24} className="text-primary-blue" />
                      </div>
                      <div>
                        <h4 className="font-black text-primary-navy text-lg mb-2 uppercase tracking-tight">{faq.q}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-primary-navy p-10 md:p-20 rounded-[4rem] shadow-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/20 rounded-full blur-[80px]"></div>
                <form className="relative z-10 space-y-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="space-y-3 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300/50 group-focus-within:text-primary-blue transition-colors">First Name</label>
                      <input type="text" className="w-full pb-4 bg-transparent border-b-2 border-white/10 focus:border-primary-blue outline-none transition-all text-xl font-bold" placeholder="Esther" />
                    </div>
                    <div className="space-y-3 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300/50 group-focus-within:text-primary-blue transition-colors">Last Name</label>
                      <input type="text" className="w-full pb-4 bg-transparent border-b-2 border-white/10 focus:border-primary-blue outline-none transition-all text-xl font-bold" placeholder="Kubeka" />
                    </div>
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300/50 group-focus-within:text-primary-blue transition-colors">Email Address</label>
                    <input type="email" className="w-full pb-4 bg-transparent border-b-2 border-white/10 focus:border-primary-blue outline-none transition-all text-xl font-bold" placeholder="esther@inkosinami.org" />
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300/50 group-focus-within:text-primary-blue transition-colors">Your Message</label>
                    <textarea rows={4} className="w-full pb-4 bg-transparent border-b-2 border-white/10 focus:border-primary-blue outline-none transition-all text-xl font-bold resize-none" placeholder="Tell us how we can build together..." />
                  </div>

                  <button className="w-full py-8 bg-primary-blue text-white rounded-[2rem] font-black text-xl md:text-2xl uppercase tracking-tighter hover:bg-blue-600 transition-all shadow-2xl shadow-blue-900/40 flex items-center justify-center gap-6 group">
                    TRANSMIT NOTE
                    <Send className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section id="map" className="py-24 bg-white text-center">
         <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto space-y-10">
               <ShieldCheck size={64} className="mx-auto text-emerald-500 mb-4 opacity-20" />
               <h2 className="text-4xl md:text-6xl font-black text-primary-navy uppercase tracking-tighter">Verified Sanctuary.</h2>
               <p className="text-xl text-slate-500 font-medium">Located in eMbalenhle, Govan Mbeki Municipality. Visit us anytime during center hours.</p>
               <a href="https://maps.app.goo.gl/ahPBpxULVBiRb5EFA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-10 py-6 bg-secondary-cream text-primary-navy border-2 border-slate-200 rounded-full font-black text-xl hover:bg-white transition-all group">
                 <MapPin className="text-rose-500" />
                 START NAVIGATION
                 <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
