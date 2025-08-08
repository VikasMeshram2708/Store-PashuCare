import Link from "next/link";

export function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 text-center">
      <div className="relative overflow-hidden rounded-3xl p-12 text-white shadow-xl">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/80 via-purple-600/90 to-indigo-800/90"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Pamper Your Pet?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of happy pets enjoying PashuCare products today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 rounded-xl bg-white text-blue-600 font-bold text-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Shop Best Sellers
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border-2 border-white/80 text-white font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-purple-400/20 backdrop-blur-sm"></div>
      </div>
    </section>
  );
}
