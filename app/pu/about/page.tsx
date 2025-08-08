// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { PawPrint, HeartPulse, Leaf, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section with Radial Gradient */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/15 to-transparent rounded-full blur-xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-6">
              Our Passion for Pets
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Pioneering pet wellness through innovation, compassion, and
              uncompromising quality since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary">
              <PawPrint className="h-5 w-5 mr-2" />
              <span className="font-medium">Our Ethos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Redefining Pet Care <span className="text-primary">Beyond</span>{" "}
              the Ordinary
            </h2>
            <p className="text-lg text-muted-foreground">
              At PashuCare, we combine cutting-edge veterinary science with
              nature's wisdom to create products that don't just meet needs—they
              anticipate them. Each formulation undergoes 47 quality checks
              before reaching your pet.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: HeartPulse,
                  title: "Health First",
                  desc: "Vet-approved formulations",
                },
                { icon: Leaf, title: "Natural", desc: "No harmful additives" },
                {
                  icon: ShieldCheck,
                  title: "Safety",
                  desc: "Rigorously tested",
                },
                { icon: PawPrint, title: "Joy", desc: "Pets love them!" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all"
                >
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
              alt="Happy dog with our products"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="text-white text-lg">
                "Every product is tested with the same love we give our own
                pets"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The <span className="text-primary">Hearts</span> Behind PashuCare
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A team united by their love for animals and commitment to
              excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                role: "Chief Veterinarian",
                bio: "12+ years in animal nutrition research",
                img: "/team/dr-priya.jpg",
              },
              {
                name: "Rahul Kapoor",
                role: "Founder & CEO",
                bio: "Passionate pet parent turned entrepreneur",
                img: "/team/rahul.jpg",
              },
              {
                name: "Neha Patel",
                role: "Product Innovation",
                bio: "Specializes in feline nutrition",
                img: "/team/neha.jpg",
              },
              {
                name: "Arjun Singh",
                role: "Customer Experience",
                bio: "Ensures every pet parent feels heard",
                img: "/team/arjun.jpg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-square">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold">
                    {member.name}
                  </h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-white/80">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 divide-x divide-border/50 border-y border-border/50">
            {[
              { value: "50,000+", label: "Happy Pets" },
              { value: "47", label: "Quality Checks" },
              { value: "12", label: "Vet Experts" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div key={i} className="py-12 text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </p>
                <p className="text-muted-foreground uppercase text-sm tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-1/2 left-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the{" "}
            <span className="text-primary">PashuCare</span> Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of pet parents who trust us for their furry family's
            wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link href="/products">Shop Premium Products</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="px-8 py-6 text-lg"
            >
              <Link href="/contact">Speak to Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
