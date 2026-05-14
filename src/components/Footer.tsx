import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6">
            <div className="flex items-baseline font-black text-3xl tracking-tighter italic text-white">
              <span>Ma</span>
              <span className="text-signal-red text-4xl not-italic mx-[-2px]">X</span>
              <span>link</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-[0.3em] font-bold">Quality is our first concern</p>
          </div>
          <p className="text-slate-400 mb-8 max-w-md">
            Premier IT and Networking provider in Bangladesh. Delivering high-performance hardware and integrated security solutions.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-navy transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-navy transition-colors cursor-pointer">
              <MapPin className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Location</h4>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-sm text-slate-400 mb-2 font-bold">Dhaka Multiplan Center</p>
            <p className="text-xs text-slate-500">Level 10, Suite 1002, Elephant Road, Dhaka-1205</p>
            <div className="mt-4 h-24 bg-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-xs text-slate-500">Map Widget Placeholder</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">AI Strategist Digest</h4>
          <p className="text-xs text-slate-400 mb-4">Get the latest insights on IT marketing and tech trends.</p>
          <form className="space-y-2">
            <label htmlFor="newsletter_email" className="sr-only">Email Address</label>
            <input 
              id="newsletter_email"
              name="newsletter_email"
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-navy" 
            />
            <button type="submit" className="w-full btn-signal py-2 text-sm">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} Maxlink BD. All Rights Reserved.
      </div>
    </footer>
  );
}
