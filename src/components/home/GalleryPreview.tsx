import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GalleryPreview = () => {
  const images = [
    "/images/spur-visit.jpg",
    "/images/center.jpg",
    "/images/debonairs-visit.jpg",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-navy mb-4">Moments of Impact</h2>
            <p className="text-slate-600 max-w-xl">See the smiles, the learning, and the community we are building together.</p>
          </div>
          <Link to="/gallery" className="group flex items-center gap-2 text-primary-blue font-semibold hover:text-blue-700 transition-colors">
            View Full Gallery <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-navy/20 group-hover:bg-primary-navy/0 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
