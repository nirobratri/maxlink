import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { WarrantyRecord } from '../types';

export function useWarranty() {
  const [warranties, setWarranties] = useState<WarrantyRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWarranties();
  }, []);

  async function fetchWarranties() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('warranties')
        .select('*')
        .order('expiry_date', { ascending: true });

      if (error) throw error;
      setWarranties(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function addWarranty(record: Omit<WarrantyRecord, 'id' | 'status'>) {
    const status = new Date(record.expiry_date) > new Date() ? 'active' : 'expired';
    const { data, error } = await supabase
      .from('warranties')
      .insert([{ ...record, status }])
      .select();
    
    if (error) throw error;
    setWarranties([data[0], ...warranties]);
    return data[0];
  }

  return { warranties, loading, error, addWarranty, refresh: fetchWarranties };
}
