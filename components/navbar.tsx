"use client";

import { Loader2, LogIn, LogOut, Menu, PawPrint, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { navData } from "@/data";

export function Navbar() {
  const { isLoading, user, isAuthenticated } = useKindeBrowserClient();
  return (
    <nav className="bg-background p-3">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-semibold sm:text-xl flex items-center gap-2">
          <span>
            <PawPrint />
          </span>
          PashuCare
        </h1>
        <ul className="hidden lg:flex items-center gap-3 text-sm">
          {navData?.map((d) => (
            <li key={d.label}>
              <Link href={d.href} className="capitalize">
                {d.label}
              </Link>
            </li>
          ))}
        </ul>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <PawPrint />
                PashuCare
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col items-center gap-3 text-sm">
              {navData?.map((d) => (
                <li key={d.label}>
                  <Link href={d.href} className="capitalize">
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
            <SheetFooter>
              {isLoading && <Loader2 className="animate-spin" />}
              {isAuthenticated && user?.id && (
                <LogoutLink>
                  <Button variant={"destructive"}>
                    <LogOut />
                    Logout
                  </Button>
                </LogoutLink>
              )}
              <LoginLink>
                <Button variant={"link"} className="w-full">
                  <LogIn />
                  Login
                </Button>
              </LoginLink>
              <RegisterLink>
                <Button className="w-full">
                  <User />
                  Register
                </Button>
              </RegisterLink>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <div className="hidden lg:flex items-center gap-3">
          {isLoading && <Loader2 className="animate-spin" />}
          {isAuthenticated && user?.id && (
            <LogoutLink>
              <Button variant={"destructive"}>
                <LogOut />
                Logout
              </Button>
            </LogoutLink>
          )}
          {!isAuthenticated && (
            <div className="flex items-center gap-3">
              <LoginLink>
                <Button variant={"link"}>
                  <LogIn />
                  Login
                </Button>
              </LoginLink>
              <RegisterLink>
                <Button>
                  <User />
                  Register
                </Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
