import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Product } from '../types';

const DUMMY_PRODUCTS: Product[] = [
  {
    id: 'dummy-1',
    name: "ML-X801HQ ONU",
    category: "FTTH",
    model: "X801HQ",
    item: "Optical Network Unit",
    spec_badge: "2.488Gbps",
    description: "High-performance fiber-to-the-home solution for seamless connectivity.",
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
    description: "Advanced IP camera system for 24/7 industrial surveillance.",
    image_url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
    created_at: new Date().toISOString()
  },
  {
    id: 'dummy-3',
    name: "ML-R1200 Router",
    category: "Networking",
    model: "R1200",
    item: "Enterprise Router",
    spec_badge: "Dual-Band",
    description: "High-performance networking with zero-latency core.",
    image_url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
    created_at: new Date().toISOString()
  },
  {
    id: 'dummy-4',
    name: "ML-P1000 Printer",
    category: "Office Tech",
    model: "P1000",
    item: "Laser Printer",
    spec_badge: "60 PPM",
    description: "Enterprise-grade laser printer for high-volume documentation.",
    image_url: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
    created_at: new Date().toISOString()
  }
];

export function useInventory() {
  const [products, setProducts] = useState<Product[]>(DUMMY_PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInventory();
  }, []);

  async function fetchInventory() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data && data.length > 0) {
        setProducts(data);
      } else {
        setProducts(DUMMY_PRODUCTS);
      }
    } catch (err: any) {
      setError(err.message);
      setProducts(DUMMY_PRODUCTS);
    } finally {
      setLoading(false);
    }
  }

  async function addProduct(product: Omit<Product, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('products')
      .insert([product])
      .select();
    if (error) throw error;
    setProducts([data[0], ...products]);
    return data[0];
  }

  async function updateProduct(id: string, updates: Partial<Product>) {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) throw error;
    setProducts(products.map(p => p.id === id ? data[0] : p));
    return data[0];
  }

  async function deleteProduct(id: string) {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    if (error) throw error;
    setProducts(products.filter(p => p.id !== id));
  }

  return { products, loading, error, addProduct, updateProduct, deleteProduct, refresh: fetchInventory };
}
