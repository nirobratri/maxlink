import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  FileText, 
  Info, 
  ShieldCheck, 
  Headphones, 
  Cpu,
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';

const products = [
  {
    id: 1,
    name: "MX-550 GigaNode",
    type: "ONT",
    badges: ["XPON", "WIFI 6"],
    status: "ACTIVE",
    statusColor: "bg-orange-500",
    description: "Dual-Band Gigabit Terminal",
    specs: [
      { label: "DOWNSTREAM", value: "2.488 Gbps" },
      { label: "UPSTREAM", value: "1.244 Gbps" }
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "MX-Series OLT 16X",
    type: "OLT",
    badges: ["OLT", "16 PORT"],
    status: "PREMIUM",
    statusColor: "bg-blue-600",
    description: "High-Density Optical Line Terminal",
    specs: [
      { label: "MAX USERS", value: "2,048" },
      { label: "BANDWIDTH", value: "128 Gbps" }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "MX-200 LiteLink",
    type: "ONT",
    badges: ["ONT", "10E + 3FE"],
    status: "ECO-SMART",
    statusColor: "bg-green-500",
    description: "SME Efficient Connectivity Unit",
    specs: [
      { label: "PROTOCOL", value: "GPON/EPON" },
      { label: "CONSUMPTION", value: "< 4W" }
    ],
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Networking() {
  const [filter, setFilter] = React.useState('ALL UNITS');

  const filteredProducts = products.filter(p => 
    filter === 'ALL UNITS' || p.type === filter
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-navy text-white text-[10px] font-black px-3 py-1 inline-block uppercase tracking-widest mb-8"
            >
              Advanced Infrastructure
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-black text-navy mb-8 tracking-tighter leading-[0.9]"
            >
              NextGen XPON <br />
              <span className="text-signal-red">Solutions.</span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="w-1 h-24 bg-navy shrink-0 mt-2" />
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                Precision-engineered networking hardware designed for the modern ISP architecture. Deploy reliability at scale with Maxlink BD's high-performance terminal units.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col items-end gap-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Category Filter</span>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {['ALL UNITS', 'ONT', 'OLT'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-md",
                    filter === f ? "bg-white text-navy shadow-sm" : "text-slate-400 hover:text-navy"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.badges.map((badge, idx) => (
                      <span key={idx} className="bg-navy/80 backdrop-blur-md text-white text-[8px] font-black px-2 py-1 uppercase tracking-widest">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-black text-navy tracking-tight">{product.name}</h3>
                    <span className={cn(
                      "text-[8px] font-black text-white px-2 py-1 uppercase tracking-widest",
                      product.statusColor
                    )}>
                      {product.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">{product.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded">
                        <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{spec.label}</div>
                        <div className="text-sm font-black text-navy">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-navy text-white py-4 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-navy/90 transition-all">
                      <Info className="w-4 h-4" /> Product Details
                    </button>
                    <button className="w-14 bg-slate-100 text-navy flex items-center justify-center hover:bg-slate-200 transition-all">
                      <FileText className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button className="border-2 border-navy text-navy px-12 py-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-navy hover:text-white transition-all group">
              View Entire Catalog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Core Tech */}
            <div className="bg-navy p-16 flex flex-col justify-end min-h-[500px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <span className="text-signal-red text-[10px] font-black uppercase tracking-widest mb-4 block">Core Technology</span>
                <h2 className="text-5xl font-black text-white mb-8 tracking-tighter leading-none">Unrivaled Signal Integrity.</h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                  Our XPON chipsets are optimized for high-attenuation environments, ensuring stable gigabit speeds over longer distances.
                </p>
              </div>
            </div>

            {/* Right: Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-12 flex flex-col justify-center col-span-1 md:col-span-2">
                <h3 className="text-2xl font-black text-navy mb-4 tracking-tight">Zero-Touch Provisioning</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Automate your deployment with our OMCI compliant auto-configuration protocols. Save thousands on site visits.
                </p>
              </div>
              <div className="bg-signal-red p-12 text-white flex flex-col justify-between group">
                <ShieldCheck className="w-8 h-8 mb-8 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-black mb-2 tracking-tight">5-Year Warranty</h3>
                  <p className="text-white/70 text-xs leading-relaxed">Enterprise grade durability guaranteed.</p>
                </div>
              </div>
              <div className="bg-slate-100 p-12 text-navy flex flex-col justify-between group">
                <Headphones className="w-8 h-8 mb-8 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-black mb-2 tracking-tight">24/7 Expert Support</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Direct access to tier-3 networking engineers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
