import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getProducts } from "@/lib/getproducts";
import { Filter, IndianRupeeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function ProductsPage() {
  const { data } = await getProducts();

  return (
    <div className="bg-background px-4 py-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl sm:text-3xl font-medium">Recently Dropped</h1>
          <Button>
            <Filter />
            Filter
          </Button>
        </div>

        <Suspense
          fallback={<p className="text-xl text-muted-foreground">Loading...</p>}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
            {data?.map((prd) => (
              <Card
                key={prd.id}
                className="p-0 bg-transparent outline-none border-none"
              >
                <CardContent className="p-0">
                  <Image
                    src="https://is.gd/H578mV"
                    alt={prd.name}
                    width={500}
                    height={500}
                    className="w-full h-full rounded-md object-cover object-center hover:scale-105 duration-300 ease-in-out"
                  />
                </CardContent>
                <CardHeader className="p-0">
                  <CardDescription className="hover:underline hover:underline-offset-4">
                    <Link href={`/pu/products/${prd.id}`}>{prd.name}</Link>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-0 -mt-2 flex items-center justify-between">
                  <Button>Buy Now</Button>
                  <Button variant={"link"}>
                    <IndianRupeeIcon />
                    {prd.price ?? 999.99}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </ul>
        </Suspense>
      </div>
    </div>
  );
}
