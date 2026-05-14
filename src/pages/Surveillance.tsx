import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Download, 
  Eye, 
  Headphones, 
  ArrowRight,
  Shield,
  Activity,
  Cpu
} from 'lucide-react';
import { cn } from '../lib/utils';

const products = [
  {
    id: 1,
    name: "Sentinel Pro 4K Dome",
    category: "IP CAMERAS",
    tag: "NEW ARRIVAL",
    description: "Next-gen optical sensors for zero-latency monitoring.",
    specs: [
      { label: "RESOLUTION", value: "4K Ultra HD" },
      { label: "NIGHT VISION", value: "60m Range" },
      { label: "INTELLIGENCE", value: "AI Motion Tracking" }
    ],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Nexus 64-Ch NVR",
    category: "NVR SYSTEMS",
    description: "Enterprise storage architecture with RAID support.",
    specs: [
      { label: "CAPACITY", value: "Up to 128TB" },
      { label: "BANDWIDTH", value: "640Mbps Inbound" },
      { label: "SECURITY", value: "Dual-Gigabit LAN" }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Horizon VMS Core",
    category: "SOFTWARE",
    description: "Global central management for distributed systems.",
    specs: [
      { label: "PLATFORM", value: "Windows/Linux" },
      { label: "AI SUPPORT", value: "LPR & Face Recog" },
      { label: "UPDATES", value: "3-Year License" }
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Surveillance() {
  const [activeCategory, setActiveCategory] = React.useState('IP CAMERAS');
  const [searchQuery, setSearchQuery] = React.useState('');

  const categories = ['IP CAMERAS', 'NVR SYSTEMS', 'ACCESSORIES', 'SOFTWARE'];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-signal-red text-[10px] font-black uppercase tracking-widest mb-4 block"
              >
                Precision Surveillance
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]"
              >
                Industrial <br />
                Intelligence. <br />
                <span className="text-slate-400">Total Oversight.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed max-w-md mb-12"
              >
                High-fidelity security infrastructure engineered for large-scale enterprise environments and critical asset protection.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-signal-red text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all">
                  Download Spec Sheets
                </button>
                <button className="bg-white/10 text-white border border-white/20 px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                  View Case Studies
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial Camera" 
                className="relative z-10 w-full max-w-xl mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-20 py-4 md:py-0 gap-4">
            <div className="flex gap-8 overflow-x-auto w-full md:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "text-[10px] font-black uppercase tracking-widest whitespace-nowrap pb-2 md:pb-0 border-b-2 transition-all",
                    activeCategory === cat ? "border-signal-red text-navy" : "border-transparent text-slate-400 hover:text-navy"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Search model or SKU..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 text-xs font-bold focus:outline-none focus:border-navy transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 bg-slate-100 overflow-hidden p-8">
                  {product.tag && (
                    <div className="absolute top-4 left-4 z-10 bg-signal-red text-white text-[8px] font-black px-2 py-1 uppercase tracking-widest">
                      {product.tag}
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black text-navy mb-2 tracking-tight">{product.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-8">{product.description}</p>

                  <div className="space-y-4 mb-10">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-slate-50 pb-2">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{spec.label}</span>
                        <span className="text-[10px] font-black text-navy uppercase tracking-widest">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-navy text-white py-4 text-[10px] font-black uppercase tracking-widest hover:bg-navy/90 transition-all">
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none">
                Need technical consultation?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our expert engineering team is available for custom deployment designs and deep technical support across all product lines.
              </p>
            </div>

            <button className="relative z-10 bg-signal-red text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest flex items-center gap-4 hover:bg-red-700 transition-all group">
              <Headphones className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Connect with Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
