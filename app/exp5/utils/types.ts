export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  inStock: boolean;
  image: string;
  description: string;
}

export interface PerformanceMetrics {
  label: string;
  before: string;
  after: string;
  improvement: string;
}
