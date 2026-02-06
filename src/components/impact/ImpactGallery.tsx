import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
    alt: "Children smiling"
  },
  {
    url: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2080&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    alt: "Community gathering"
  },
  {
    url: "https://images.unsplash.com/photo-1542810634-71277d95dc24?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    alt: "Reading time"
  },
  {
    url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1931&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    alt: "Helping hands"
  },
  {
    url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
    alt: "Learning together"
  },
  {
    url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
    alt: "Cooked meals"
  }
];

const ImpactGallery = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.gallery-item') as Element[];
    
    ScrollTrigger.batch(items, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          overwrite: true
        });
      },
      start: "top 85%",
      once: true
    });
  }, { scope: container });

  return (
    <section className="py-24 bg-secondary-cream" ref={container}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-navy mb-4">
            Visual Proof of Hope
          </h2>
          <p className="text-slate-600">
            A glimpse into the daily lives we touch and the smiles we nurture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`gallery-item relative rounded-2xl overflow-hidden shadow-sm opacity-0 translate-y-8 ${img.className}`}
            >
              <img 
                src={img.url} 
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGallery;
