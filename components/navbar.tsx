"use client";

import { navItemsData } from "@/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOut, Menu, PawPrint, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

export function Navbar() {
  const { user } = useKindeBrowserClient();
  return (
    <nav className="bg-background p-3">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <PawPrint />
          PashuCare
        </h1>
        <ul className="hidden lg:flex items-center gap-6">
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
                  <Link href={"/cart"}>
                    <ShoppingCart />
                  </Link>
                </Button>

                {user ? (
                  <Button asChild variant={"destructive"}>
                    <LogoutLink>
                      <LogOut />
                      Logout
                    </LogoutLink>
                  </Button>
                ) : (
                  <div className="flex items-center gap-2">
                    <LoginLink>
                      <Button variant={"link"}>Login</Button>
                    </LoginLink>
                    <RegisterLink>
                      <Button>Register</Button>
                    </RegisterLink>
                  </div>
                )}
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <Button variant={"ghost"}>
            <Link href={"/cart"}>
              <ShoppingCart />
            </Link>
          </Button>
          {user ? (
            <Button asChild variant={"destructive"}>
              <LogoutLink>
                <LogOut />
                Logout
              </LogoutLink>
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <LoginLink>
                <Button variant={"link"}>Login</Button>
              </LoginLink>
              <RegisterLink>
                <Button>Register</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
