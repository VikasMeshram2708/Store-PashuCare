interface NavLink {
  label: string;
  href: string;
}

// product types
type Product = {
  id: string;
  name: string;
  description?: string | null; // <-- updated here
  sku: string;
  barcode?: string | null; // and here
  price: number;
  salePrice?: number | null; // keep this as is if nullable
  image?: string | null;
  images: string[];
  stockQuantity: number;
  isActive: boolean;
  tags: string[];
  categoryId?: string;
  ownerId?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
};

interface ActResponse {
  success: boolean;
  message: string;
  data?: any;
  errors?: Record<string, string[]>; // For validation errors
}
