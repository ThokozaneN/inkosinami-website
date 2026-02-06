import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const stats = gsap.utils.toArray('.stat-item');
    
    stats.forEach((stat: any) => {
      const counter = stat.querySelector('.counter');
      const targetValue = parseInt(counter.getAttribute('data-target'));
      
      gsap.to(counter, {
        innerText: targetValue,
        duration: 2.5,
        snap: { innerText: 1 },
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 90%",
          once: true
        },
        onUpdate: function() {
          const current = Math.ceil(this.targets()[0].innerText);
          counter.innerHTML = current + (counter.getAttribute('data-suffix') || '');
        }
      });

      gsap.from(stat, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 90%",
          once: true
        }
      });
    });
  }, { scope: containerRef });

  const statsData = [
    { value: 10, suffix: '+', label: "Years of Service" },
    { value: 1000, suffix: '+', label: "Meals Served" },
    { value: 300, suffix: '+', label: "Children Supported" },
    { value: 8, suffix: ' Years', label: "Registered NPO" },
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-primary-navy text-white relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12 md:gap-x-20">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item relative flex flex-col items-center sm:items-start group">
              {/* Background Accent */}
              <div className="absolute -left-6 top-0 w-1 h-full bg-primary-blue/30 rounded-full hidden sm:block"></div>
              
              <div className="text-5xl md:text-6xl lg:text-7xl font-black font-display text-primary-blue mb-4 tracking-tighter transition-all duration-500 group-hover:scale-105 origin-left">
                <span className="counter" data-target={stat.value} data-suffix={stat.suffix}>0</span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-blue-100/90 text-sm md:text-base font-black tracking-[0.2em] uppercase leading-relaxed text-center sm:text-left">
                  {stat.label}
                </p>
                <div className="w-10 h-1 bg-secondary-orange mt-4 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
