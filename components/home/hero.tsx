export function Hero() {
  return (
    <section className="w-full px-6 py-16 sm:py-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <p className="text-sm font-medium text-primary">
              Pawsitively Perfect Products
            </p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Premium Care <br />
            <span className="text-primary">For Your Furry</span> Family
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            Handpicked, vet-approved products delivered to your doorstep.
            Because they deserve nothing but the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="/products"
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:bg-primary/90 hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Shop Now
            </a>
            <a
              href="/about"
              className="px-8 py-4 rounded-xl border-2 border-primary/30 text-primary font-semibold text-lg hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          <div className="flex items-center gap-4 pt-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? "women" : "men"}/${item + 20}.jpg`}
                  alt="Happy customer"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div>
              <p className="font-medium">Trusted by 10,000+ pet parents</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  4.9/5 (2,483 reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&w=800&q=80"
              alt="Happy pets with PashuCare products"
              className="rounded-2xl shadow-2xl object-cover w-full max-w-xl h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-black">100% Satisfaction</p>
                  <p className="text-sm text-muted-foreground">
                    Quality Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
