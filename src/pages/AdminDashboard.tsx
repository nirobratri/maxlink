import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShieldCheck, 
  TrendingUp, 
  Search, 
  Plus, 
  MoreVertical,
  RefreshCw,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInventory } from '../hooks/useInventory';
import { useWarranty } from '../hooks/useWarranty';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import ProductModal from '../components/ProductModal';
import WarrantyModal from '../components/WarrantyModal';
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Tooltip } from 'recharts';

const visitorData = [
  { time: '00:00', visitors: 40 },
  { time: '04:00', visitors: 30 },
  { time: '08:00', visitors: 65 },
  { time: '12:00', visitors: 90 },
  { time: '16:00', visitors: 75 },
  { time: '20:00', visitors: 85 },
  { time: '23:59', visitors: 55 },
];

export default function AdminDashboard() {
  const { products, loading: productsLoading, addProduct, deleteProduct, refresh: refreshProducts } = useInventory();
  const { warranties, loading: warrantiesLoading, addWarranty, refresh: refreshWarranties } = useWarranty();
  
  const displayProducts = products.length > 0 ? products : [
    {
      id: 'dummy-1',
      name: "ML-X801HQ ONU",
      category: "FTTH",
      model: "X801HQ",
      item: "Optical Network Unit",
      spec_badge: "2.488Gbps",
      description: "High-performance fiber-to-the-home solution for connectivity.",
      image_url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      created_at: new Date().toISOString()
    },
    {
      id: 'dummy-2',
      name: "ML-IP500 Camera",
      category: "Security",
      model: "IP500",
      item: "IP Dome Camera",
      spec_badge: "4K UHD",
      description: "Advanced IP camera system for surveillance.",
      image_url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
      created_at: new Date().toISOString()
    }
  ];

  const [activeTab, setActiveTab] = React.useState<'inventory' | 'warranty' | 'analytics'>('inventory');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isProductModalOpen, setIsProductModalOpen] = React.useState(false);
  const [isWarrantyModalOpen, setIsWarrantyModalOpen] = React.useState(false);
  
  const filteredProducts = displayProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredWarranties = warranties.filter(w => 
    w.serial_number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = async (productData: any) => {
    await addProduct(productData);
  };

  const handleAddWarranty = async (warrantyData: any) => {
    await addWarranty(warrantyData);
  };

  const seedInventory = async () => {
    const dummyProducts = [
      {
        name: "ML-X801HQ ONU",
        category: "FTTH",
        model: "X801HQ",
        item: "Optical Network Unit",
        spec_badge: "2.488Gbps",
        description: "High-performance fiber-to-the-home solution for seamless connectivity.",
        image_url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "ML-IP500 Camera",
        category: "Security",
        model: "IP500",
        item: "IP Dome Camera",
        spec_badge: "4K UHD",
        description: "Advanced IP camera system for 24/7 industrial surveillance.",
        image_url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "ML-R1200 Router",
        category: "Networking",
        model: "R1200",
        item: "Enterprise Router",
        spec_badge: "Dual-Band",
        description: "High-performance networking with zero-latency core.",
        image_url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "ML-P1000 Printer",
        category: "Office Tech",
        model: "P1000",
        item: "Laser Printer",
        spec_badge: "60 PPM",
        description: "Enterprise-grade laser printer for high-volume documentation.",
        image_url: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800"
      }
    ];

    for (const product of dummyProducts) {
      await addProduct(product);
    }
    refreshProducts();
  };

  const refreshData = () => {
    if (activeTab === 'inventory') refreshProducts();
    else if (activeTab === 'warranty') refreshWarranties();
  };

  const categoryData = React.useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [products]);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <ProductModal 
        isOpen={isProductModalOpen} 
        onClose={() => setIsProductModalOpen(false)} 
        onSubmit={handleAddProduct} 
      />

      <WarrantyModal
        isOpen={isWarrantyModalOpen}
        onClose={() => setIsWarrantyModalOpen(false)}
        onSubmit={handleAddWarranty}
        products={products}
      />
      
      {/* Sidebar */}
      <aside className="w-64 bg-navy text-white p-6 hidden lg:block">
        <div className="mb-12">
          <div className="flex items-baseline font-black text-2xl tracking-tighter italic text-white">
            <span>Ma</span>
            <span className="text-signal-red text-3xl not-italic mx-[-2px]">X</span>
            <span>link</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-bold">UOC Admin Suite</p>
        </div>

        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab('inventory')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              activeTab === 'inventory' ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <Package className="w-5 h-5" /> Inventory
          </button>
          <button 
            onClick={() => setActiveTab('warranty')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              activeTab === 'warranty' ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <ShieldCheck className="w-5 h-5" /> Warranty Tracker
          </button>
          <button 
            onClick={() => setActiveTab('analytics')}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
              activeTab === 'analytics' ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <TrendingUp className="w-5 h-5" /> Analytics
          </button>
        </nav>

        <div className="mt-auto pt-8 border-t border-white/10">
          <Link 
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="lg:hidden p-2 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-navy">
                {activeTab === 'inventory' ? 'Inventory Management' : activeTab === 'warranty' ? 'Warranty Tracker' : 'Business Analytics'}
              </h1>
              <p className="text-slate-500 text-sm">Unified Operations Control Suite</p>
            </div>
          </div>
          <div className="flex gap-4">
            {activeTab !== 'analytics' && (
              <button onClick={refreshData} className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">
                <RefreshCw className="w-5 h-5" />
              </button>
            )}
            {activeTab === 'inventory' ? (
              <div className="flex gap-2">
                <button 
                  onClick={seedInventory}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm font-medium transition-colors"
                >
                  Seed Data
                </button>
                <button 
                  onClick={() => setIsProductModalOpen(true)}
                  className="btn-navy flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-lg"
                >
                  <Plus className="w-5 h-5" /> Add Product
                </button>
              </div>
            ) : activeTab === 'warranty' ? (
              <button 
                onClick={() => setIsWarrantyModalOpen(true)}
                className="btn-navy flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-lg"
              >
                <Plus className="w-5 h-5" /> Log Warranty
              </button>
            ) : null}
          </div>
        </header>

        {activeTab === 'inventory' ? (
          <>
            {/* Stats Widgets */}
            <div className="mb-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-navy/5 text-navy rounded-lg">
                    <Package className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-navy uppercase">Total</span>
                </div>
                <h3 className="text-slate-500 text-sm font-medium mb-1">Total Inventory</h3>
                <p className="text-3xl font-bold text-navy">{displayProducts.length}</p>
                <div className="mt-4 text-xs text-slate-400">Active products in database</div>
              </div>
            </div>

            {/* Inventory Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="font-bold text-navy">Inventory List</h2>
                <div className="relative">
                  <label htmlFor="inventory_search" className="sr-only">Search products</label>
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    id="inventory_search"
                    name="inventory_search"
                    type="text" 
                    placeholder="Search products..." 
                    className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-navy w-full md:w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                      <th className="px-6 py-4 font-bold">Product</th>
                      <th className="px-6 py-4 font-bold">Category</th>
                      <th className="px-6 py-4 font-bold">Model</th>
                      <th className="px-6 py-4 font-bold">Item</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {productsLoading ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-slate-400">Loading inventory...</td>
                      </tr>
                    ) : filteredProducts.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-slate-400">No products found.</td>
                      </tr>
                    ) : (
                      filteredProducts.map((product) => (
                        <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded bg-slate-100 overflow-hidden">
                                <img src={product.image_url} alt="" className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <div className="font-bold text-navy">{product.name}</div>
                                <div className="text-xs text-slate-400">{product.spec_badge}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">{product.category}</td>
                          <td className="px-6 py-4 text-sm text-slate-600 font-mono">{product.model}</td>
                          <td className="px-6 py-4 text-sm text-slate-600">{product.item}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : activeTab === 'warranty' ? (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="font-bold text-navy">Warranty Records</h2>
              <div className="relative">
                <label htmlFor="warranty_search" className="sr-only">Search serials</label>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  id="warranty_search"
                  name="warranty_search"
                  type="text" 
                  placeholder="Search serials..." 
                  className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-navy w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                    <th className="px-6 py-4 font-bold">Serial Number</th>
                    <th className="px-6 py-4 font-bold">Product</th>
                    <th className="px-6 py-4 font-bold">Expiry Date</th>
                    <th className="px-6 py-4 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {warrantiesLoading ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-slate-400">Loading warranties...</td>
                    </tr>
                  ) : filteredWarranties.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-slate-400">No warranty records found.</td>
                    </tr>
                  ) : (
                    filteredWarranties.map((warranty) => {
                      const product = products.find(p => p.id === warranty.product_id);
                      return (
                        <tr key={warranty.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-mono text-sm text-navy">{warranty.serial_number}</td>
                          <td className="px-6 py-4 text-sm text-slate-600">
                            <div>{product?.name || 'Unknown Product'}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{product?.model}</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">
                            {new Date(warranty.expiry_date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className={cn(
                              "px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                              warranty.status === 'active' ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                            )}>
                              {warranty.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-navy mb-6">SEO Health Gauge</h2>
                <div className="flex flex-col items-center justify-center h-64">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        className="text-slate-100"
                      />
                      <motion.circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={552.92}
                        initial={{ strokeDashoffset: 552.92 }}
                        animate={{ strokeDashoffset: 552.92 * (1 - 0.94) }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-blue-600"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-navy">94%</span>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Excellent</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-8 w-full text-center">
                    <div>
                      <div className="text-lg font-bold text-navy">98</div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Performance</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-navy">92</div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Accessibility</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-navy">95</div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Best Practices</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-navy mb-6">SEO Optimization Status</h2>
                <div className="space-y-6">
                  {[
                    { label: "Meta Tags Optimization", status: "Complete", score: 100 },
                    { label: "Image Alt Text Coverage", status: "In Progress", score: 85 },
                    { label: "Mobile Responsiveness", status: "Complete", score: 100 },
                    { label: "Page Load Speed", status: "Optimized", score: 92 },
                    { label: "Backlink Profile", status: "Growing", score: 78 },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-600">{item.label}</span>
                        <span className="font-bold text-navy">{item.score}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score}%` }}
                          className={cn(
                            "h-full",
                            item.score >= 90 ? "bg-green-500" : item.score >= 80 ? "bg-blue-500" : "bg-amber-500"
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-navy mb-6">Traffic & Engagement</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={visitorData}>
                    <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Line type="monotone" dataKey="visitors" stroke="#CC0000" strokeWidth={3} dot={{ r: 4, fill: '#CC0000' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
