import p1 from "@/public/products/Animal Nail Cutter.jpg";
import p2 from "@/public/products/Dog Bath Brush.jpg";
import p3 from "@/public/products/Dog Mat.jpg";
import p4 from "@/public/products/Harness Belt.jpg";
import p5 from "@/public/products/Pet Grooming Gloves.jpg";
import { StaticImageData } from "next/image";

interface iNavItem {
  label: string;
  href: string;
}

export const navItemsData: iNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  // {
  //   label: "All Products",
  //   href: "/products",
  // },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

interface iProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: StaticImageData | string;
}

export const productsData: iProduct[] = [
  {
    id: 1,
    title: "Ergonomic Pet Nail Clipper",
    description:
      "Keep your furry friend's paws healthy and clean with our Ergonomic Pet Nail Clipper. Designed with a safety guard to prevent over-cutting and a non-slip grip for better control, it’s perfect for cats, dogs, and small animals. Say goodbye to expensive grooming visits!",
    price: 29.99,
    imageUrl: p1,
  },
  {
    id: 2,
    title: "2-in-1 Dog Bath & Massage Brush",
    description:
      "Make bath time a bonding experience with our 2-in-1 Dog Bath & Massage Brush. Featuring soft silicone bristles, this brush gently removes dirt while massaging your dog’s skin to promote healthy circulation. It’s easy to hold, easy to clean, and your pup will love it!",
    price: 39.99,
    imageUrl: p2,
  },
  {
    id: 3,
    title: "Waterproof Anti-Slip Dog Mat",
    description:
      "Ensure your pet’s comfort during rest or travel with our Waterproof Anti-Slip Dog Mat. This durable mat features a soft, cushioned surface and a non-slip bottom, ideal for crates, floors, or car seats. Machine washable and built to last through all seasons.",
    price: 49.99,
    imageUrl: p3,
  },
  {
    id: 4,
    title: "Adjustable Padded Harness Belt",
    description:
      "Walks just got safer and more comfortable with our Adjustable Padded Harness Belt. Designed to distribute pressure evenly and reduce strain on your dog’s neck, it’s perfect for energetic pups of all sizes. Reflective stitching adds visibility for nighttime strolls.",
    price: 49.99,
    imageUrl: p4,
  },
  {
    id: 5,
    title: "Gentle Touch Pet Grooming Gloves",
    description:
      "Turn grooming into a soothing massage with our Gentle Touch Pet Grooming Gloves. Perfect for cats and dogs, these flexible gloves remove loose fur and dirt while stimulating your pet’s skin. Breathable mesh keeps your hands cool and comfortable during use.",
    price: 49.99,
    imageUrl: p5,
  },
];
