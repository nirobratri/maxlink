import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Shield, Cpu, Network, MapPin, Mail, Download, ArrowRight, CheckCircle2, GraduationCap, Lightbulb, Users, BarChart3, Star, Cloud, Code, Lock, Settings, Globe, Fingerprint, Printer, Video, Activity, LayoutGrid } from 'lucide-react';
import { cn } from '../lib/utils';

const slides = [
  {
    title: "Bangladesh’s FTTH Experts",
    subtitle: "Featuring the ML-X801HQ ONU",
    description: "High-performance fiber-to-the-home solutions for seamless connectivity.",
    image: "https://picsum.photos/seed/networking/1200/600",
    cta: "Explore FTTH"
  },
  {
    title: "Security & Access Control",
    subtitle: "Advanced IP Camera Systems",
    description: "Protecting your business with state-of-the-art surveillance technology.",
    image: "https://picsum.photos/seed/security/1200/600",
    cta: "View Security"
  }
];

const products = [
  { 
    id: 1, 
    name: "ONU / OLT", 
    spec: "SPEC: 10G EPON", 
    subtitle: "HIGH-SPEED FIBER BACKBONE", 
    icon: Network,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    name: "IP CAMERAS", 
    spec: "SPEC: AI VISION 4K", 
    subtitle: "24/7 INDUSTRIAL SURVEILLANCE", 
    icon: Video,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    name: "PRINTERS", 
    spec: "SPEC: 60 PPM LASER", 
    subtitle: "ENTERPRISE DOCUMENTATION", 
    icon: Printer,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800" 
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg pointer-events-none" />

      {/* Hero Slider */}
      <section className="relative h-[600px] bg-navy overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="absolute inset-0 flex items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10" />
            <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="absolute inset-0 w-full h-full object-cover" />
            
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-signal-red font-bold tracking-widest uppercase text-sm mb-4 block"
                >
                  {slides[currentSlide].subtitle}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-300 text-lg mb-8"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="btn-signal flex items-center gap-2 group"
                >
                  {slides[currentSlide].cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 right-8 z-30 flex gap-4">
          <button onClick={prevSlide} className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Warranty Search Section */}
      <section className="relative z-40 -mt-16 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-navy mb-1">Warranty Search</h3>
              <p className="text-slate-500 text-sm">Enter your device serial number to check status.</p>
            </div>
            <form className="flex-1 w-full flex gap-2">
              <div className="relative flex-1">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <label htmlFor="home_warranty_search" className="sr-only">Serial Number</label>
                <input 
                  id="home_warranty_search"
                  name="home_warranty_search"
                  type="text" 
                  placeholder="e.g. SN-99283-ML" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-navy"
                />
              </div>
              <button type="submit" className="btn-navy px-6 py-3 rounded-xl bg-navy text-white font-bold hover:bg-navy/90 transition-all">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4 uppercase tracking-tighter">Our Flagship Hardware</h2>
          <p className="text-slate-500 max-w-2xl">Field-tested equipment engineered for reliability in challenging environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-slate-50/50 border border-slate-100 rounded-xl p-8 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="bg-navy text-[10px] font-black text-white px-3 py-1 rounded uppercase tracking-widest">
                  {product.spec}
                </div>
                <product.icon className="w-5 h-5 text-slate-400 group-hover:text-navy transition-colors" />
              </div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-black text-navy mb-2 tracking-tighter">{product.name}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{product.subtitle}</p>
              </div>

              <div className="mt-auto aspect-square rounded-lg overflow-hidden bg-white shadow-inner flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Ecosystem Section */}
      <section className="py-24 bg-slate-50/30 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div className="max-w-xl">
              <div className="w-16 h-1 bg-signal-red mb-6" />
              <h2 className="text-4xl font-bold text-navy mb-4">The Ecosystem</h2>
            </div>
            <p className="text-slate-500 max-w-md text-sm md:text-right">
              A synchronized network of enterprise-grade solutions designed for performance and redundancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Video,
                title: "SURVEILLANCE",
                badge: "SERIES_X",
                desc: "Industrial Intelligence. Total Oversight. High-end IP Dome cameras for 24/7 monitoring.",
                features: ["8K ANALYTICS", "NIGHT VISION PRO"],
                link: "EXPLORE SPECS"
              },
              {
                icon: Fingerprint,
                title: "ACCESS CONTROL",
                badge: "BIOMETRIC_M4",
                desc: "Precision Management. Biometric terminals and smart readers for secured facilities.",
                features: ["FACIAL RECOGNITION", "MULTI-DOOR SYNC"],
                link: "CONTROL SUITE"
              },
              {
                icon: Network,
                title: "NETWORKING",
                badge: "CORE_NET_X1",
                desc: "High-performance connectivity. Scalable fiber backbones and enterprise routing.",
                features: ["10G FIBER READY", "ZERO-LATENCY CORE"],
                link: "NETWORK SUITE"
              },
              {
                icon: Printer,
                title: "OFFICE TECH",
                badge: "ENTERPRISE_P30",
                desc: "The Digital Architect of Documentation. Laser precision printing and CMYK supplies.",
                features: ["HIGH CAPACITY LASER", "CLOUD PRINT READY"],
                link: "SUPPLY PORTAL"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-8">
                  <item.icon className="w-8 h-8 text-navy" />
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded uppercase tracking-widest">{item.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">{item.desc}</p>
                <ul className="space-y-3 mb-10">
                  {item.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-[10px] font-black text-navy uppercase tracking-widest">
                      <CheckCircle2 className="w-4 h-4 text-signal-red" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="text-signal-red text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  {item.link} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Overview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-4 uppercase tracking-tighter">Inventory Overview</h2>
              <p className="text-slate-500">Live technical specifications from our current hardware stack.</p>
            </div>
            <Link to="/admin" className="text-signal-red font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              Manage Full Inventory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ML-X801HQ ONU", model: "X801HQ", spec: "2.488Gbps", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" },
              { name: "ML-IP500 Camera", model: "IP500", spec: "4K UHD", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800" },
              { name: "ML-R1200 Router", model: "R1200", spec: "Dual-Band", img: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800" },
              { name: "ML-P1000 Printer", model: "P1000", spec: "60 PPM", img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-black text-signal-red uppercase tracking-widest mb-2">{item.spec}</div>
                  <h3 className="font-bold text-navy mb-1">{item.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">{item.model}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Leaders Choose Maxlink Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Column */}
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-navy mb-8 leading-tight">
                Why Industry Leaders Choose Maxlink
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-navy font-bold uppercase tracking-wider text-sm">
                  <CheckCircle2 className="w-5 h-5 text-signal-red" />
                  ISO 27001 COMPLIANT
                </div>
                <div className="flex items-center gap-3 text-navy font-bold uppercase tracking-wider text-sm">
                  <CheckCircle2 className="w-5 h-5 text-signal-red" />
                  24/7 EXPERT SUPPORT
                </div>
              </div>
            </div>

            {/* Right Column - Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  icon: GraduationCap,
                  title: "Expertise",
                  desc: "Our consultants hold top-tier certifications in network architecture and systems engineering."
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  desc: "Utilizing AI-driven workflows and the latest hardware stacks to keep you ahead of the curve."
                },
                {
                  icon: Users,
                  title: "Customer-Centricity",
                  desc: "We architect solutions that align with your specific business logic and growth trajectory."
                },
                {
                  icon: BarChart3,
                  title: "Result-Oriented",
                  desc: "Measurable KPIs and performance benchmarks at every stage of the project lifecycle."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verified Technical Excellence Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Global Impact</span>
            <h2 className="text-4xl font-bold text-navy">Verified Technical Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 flex-1">
                "Maxlink transformed our legacy infrastructure into a high-performance powerhouse. Their precision in execution is unmatched in the industry."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-400">MC</div>
                <div>
                  <div className="font-bold text-navy">Marcus Chen</div>
                  <div className="text-xs text-slate-400">CTO, NexaCorp Systems</div>
                </div>
              </div>
            </div>

            {/* Card 2 (Highlighted) */}
            <div className="bg-[#004D3D] p-8 rounded-xl shadow-xl flex flex-col text-white transform md:scale-105 z-10 h-full">
              <div className="flex gap-1 mb-6 opacity-0">
                <Star className="w-4 h-4" />
              </div>
              <p className="text-lg font-medium italic mb-8 flex-1 leading-relaxed">
                "The technical training and hardware deployment were incredibly dense and practical. Our network efficiency increased by 40% within the first quarter."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#98FB98] rounded-lg flex items-center justify-center font-bold text-[#004D3D]">SJ</div>
                <div>
                  <div className="font-bold">Sarah Jenkins</div>
                  <div className="text-xs text-emerald-200/70">VP Engineering, Global Dynamics</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 flex-1">
                "Clean, efficient, and professional. Their networking solutions are built with long-term scalability and reliability in mind."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-slate-400">DM</div>
                <div>
                  <div className="font-bold text-navy">David Miller</div>
                  <div className="text-xs text-slate-400">Founder, Zenith Labs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
