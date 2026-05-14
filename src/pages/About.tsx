import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6 italic tracking-tighter">
              Ma<span className="text-signal-red not-italic">X</span>link BD
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Empowering Bangladesh with world-class IT infrastructure and networking solutions. We are the bridge between cutting-edge technology and local business excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                To provide high-performance, reliable, and secure networking hardware that drives digital transformation across Bangladesh. We aim to be the first choice for ISPs, corporate offices, and industry leaders seeking technical excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Shield className="w-8 h-8 text-signal-red mb-3" />
                  <h3 className="font-bold text-navy">Security</h3>
                  <p className="text-xs text-slate-500">ISO 27001 Compliant protocols</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Award className="w-8 h-8 text-signal-red mb-3" />
                  <h3 className="font-bold text-navy">Quality</h3>
                  <p className="text-xs text-slate-500">Premium hardware standards</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000" 
                  alt="Data Center" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl shadow-xl border border-slate-100 hidden lg:block">
                <div className="text-4xl font-bold text-navy mb-1">10+</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">Our Core Values</h2>
            <p className="text-slate-500 mt-4">The principles that guide every integration and support ticket.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Precision",
                desc: "Every network flow is architected with meticulous attention to detail."
              },
              {
                icon: Users,
                title: "Partnership",
                desc: "We don't just sell hardware; we build long-term technical partnerships."
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Transparent business practices and verified technical performance."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
