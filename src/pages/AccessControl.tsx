import React from 'react';
import { motion } from 'motion/react';
import { 
  Filter, 
  Plus, 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  ShieldCheck,
  Fingerprint,
  Key,
  Lock
} from 'lucide-react';
import { cn } from '../lib/utils';

const products = [
  {
    id: 1,
    name: "Vision-X Pro Terminal",
    price: "$1,249",
    description: "Advanced AI-driven facial recognition for contactless entry in high-traffic commercial environments.",
    tags: ["FACE ID", "DUAL CAMERA", "POE+"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "NFC-Link Smart Reader",
    price: "$389",
    description: "Multi-protocol reader supporting legacy 125kHz and secure 13.56MHz DESFire EV3 standards.",
    tags: ["RFID SUPPORT", "IP65 RATED", "BLUETOOTH"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "MagBolt Gen-II Lock",
    price: "$615",
    description: "High-torque fail-safe electromagnetic lock with 1200lbs holding force and real-time status reporting.",
    tags: ["ANTI-PASSBACK", "FAIL-SAFE", "12V/24V"],
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "BioTouch Elite",
    price: "$549",
    description: "Optical fingerprint verification with live tissue detection to prevent spoofing and unauthorized bypass.",
    tags: ["LIVE TISSUE", "50K USERS", "WIEGAND OUT"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "ArmorKey Hybrid",
    price: "$299",
    description: "Vandal-resistant zinc-alloy housing with dual-authentication keypad and proximity reader.",
    tags: ["VANDAL PROOF", "PIN+CARD", "IK10"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Access Hub 4000",
    price: "$1,850",
    description: "Centralized controller for up to 16 doors with offline local database and real-time cloud synchronization.",
    tags: ["16-DOOR SUPPORT", "CLOUD READY", "UPS READY"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  }
];

export default function AccessControl() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-signal-red text-[10px] font-black uppercase tracking-widest mb-4 block"
          >
            Infrastructure Security
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-black text-navy mb-8 tracking-tighter leading-none"
          >
            Access-Control <br />
            Systems
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed max-w-md mb-12"
          >
            High-precision biometric and physical authentication hardware designed for enterprise-grade security architecture.
          </motion.p>
        </div>

        <div className="flex justify-end mb-12">
          <button className="bg-slate-100 text-navy px-6 py-3 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-200 transition-all">
            <Filter className="w-4 h-4" /> Filter Catalog
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 aspect-square mb-6 overflow-hidden flex items-center justify-center p-12">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-navy tracking-tight max-w-[200px]">{product.name}</h3>
                <span className="text-signal-red font-black text-lg">{product.price}</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 h-12 overflow-hidden">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-400 text-[8px] font-black px-2 py-1 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full bg-signal-red text-white py-4 text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all">
                Add to Specification
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Software Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-signal-red text-[10px] font-black uppercase tracking-widest mb-4 block">Control Suite</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-12 tracking-tighter leading-none">
                Software Management <br />
                Centralized.
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: LayoutDashboard,
                    title: "Universal Command Center",
                    desc: "Monitor all points of entry across multiple global locations from a single unified dashboard."
                  },
                  {
                    icon: Users,
                    title: "Dynamic Credentialing",
                    desc: "Issue mobile keys and biometric templates instantly via encrypted cloud protocols."
                  },
                  {
                    icon: BarChart3,
                    title: "Predictive Analytics",
                    desc: "Identify abnormal access patterns using AI to preemptively secure high-risk zones."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-8 flex items-start gap-6 group hover:bg-white/10 transition-all"
                  >
                    <div className="p-3 bg-white/10 rounded-lg text-white group-hover:bg-signal-red transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-black text-lg mb-2 tracking-tight">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
              <div className="relative bg-navy border border-white/10 p-2 rounded-xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="Software Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
