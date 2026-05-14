import React from 'react';
import { motion } from 'motion/react';
import { 
  Network, 
  Video, 
  Fingerprint, 
  Printer, 
  Monitor, 
  Code, 
  ArrowRight, 
  BookOpen, 
  Database, 
  ShieldCheck, 
  Phone,
  ChevronDown,
  Send,
  Users
} from 'lucide-react';
import { cn } from '../lib/utils';

const domains = [
  {
    icon: Network,
    title: "FTTH & Networking",
    desc: "GPON/XPON architecture support and ISP backbone configuration assistance.",
    link: "TECHNICAL DOCS"
  },
  {
    icon: Video,
    title: "Surveillance & Security",
    desc: "Remote diagnostics for CCTV clusters and AI-integrated NVR management.",
    link: "FIRMWARE HUB"
  },
  {
    icon: Fingerprint,
    title: "Access Control",
    desc: "Biometric synchronization across multi-site enterprise environments.",
    link: "SYNC PROTOCOL"
  },
  {
    icon: Printer,
    title: "Printers & Supplies",
    desc: "Managed print services, driver deployments, and hardware maintenance.",
    link: "DRIVER PORTAL"
  },
  {
    icon: Monitor,
    title: "Computer & Office Tech",
    desc: "Enterprise hardware provisioning and lifecycle management services.",
    link: "SERVICE DESK"
  },
  {
    icon: Code,
    title: "Software & Integration",
    desc: "Custom IT solutions bridging legacy systems with modern networking.",
    link: "API REGISTRY"
  }
];

const selfService = [
  { icon: BookOpen, title: "KNOWLEDGE BASE", link: "#" },
  { icon: Database, title: "FIRMWARE REPOSITORY", link: "#" },
  { icon: ShieldCheck, title: "WARRANTY VALIDATION", link: "#" }
];

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-signal-red text-white text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest mb-6"
            >
              Enterprise Hub
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter"
            >
              Integrated Support <br />
              <span className="text-slate-400">Ecosystem</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              24/7 access to technical architects specializing in high-density networking, enterprise security, and mission-critical hardware sync.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-signal-red text-white px-8 py-4 rounded-lg font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-signal-red/90 transition-all">
                <Users className="w-5 h-5" /> Launch Live Architect
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                View Documentation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Domains */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="w-16 h-1 bg-signal-red mb-6" />
            <h2 className="text-4xl font-black text-navy tracking-tight">Technical Domains</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 border-l-4 border-navy shadow-sm hover:shadow-md transition-all group"
              >
                <domain.icon className="w-8 h-8 text-signal-red mb-8" />
                <h3 className="text-xl font-black text-navy mb-4 tracking-tight">{domain.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">{domain.desc}</p>
                <button className="text-signal-red text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  {domain.link} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request & Portal Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Incident Request Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-10 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rotate-45 translate-x-16 -translate-y-16" />
                
                <h2 className="text-3xl font-black text-navy mb-10 uppercase tracking-tighter">Incident Request</h2>
                
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Domain</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-navy/10">
                          <option>FTTH Networking</option>
                          <option>Surveillance</option>
                          <option>Access Control</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Urgency Level</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-navy/10">
                          <option>Critical (Operational Block)</option>
                          <option>High</option>
                          <option>Medium</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-navy/10" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                      <input type="email" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-navy/10" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mobile Number</label>
                      <input type="tel" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-navy/10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Technical Description</label>
                    <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-navy/10" />
                  </div>

                  <button className="w-full bg-navy text-white py-5 rounded-lg font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-navy/95 transition-all">
                    Submit Engineering Ticket <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Self-Service & Contact */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-black text-navy mb-8 tracking-tight">Self-Service Portal</h2>
                {selfService.map((item, i) => (
                  <a 
                    key={i}
                    href={item.link}
                    className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-xl hover:border-navy transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-navy uppercase tracking-widest">{item.title}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-navy group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>

              <div className="mt-auto bg-navy p-10 rounded-2xl relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Phone className="w-48 h-48 -mb-12 -mr-12" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-white mb-2 tracking-tight">Direct Architect Line</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    For P1 critical infrastructure failures, use the dedicated enterprise line below.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-signal-red rounded-xl flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Priority Support</div>
                      <div className="text-2xl font-black text-white tracking-tighter">+880 (2) 987-6543</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
