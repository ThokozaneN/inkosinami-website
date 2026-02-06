import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Founder = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        once: true
      }
    });

    tl.from(".founder-img-wrapper", {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .from(".founder-content > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-secondary-cream overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <div className="relative founder-img-wrapper lg:order-1 order-2">
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-[-2deg] border-8 border-white">
                <img 
                  src="/images/esther-phindile-kubeka.png" 
                  alt="Esther Phindile Kubeka" 
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Quote Card */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-xs md:max-w-sm border border-slate-100 transform rotate-2">
                <Quote className="text-primary-blue w-8 h-8 mb-4 opacity-50" />
                <p className="font-medium text-primary-navy text-lg leading-relaxed">
                  "We are not just feeding bodies; we are feeding the future of our community."
                </p>
                <div className="mt-4 flex items-center gap-3">
                   <div className="h-0.5 w-8 bg-primary-orange"></div>
                   <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Esther P. Kubeka</span>
                </div>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-primary-blue/10 rounded-[2.5rem] -z-10 transform rotate-[-4deg]"></div>
          </div>

          {/* Content Column */}
          <div className="founder-content lg:order-2 order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-primary-navy uppercase">Our Founder</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy mb-8 leading-[1.1] tracking-tight">
              A Heart for <br/>
              <span className="text-primary-blue">The Community.</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                For Esther Phindile Kubeka, INkosinami is more than an organization—it is a calling. Over 10 years ago, she saw children in her neighborhood going to bed hungry and knew she couldn't stand by and watch.
              </p>
              <p>
                What started in her own kitchen has blossomed into a sanctuary that provides meals, education, and safety to hundreds of vulnerable children. Her unwavering belief is that every child, no matter their circumstances, deserves love and a fair chance at life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about"
                className="group inline-flex items-center justify-center gap-2 bg-primary-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-blue transition-all duration-300 shadow-lg hover:shadow-primary-blue/25"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-4 px-6 py-4">
                 <div className="flex -space-x-3">
                    {[
                      "/images/me.jpg",
                      "/images/vol1.jpg",
                      "/images/vol2.jpg"
                    ].map((img, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={img} alt="Volunteer" className="w-full h-full object-cover" />
                      </div>
                    ))}
                 </div>
                 <div className="text-sm">
                    <p className="font-bold text-primary-navy">Join the mission</p>
                    <p className="text-slate-500">Become a volunteer</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
