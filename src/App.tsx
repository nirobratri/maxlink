import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Support from './pages/Support';
import Networking from './pages/Networking';
import Surveillance from './pages/Surveillance';
import AccessControl from './pages/AccessControl';
import PrintersAndCartridges from './pages/PrintersAndCartridges';
import ComputerAccessories from './pages/ComputerAccessories';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import Contact from './pages/Contact';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
      <p className="text-xl text-slate-500 mb-8">The page you are looking for does not exist.</p>
      <a href="/" className="btn-primary">Go Home</a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/support" element={<Layout><Support /></Layout>} />
        <Route path="/services/surveillance" element={<Layout><Surveillance /></Layout>} />
        <Route path="/services/access-control" element={<Layout><AccessControl /></Layout>} />
        <Route path="/services/networking" element={<Layout><Networking /></Layout>} />
        <Route path="/services/office-tech/printers" element={<Layout><PrintersAndCartridges /></Layout>} />
        <Route path="/services/office-tech/accessories" element={<Layout><ComputerAccessories /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </Router>
  );
}
