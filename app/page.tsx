import { CTA } from "@/components/home/cta";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Usp } from "@/components/home/usp";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Features / Categories */}
      <Features />
      {/* USP Section */}
      <Usp />
      {/* CTA Section */}
      <CTA />
    </main>
  );
}
