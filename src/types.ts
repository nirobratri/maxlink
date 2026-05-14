export interface Product {
  id: string;
  name: string;
  category: string;
  model: string;
  item: string;
  spec_badge: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface WarrantyRecord {
  id: string;
  serial_number: string;
  product_id: string;
  expiry_date: string;
  status: 'active' | 'expired';
}
