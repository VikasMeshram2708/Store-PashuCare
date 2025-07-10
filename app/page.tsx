import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productsData } from "@/data";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background px-4 py-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8">Latest Drops</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((prd, idx) => (
            <Card
              key={idx}
              className="hover:shadow-md transition-shadow duration-200"
            >
              <CardHeader>
                <CardAction>
                  <Heart color="red" size={20} />
                </CardAction>
              </CardHeader>

              <CardContent className="p-4 space-y-4">
                <Image
                  src={prd.imageUrl}
                  alt={prd.title}
                  width={500}
                  height={500}
                  className="w-auto h-auto object-cover object-center"
                />
                <CardTitle className="line-clamp-2">{prd.title}</CardTitle>
              </CardContent>

              <CardFooter className="px-4 pb-4 flex items-center justify-between">
                <span className="text-base font-semibold">
                  ₹{prd.price.toFixed(2)}
                </span>
                <Button size="sm" className="text-sm font-medium">
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
}
