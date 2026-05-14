import React from 'react';
import { motion } from 'motion/react';
import { 
  Printer, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Mail, 
  ArrowRight,
  Filter,
  LayoutGrid,
  Droplets
} from 'lucide-react';
import { cn } from '../lib/utils';

const products = [
  {
    id: 1,
    name: "NextGen P-900 Ultra",
    category: "INDUSTRIAL MFP",
    price: "$2,849.00",
    specs: [
      { label: "Print Speed", value: "65 PPM" },
      { label: "Resolution", value: "2400 x 1200 DPI" },
      { label: "Ink Efficiency", value: "0.008c / Page" }
    ],
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Core L-500 Workflow",
    category: "WORKGROUP LASER",
    price: "$1,499.00",
    specs: [
      { label: "Print Speed", value: "45 PPM" },
      { label: "Resolution", value: "1200 x 1200 DPI" },
      { label: "Ink Efficiency", value: "0.012c / Page" }
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "CMYK Full Precision Set",
    category: "CONSUMABLES",
    price: "$840.00",
    specs: [
      { label: "Page Yield", value: "20k Pages" },
      { label: "Color Accuracy", value: "99.9% Delta-E" },
      { label: "OEM Certified", value: "Original" }
    ],
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800"
  }
];

export default function PrintersAndCartridges() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-signal-red text-[10px] font-black uppercase tracking-widest mb-4 block"
              >
                B2B Precision Printing
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
              >
                The Digital <br />
                Architect of <br />
                <span className="text-slate-400">Documentation.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed max-w-md mb-12"
              >
                High-performance multifunction laser systems and CMYK precision cartridges designed for the modern enterprise infrastructure.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-signal-red text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all">
                  Explore Catalog
                </button>
                <button className="bg-white/10 text-white border border-white/20 px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                  View Toner Compatibility
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=1000" 
                alt="Enterprise Printer" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black text-navy uppercase tracking-tighter border-b-4 border-signal-red pb-2">
            High-Capacity Systems
          </h2>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-50 text-slate-400 hover:text-navy transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            <button className="p-2 bg-slate-50 text-navy transition-colors">
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-200 overflow-hidden group"
            >
              <div className="h-64 overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-black text-navy tracking-tight">{product.name}</h3>
                  <span className="text-navy font-black text-sm">{product.price}</span>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{product.category}</p>

                <div className="space-y-4 mb-8">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-slate-50 pb-2">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        {idx === 0 ? <Printer className="w-3 h-3" /> : idx === 1 ? <Layers className="w-3 h-3" /> : <Droplets className="w-3 h-3" />}
                        {spec.label}
                      </span>
                      <span className="text-[10px] font-black text-navy uppercase tracking-widest">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-navy text-white py-4 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-navy/90 transition-all">
                  <Mail className="w-4 h-4" /> Bulk Inquiry
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-navy mb-6 tracking-tighter leading-none">
                Business Transparency: <br />
                The Truth About Toner.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-12">
                We believe in informed procurement. Choosing between Original OEM and Certified Compatible cartridges depends entirely on your specific infrastructure needs and volume requirements.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl border border-slate-200 flex gap-6 items-start">
                  <div className="p-3 bg-red-50 text-signal-red rounded-lg">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-navy mb-2">Original OEM Precision</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Recommended for high-resolution marketing materials and mission-critical hardware longevity. Maximum reliability, zero downtime.</p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-slate-200 flex gap-6 items-start">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-navy mb-2">Certified Compatible Sets</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Optimal for internal documentation and high-volume drafts. Achieves 40% cost reduction while maintaining 95% color accuracy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-navy p-12 text-white flex flex-col justify-center min-h-[300px]">
                <div className="text-5xl font-black mb-4">40%</div>
                <p className="text-slate-400 text-sm leading-relaxed">Average cost-per-page saving with NextGen Certified Compatible toner sets over standard OEM prices.</p>
              </div>
              <div className="bg-slate-200 p-12 text-navy flex flex-col justify-center min-h-[300px]">
                <div className="text-5xl font-black mb-4">99.9%</div>
                <p className="text-slate-500 text-sm leading-relaxed">Uptime guarantee for all managed print service contracts using original NextGen hardware units.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Procurement Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Printer className="w-12 h-12 text-navy mx-auto mb-8" />
          <h2 className="text-4xl font-black text-navy mb-6 tracking-tighter">Enterprise Bulk Procurement</h2>
          <p className="text-slate-500 mb-12">Managing a fleet of 50+ units? Our dedicated B2B logistics team provides tiered pricing and scheduled toner fulfillment directly to your office hubs.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Business Email Address" 
              className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:border-navy text-sm font-bold"
            />
            <button className="bg-signal-red text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all">
              Request Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
