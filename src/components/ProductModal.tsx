import React from 'react';
import { X, Loader2, Upload, Image as ImageIcon, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { cn } from '../lib/utils';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: Omit<Product, 'id' | 'created_at'>) => Promise<void>;
}

export default function ProductModal({ isOpen, onClose, onSubmit }: ProductModalProps) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    name: '',
    category: '',
    model: '',
    item: '',
    spec_badge: '',
    description: '',
    image_url: '',
  });

  const [uploading, setUploading] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB.');
      return;
    }

    try {
      setUploading(true);
      setError(null);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image_url: reader.result as string }));
        setUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      setError('Failed to process image.');
      setUploading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.name || !formData.category || !formData.model || !formData.item || !formData.image_url) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      setLoading(true);
      await onSubmit(formData);
      onClose();
      // Reset form
      setFormData({
        name: '',
        category: '',
        model: '',
        item: '',
        spec_badge: '',
        description: '',
        image_url: '',
      });
    } catch (err: any) {
      setError(err.message || 'Failed to add product');
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
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-navy">Add New Product</h2>
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

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label htmlFor="product_name" className="block text-xs font-bold text-slate-500 uppercase mb-1">Product Name *</label>
                  <input
                    id="product_name"
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy text-sm"
                    placeholder="e.g. ML-X801HQ ONU"
                  />
                </div>

                <div>
                  <label htmlFor="product_category" className="block text-xs font-bold text-slate-500 uppercase mb-1">Category *</label>
                  <select
                    id="product_category"
                    required
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy text-sm"
                  >
                    <option value="">Select Category</option>
                    <option value="FTTH">FTTH</option>
                    <option value="Security">Security</option>
                    <option value="Networking">Networking</option>
                    <option value="Office Tech">Office Tech</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="product_model" className="block text-xs font-bold text-slate-500 uppercase mb-1">Model *</label>
                  <input
                    id="product_model"
                    required
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy text-sm"
                    placeholder="e.g. ML-X801HQ"
                  />
                </div>

                <div>
                  <label htmlFor="product_item" className="block text-xs font-bold text-slate-500 uppercase mb-1">Item *</label>
                  <input
                    id="product_item"
                    required
                    type="text"
                    name="item"
                    value={formData.item}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy text-sm"
                    placeholder="e.g. ONU"
                  />
                </div>

                <div>
                  <label htmlFor="product_spec" className="block text-xs font-bold text-slate-500 uppercase mb-1">Spec Badge</label>
                  <input
                    id="product_spec"
                    type="text"
                    name="spec_badge"
                    value={formData.spec_badge}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy text-sm"
                    placeholder="e.g. 2.488Gbps"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Product Image *</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className={cn(
                      "relative h-40 w-full border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all overflow-hidden",
                      formData.image_url ? "border-navy bg-navy/5" : "border-slate-200 hover:border-navy hover:bg-slate-50"
                    )}
                  >
                    {formData.image_url ? (
                      <>
                        <img 
                          src={formData.image_url} 
                          alt="Preview" 
                          className="absolute inset-0 w-full h-full object-cover opacity-40" 
                        />
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <div className="p-2 bg-white rounded-full shadow-sm">
                            <RefreshCw className="w-5 h-5 text-navy" />
                          </div>
                          <span className="text-xs font-bold text-navy bg-white px-2 py-1 rounded">Change Image</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="p-3 bg-slate-100 rounded-full text-slate-400">
                          {uploading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Upload className="w-6 h-6" />}
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-bold text-navy">Click to upload image</p>
                          <p className="text-[10px] text-slate-400 uppercase font-bold">PNG, JPG up to 5MB</p>
                        </div>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="product_description" className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label>
                  <textarea
                    id="product_description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-navy text-sm resize-none"
                    placeholder="Brief product description..."
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
                      Adding...
                    </>
                  ) : (
                    'Add Product'
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
