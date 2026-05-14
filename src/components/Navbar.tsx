import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="flex items-baseline font-black text-2xl tracking-tighter italic">
                <span className="text-navy">Ma</span>
                <span className="text-signal-red text-3xl not-italic mx-[-2px]">X</span>
                <span className="text-navy">link</span>
              </div>
              <div className="ml-2 hidden sm:block">
                <div className="h-px w-12 bg-slate-200 mb-0.5" />
                <p className="text-[8px] uppercase tracking-[0.2em] text-slate-400 font-bold leading-none">Quality First</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-700 hover:text-navy font-medium py-2 uppercase tracking-wider text-xs">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full -left-4 w-64 bg-white shadow-xl border border-slate-100 rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                <Link to="/services/surveillance" className="block px-6 py-3 hover:bg-slate-50 text-xs font-bold text-slate-600 hover:text-navy uppercase tracking-widest">Surveillance</Link>
                <Link to="/services/access-control" className="block px-6 py-3 hover:bg-slate-50 text-xs font-bold text-slate-600 hover:text-navy uppercase tracking-widest">Access Control</Link>
                <Link to="/services/networking" className="block px-6 py-3 hover:bg-slate-50 text-xs font-bold text-slate-600 hover:text-navy uppercase tracking-widest">Networking</Link>
                <div className="px-6 py-2 text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] border-t border-slate-50 mt-2">Office Tech</div>
                <Link to="/services/office-tech/printers" className="block px-6 py-3 hover:bg-slate-50 text-xs font-bold text-slate-600 hover:text-navy uppercase tracking-widest pl-8">Printers & Cartridges</Link>
                <Link to="/services/office-tech/accessories" className="block px-6 py-3 hover:bg-slate-50 text-xs font-bold text-slate-600 hover:text-navy uppercase tracking-widest pl-8">Computer Accessories</Link>
              </div>
            </div>
            <Link to="/about" className="text-slate-700 hover:text-navy font-medium uppercase tracking-wider text-xs">About</Link>
            <Link to="/support" className="text-slate-700 hover:text-navy font-medium uppercase tracking-wider text-xs">Support</Link>
            <Link to="/contact" className="text-slate-700 hover:text-navy font-medium uppercase tracking-wider text-xs">Contact</Link>
            
            <Link to="/admin" className="text-navy font-bold flex items-center gap-2 uppercase tracking-wider text-xs">
              <User className="w-4 h-4" /> Admin Suite
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4">
          <div className="space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Services</p>
            <Link to="/services/surveillance" className="block px-4 py-2 text-slate-700 font-medium text-sm">Surveillance</Link>
            <Link to="/services/access-control" className="block px-4 py-2 text-slate-700 font-medium text-sm">Access Control</Link>
            <Link to="/services/networking" className="block px-4 py-2 text-slate-700 font-medium text-sm">Networking</Link>
            <div className="px-4 py-1 text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Office Tech</div>
            <Link to="/services/office-tech/printers" className="block px-6 py-2 text-slate-700 font-medium text-sm">Printers & Cartridges</Link>
            <Link to="/services/office-tech/accessories" className="block px-6 py-2 text-slate-700 font-medium text-sm">Computer Accessories</Link>
          </div>
          <Link to="/about" className="block text-slate-700 font-medium px-2">About</Link>
          <Link to="/support" className="block text-slate-700 font-medium px-2">Support</Link>
          <Link to="/contact" className="block text-slate-700 font-medium px-2">Contact</Link>
          <Link to="/admin" className="block text-navy font-bold px-2">Admin Suite</Link>
        </div>
      )}
    </nav>
  );
}
