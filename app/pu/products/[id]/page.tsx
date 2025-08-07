import { WishlistBtn } from "@/components/products/wishlist-btn";
import { getProduct } from "@/lib/getproducts";
import {
  IndianRupee,
  Heart,
  ShoppingCart,
  Star,
  ChevronRight,
  Tag,
  Barcode,
  Box,
  ListChecks,
} from "lucide-react";
import Image from "next/image";

type DetailedPageParams = {
  params: {
    id: string;
  };
};

export default async function DetailedPage({ params }: DetailedPageParams) {
  const { id } = await params;
  const { data } = await getProduct({ pid: id });

  // Calculate discount percentage if sale price exists
  const discountPercentage = data.salePrice
    ? Math.round(((data.price - data.salePrice) / data.price) * 100)
    : 0;

  return (
    <div className="bg-background px-4 py-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="hover:text-primary cursor-pointer">Home</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="hover:text-primary cursor-pointer">Products</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-primary">{data.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 relative group">
              <Image
                src="https://is.gd/H578mV"
                alt={data.name || "Product Image"}
                width={600}
                height={600}
                className="object-cover w-full h-full group-hover:opacity-90 transition-opacity"
                priority
                quality={90}
              />
              {discountPercentage > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {discountPercentage}% OFF
                </div>
              )}
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5 text-gray-700 hover:text-red-500" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            {data.images && data.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {data.images.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className="cursor-pointer border-2 border-transparent hover:border-primary rounded-md overflow-hidden transition-all"
                  >
                    <Image
                      src="https://is.gd/H578mV"
                      alt={`${data.name} image ${idx + 1}`}
                      width={120}
                      height={120}
                      className="object-cover w-full h-24"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col justify-start">
            <h1 className="text-3xl font-bold mb-2">{data.name}</h1>

            {/* Rating and Reviews */}
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                (42 reviews)
              </span>
            </div>

            {/* Price Section */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-2xl font-semibold flex items-center gap-1">
                <IndianRupee className="w-5 h-5" />
                <p>{data.salePrice ?? data.price}</p>
              </div>
              {data.salePrice && (
                <div className="line-through flex items-center gap-1 text-gray-500">
                  <IndianRupee className="w-4 h-4" />
                  {data.price.toFixed(2)}
                </div>
              )}
            </div>

            {data.description && (
              <p className="mb-6 whitespace-pre-line">{data.description}</p>
            )}

            {/* Product Metadata */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <ListChecks className="w-5 h-5 text-gray-500 mr-2" />
                <span className="font-medium">SKU:</span>
                <span className="ml-2 text-muted-foreground">{data.sku}</span>
              </div>
              <div className="flex items-center">
                <Barcode className="w-5 h-5 text-gray-500 mr-2" />
                <span className="font-medium">Barcode:</span>
                <span className="ml-2 text-gray-600">
                  {data.barcode ?? "N/A"}
                </span>
              </div>
              <div className="flex items-center">
                <Box className="w-5 h-5 text-gray-500 mr-2" />
                <span className="font-medium">Stock:</span>
                <span
                  className={`ml-2 ${
                    data.stockQuantity > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {data.stockQuantity > 0
                    ? `${data.stockQuantity} available`
                    : "Out of stock"}
                </span>
              </div>
            </div>

            {/* Tags */}
            {data.tags && data.tags.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Tag className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="font-medium">Tags:</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {data.tags.map((tag: string) => (
                    <li
                      key={tag}
                      className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors w-full sm:w-auto">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              {/* Wishlist button */}
              {/* TODO: id the product is already wishlisted then show heart icon filled with red color */}
              <WishlistBtn productId={data.id ?? "0"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
