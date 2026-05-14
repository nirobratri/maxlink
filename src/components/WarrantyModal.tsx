import React from 'react';
import { X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface WarrantyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (record: { serial_number: string; product_id: string; expiry_date: string }) => Promise<void>;
  products: Product[];
}

export default function WarrantyModal({ isOpen, onClose, onSubmit, products }: WarrantyModalProps) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    serial_number: '',
    product_id: '',
    expiry_date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.serial_number || !formData.product_id || !formData.expiry_date) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      setLoading(true);
      await onSubmit(formData);
      onClose();
      setFormData({ serial_number: '', product_id: '', expiry_date: '' });
    } catch (err: any) {
      setError(err.message || 'Failed to log warranty');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-navy">Log New Warranty</h2>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="warranty_serial" className="block text-xs font-bold text-slate-500 uppercase mb-1">Serial Number *</label>
                  <input
                    id="warranty_serial"
                    required
                    type="text"
                    name="serial_number"
                    value={formData.serial_number}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy text-sm"
                    placeholder="e.g. SN-99283-ML"
                  />
                </div>

                <div>
                  <label htmlFor="warranty_product" className="block text-xs font-bold text-slate-500 uppercase mb-1">Product *</label>
                  <select
                    id="warranty_product"
                    required
                    name="product_id"
                    value={formData.product_id}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy text-sm"
                  >
                    <option value="">Select Product</option>
                    {products.map(p => (
                      <option key={p.id} value={p.id}>{p.name} ({p.model})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="warranty_expiry" className="block text-xs font-bold text-slate-500 uppercase mb-1">Expiry Date *</label>
                  <input
                    id="warranty_expiry"
                    required
                    type="date"
                    name="expiry_date"
                    value={formData.expiry_date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy text-sm"
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-slate-200 text-slate-600 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 btn-signal flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Logging...
                    </>
                  ) : (
                    'Log Warranty'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
