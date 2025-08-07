interface NavLink {
  label: string;
  href: string;
}

// product types
type Product = {
  id: string;
  name: string;
  description?: string;
  sku: string;
  barcode?: string;
  price: number;
  salePrice?: number | null;
  image?: string;
  images: string[];
  stockQuantity: number;
  isActive: boolean;
  tags: string[];
  categoryId?: string;
  ownerId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
