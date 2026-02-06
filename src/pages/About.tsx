import { Link } from 'react-router-dom';
import { Heart, Target, Eye, Users, Shield, Sparkles, MapPin, Calendar, Quote as QuoteIcon } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-[80vh] flex items-center overflow-hidden bg-primary-navy">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Children at INkosinami"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-32 md:pt-40">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-widest border border-white/10">
                <MapPin className="w-3 h-3 text-secondary-orange" />
                Mpumalanga, South Africa
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-widest border border-white/10">
                <Calendar className="w-3 h-3 text-secondary-orange" />
                Impact Since 2014
              </span>
            </div>
            
            <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1] tracking-tight">
              About <br />
              <span className="text-primary-blue">INKOSINAMI</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-blue-100/80 max-w-2xl font-medium leading-relaxed">
              A sanctuary of hope, education, and nutrition for orphaned and vulnerable children in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Strip */}
      <section className="relative z-20 -mt-10 md:-mt-14 container mx-auto px-4 md:px-6 mb-20 md:mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {[
            { number: '10+', label: 'Years Serving' },
            { number: '300+', label: 'Children Supported' },
            { number: '1000+', label: 'Meals Monthly' },
            { number: '8', label: 'NPO Registered' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 text-center shadow-2xl shadow-slate-200 border border-slate-100 hover:border-primary-blue/30 transition-all group">
              <div className="text-2xl md:text-4xl lg:text-5xl font-black text-primary-navy group-hover:text-primary-blue transition-colors tracking-tighter">{stat.number}</div>
              <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest mt-2 group-hover:text-slate-600 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Narrative */}
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/5 text-primary-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                Our Genesis
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-primary-navy mb-8 leading-tight tracking-tighter">
                Born From A <br />
                <span className="text-secondary-orange">Mother's Heart.</span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                <p>
                  <span className="text-primary-navy font-bold">INkosinami Drop-In Center</span> began with a simple observation that turned into a life-long calling. In 2016, Esther Phindile Kubeka saw local children struggling to learn because of the most basic of needs: hunger.
                </p>
                <p>
                  She began by cooking for a small group in her own kitchen. That spark of compassion has since evolved into a vital community institution supporting hundreds of children daily.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2">
                <img 
                  src="/images/outdoor-activities.jpeg"
                  alt="Children learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-6 md:-left-12 bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl max-w-sm border border-slate-100 transform -rotate-3">
                 <QuoteIcon className="text-primary-blue/30 w-10 h-10 mb-4" />
                 <p className="text-lg md:text-xl font-bold text-primary-navy leading-relaxed italic">
                   "Every child deserves a sanctuary where they are safe, fed, and loved."
                 </p>
                 <div className="mt-4 flex items-center gap-3">
                    <div className="h-0.5 w-8 bg-secondary-orange"></div>
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Esther Phindile Kubeka</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-slate-50 py-24 md:py-32 mb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-primary-blue text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                <Target size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-primary-navy mb-6 tracking-tighter uppercase">Our Mission</h3>
              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                To provide holistic care, quality education, and essential life skills to orphaned and vulnerable children, building a foundation for independent and thriving futures.
              </p>
            </div>

            <div className="bg-primary-navy rounded-[2.5rem] p-10 md:p-14 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-[80px] group-hover:bg-primary-blue/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl flex items-center justify-center mb-8">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter uppercase">Our Vision</h3>
                <p className="text-lg md:text-xl text-blue-100/70 font-medium leading-relaxed">
                  A community where every single child has access to adequate nutrition, comprehensive education, and limitless opportunity—regardless of their background.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-orange/5 text-secondary-orange text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            The INkosinami Way
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary-navy tracking-tighter leading-tight">
            Our Core <span className="text-primary-blue font-black italic">Values.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Heart size={28} />, label: "Compassion", color: "rose", desc: "Leading with kindness and understanding every child's unique journey." },
            { icon: <Shield size={28} />, label: "Integrity", color: "blue", desc: "Operating with absolute transparency and honoring community trust." },
            { icon: <Users size={28} />, label: "Community", color: "emerald", desc: "Believing that it takes a whole village to protect and raise a child." },
            { icon: <Sparkles size={28} />, label: "Empowerment", color: "amber", desc: "Providing the tools and confidence for children to own their futures." }
          ].map((v, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3 ${
                v.color === 'rose' ? 'bg-rose-500 text-white' :
                v.color === 'blue' ? 'bg-primary-blue text-white' :
                v.color === 'emerald' ? 'bg-emerald-500 text-white' :
                'bg-secondary-orange text-white'
              }`}>
                {v.icon}
              </div>
              <h4 className="text-2xl font-black text-primary-navy mb-4 tracking-tight uppercase">{v.label}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-primary-navy py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">
            BE PART OF THE <br />
            <span className="text-primary-blue">REGENERATION.</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100/60 mb-14 max-w-2xl mx-auto font-medium">
            Whether you donate, volunteer, or advocate—you are an essential part of this sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 px-4 md:px-0">
            <Link 
              to="/donate"
              className="bg-secondary-orange text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-xl shadow-orange-900/20"
            >
              Support Our Mission
            </Link>
            <Link 
              to="/contact"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-primary-navy transition-all hover:scale-105"
            >
              Join As A Volunteer
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
