import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-navy mb-4">Contact Our Technical Team</h1>
            <p className="text-lg text-slate-500">
              Have a technical query or need a custom network architecture? Reach out to our Dhaka-based experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                <Send className="w-6 h-6 text-signal-red" /> Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input 
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input 
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy transition-colors appearance-none"
                  >
                    <option>Technical Support</option>
                    <option>Sales Inquiry</option>
                    <option>Warranty Claim</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy transition-colors resize-none"
                    placeholder="Describe your technical requirements..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus !== 'idle'}
                  className="w-full btn-navy py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-sm"
                >
                  {formStatus === 'idle' ? (
                    <>Submit Request <ChevronRight className="w-4 h-4" /></>
                  ) : formStatus === 'sending' ? (
                    'Processing...'
                  ) : (
                    'Message Sent Successfully'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-8">Office Headquarters</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">Dhaka Multiplan Center</h3>
                      <p className="text-slate-500 text-sm">Level 10, Suite 1002, Elephant Road, Dhaka-1205</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">Technical Support</h3>
                      <p className="text-slate-500 text-sm">+880 1234 567890</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">Email Us</h3>
                      <p className="text-slate-500 text-sm">support@maxlinkbd.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy p-8 rounded-2xl text-white">
                <MessageSquare className="w-10 h-10 text-signal-red mb-6" />
                <h3 className="text-xl font-bold mb-2">Live Technical Chat</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Need immediate assistance? Our technical engineers are available for live consultation during office hours.
                </p>
                <button className="w-full bg-white text-navy font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
    </svg>
  );
}
