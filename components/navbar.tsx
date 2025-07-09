import { navItemsData } from "@/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, PawPrint, ShoppingBasket } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Navbar() {
  return (
    <nav className="bg-background p-3">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <PawPrint />
          PashuCare
        </h1>
        <ul className="hidden lg:flex items-center gap-4">
          {navItemsData.map((d, idx) => (
            <li key={idx}>
              <Link href={d.href}>{d.label}</Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <PawPrint />
                  PashuCare
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col items-center gap-4">
                {navItemsData.map((d, idx) => (
                  <li key={idx}>
                    <Link href={d.href}>{d.label}</Link>
                  </li>
                ))}
              </ul>
              <SheetFooter>
                <Button variant={"outline"}>
                  <ShoppingBasket />
                </Button>
                <Button variant={"link"}>Login</Button>
                <Button>Register</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <Button variant={"ghost"}>
            <ShoppingBasket />
          </Button>
          <Button variant={"link"}>Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </nav>
  );
}
