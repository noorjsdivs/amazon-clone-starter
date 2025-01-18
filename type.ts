type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

type Review = {
  reviewerName: string;
  rating: number;
  comment: string;
  reviewerEmail: string;
};

export type Product = {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: Dimensions;
  discountPercentage: number;
  id: number;
  images: string[];
  meta: Meta;
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Review[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight?: number;
  quantity?: number | undefined;
};

export interface Session {
  user: {
    expires: any;
    user: {
      email: string;
      image: string;
      name: string;
    };
  };
}

export interface CategoryItems {
  categories: [string];
}

export interface NavItem {
  title: string;
  items: string[];
  subItems: string[][];
}

export interface Order {
  id: string; // Unique ID of the order (from doc.id)
  email: string; // Customer's email
  value: {
    amount: number; // Total order amount
    invoice: {
      id: string; // Invoice ID
      invoice_pdf: string; // PDF link to the invoice
      invoice_url: string; // URL link to the invoice
    };
    items: {
      id: string; // Unique ID of the item
      name: string; // Name of the product
      price: number; // Price of the product
      quantity: number; // Quantity of the product
      product_details: {
        metadata?: Record<string, any>; // Additional metadata
        package_dimensions?: any; // Package dimensions (if applicable)
        statement_descriptor?: string | null; // Optional descriptor
        created: number; // Timestamp of product creation
        updated?: number; // Timestamp of product update
        type?: string; // Type of the product (e.g., service, physical, etc.)
        images?: string[]; // Array of image URLs
      };
    }[];
  };
}
