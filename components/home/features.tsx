export function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Everything Your Pet Needs
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From daily essentials to special treats, we've got all your pet care
          covered.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Dog Essentials",
            description:
              "Premium food, durable toys, comfy beds, and health supplies for your canine companion.",
            img: "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?auto=format&fit=crop&w=300&q=80",
            link: "/products?category=dog",
          },
          {
            title: "Cat Comforts",
            description:
              "Everything to keep your feline happy - from scratchers to gourmet treats.",
            img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80",
            link: "/products?category=cat",
          },
          {
            title: "Small Pets & Birds",
            description:
              "Specialized care for rabbits, birds, fish, and other small pets.",
            img: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=300&q=80",
            link: "/products?category=smallpet",
          },
        ].map((category, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
              <p className="mb-4 text-gray-200">{category.description}</p>
              <a
                href={category.link}
                className="inline-flex items-center font-medium text-white hover:text-primary-foreground group-hover:underline"
              >
                Explore {category.title.split(" ")[0]} Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
