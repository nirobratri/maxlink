import React from 'react';
import { motion } from 'motion/react';
import { 
  Keyboard, 
  Mouse, 
  Monitor, 
  Cpu, 
  Usb, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Filter,
  LayoutGrid
} from 'lucide-react';
import { cn } from '../lib/utils';

const products = [
  {
    id: 1,
    name: "Precision K-900 Mech",
    category: "INPUT DEVICES",
    price: "$189.00",
    specs: [
      { label: "Switches", value: "Optical Blue" },
      { label: "Latency", value: "0.125ms" },
      { label: "Durability", value: "100M Clicks" }
    ],
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "UltraView 32X Pro",
    category: "MONITORS",
    price: "$899.00",
    specs: [
      { label: "Resolution", value: "4K UHD" },
      { label: "Refresh Rate", value: "144Hz" },
      { label: "Color Space", value: "99% DCI-P3" }
    ],
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Core-Link Hub 12",
    category: "CONNECTIVITY",
    price: "$129.00",
    specs: [
      { label: "Ports", value: "12-in-1" },
      { label: "Power Delivery", value: "100W" },
      { label: "Data Speed", value: "10Gbps" }
    ],
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ComputerAccessories() {
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
                High-Performance Peripherals
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
              >
                Precision Tools <br />
                for the Modern <br />
                <span className="text-slate-400">Workspace.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed max-w-md mb-12"
              >
                Ergonomic input devices, high-fidelity displays, and enterprise connectivity solutions engineered for maximum productivity.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-signal-red text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all">
                  Browse Peripherals
                </button>
                <button className="bg-white/10 text-white border border-white/20 px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                  Corporate Bundles
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
                src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000" 
                alt="Workspace Setup" 
                className="w-full h-auto drop-shadow-2xl rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black text-navy uppercase tracking-tighter border-b-4 border-signal-red pb-2">
            Essential Peripherals
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
                        {idx === 0 ? <Keyboard className="w-3 h-3" /> : idx === 1 ? <Zap className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3" />}
                        {spec.label}
                      </span>
                      <span className="text-[10px] font-black text-navy uppercase tracking-widest">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-navy text-white py-4 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-navy/90 transition-all">
                  Add to Specification
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-navy mb-6 tracking-tighter leading-none">
                Seamless Connectivity. <br />
                Zero Latency.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-12">
                Our connectivity solutions are designed to bridge the gap between your devices and your network, ensuring maximum data throughput and minimal interference.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl border border-slate-200">
                  <Usb className="w-8 h-8 text-signal-red mb-4" />
                  <h3 className="font-black text-navy mb-2">Thunderbolt 4 Ready</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Support for 40Gbps data transfer and dual 4K display output.</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-slate-200">
                  <Monitor className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-black text-navy mb-2">Color Precision</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Factory calibrated displays with Delta-E &lt; 2 for creative professionals.</p>
                </div>
              </div>
            </div>

            <div className="bg-navy p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
              <div className="relative z-10">
                <span className="text-signal-red text-[10px] font-black uppercase tracking-widest mb-4 block">Enterprise Support</span>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">Bulk Deployment Services</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  We provide end-to-end deployment for office expansions, including pre-configured workstations and on-site technical setup.
                </p>
                <button className="bg-white text-navy px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-2">
                  Contact Sales <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
