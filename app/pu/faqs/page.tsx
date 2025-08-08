"use client";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards (Visa, Mastercard, American Express), UPI payments, Net Banking, and popular digital wallets like Paytm, PhonePe, and Google Pay. We also offer Cash on Delivery (COD) for orders under ₹5000.",
    category: "Payments & Orders",
  },
  {
    id: "delivery",
    question: "How long does delivery take?",
    answer:
      "Standard delivery takes 3-5 business days within metro cities and 5-7 business days for other locations. We offer express delivery (1-2 business days) for an additional charge in select cities. You'll receive tracking information as soon as your order ships.",
    category: "Payments & Orders",
  },
  {
    id: "safety",
    question: "Are your products safe for all pets?",
    answer:
      "Absolutely! All our products are vet-approved and rigorously tested for safety. We clearly label products with age, breed, and size recommendations. If your pet has specific allergies or health conditions, we recommend consulting our pet care specialists before purchasing.",
    category: "Product Quality",
  },
  {
    id: "returns",
    question: "Can I return or exchange a product?",
    answer:
      "Yes, we offer a 7-day easy return policy for unopened products. For defective or damaged items, we provide free returns within 15 days. Simply contact our support team to initiate the process. Some items like perishable foods and personalized products may not be returnable.",
    category: "Returns & Refunds",
  },
  {
    id: "subscriptions",
    question: "Do you offer subscriptions for recurring pet supplies?",
    answer:
      "Yes! Our PashuCare Auto-Delivery program lets you schedule regular deliveries of food, treats, and other essentials. You'll save 10% on subscription orders and can modify or cancel anytime through your account dashboard.",
    category: "Subscriptions",
  },
  {
    id: "contact",
    question: "How do I contact your pet care experts?",
    answer:
      "Our team of certified pet nutritionists and trainers are available 24/7 via live chat on our website or mobile app. You can also schedule a callback through your account or email us at experts@pashucare.com for non-urgent queries.",
    category: "Support",
  },
];

const categories = [...new Set(faqs.map((faq) => faq.category))];

export default function FAQPage() {
  const handleCatClick = (category: string) => {
    const id = category.replace(/\s+/g, "-");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Everything you need to know about PashuCare products and services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Category sidebar */}
        <aside className="lg:col-span-1 mb-8 lg:mb-0">
          <nav className="sticky top-24">
            <h3 className="font-semibold text-lg mb-4">Browse by Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="w-full text-left px-4 py-3 rounded-lg font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors duration-200"
                  onClick={() => handleCatClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* FAQ content */}
        <div className="lg:col-span-3 space-y-12">
          {categories.map((category) => (
            <section
              key={category}
              id={category.replace(/\s+/g, "-")}
              className="scroll-mt-24"
              tabIndex={-1}
              aria-labelledby={`${category}-heading`}
            >
              <h2
                id={`${category}-heading`}
                className="text-2xl font-bold mb-6 pb-2 border-b border-border"
              >
                {category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border rounded-xl"
                    >
                      <AccordionTrigger className="p-6 group cursor-pointer">
                        <span className="text-lg font-semibold text-left group-hover:text-primary transition-colors">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </section>
          ))}
        </div>
      </div>

      {/* Additional CTA */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our pet care specialists are available 24/7 to help with any queries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </Link>
          <Link
            href="tel:+18002587456"
            className="px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-accent"
          >
            Call Now: +1 800-258-7456
          </Link>
        </div>
      </div>
    </section>
  );
}
