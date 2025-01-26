interface ProductReview {
  customer: string;
  review: string;
  score: number;
}

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface ProductDetails {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: ProductReview[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: SalesData[];
}

export type { ProductDetails, ProductReview, SalesData };
