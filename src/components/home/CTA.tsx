import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-primary-navy flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/images/children-hero.png" 
          alt="Background" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-8 tracking-tight">
          Be Part of the Change.
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Your support can rewrite a child's story. Whether you donate, volunteer, or partner with us, you are making a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            to="/donate" 
            className="bg-primary-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all hover:scale-105 shadow-xl shadow-blue-900/50"
          >
            Donate Now
          </Link>
          <Link 
            to="/contact" 
            className="bg-white text-primary-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
