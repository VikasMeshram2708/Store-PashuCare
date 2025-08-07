"use client";

import { useState } from "react";
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

function AuthSection({
  isAuthenticated,
  isLoading,
  userId,
  onLogout,
}: {
  isAuthenticated: boolean;
  isLoading: boolean;
  userName?: string | null;
  userId?: string | null;
  onLogout?: () => void;
}) {
  if (isLoading) {
    return (
      <Button disabled aria-label="Loading" variant="default">
        <Loader2 className="animate-spin mr-2" />
        Loading...
      </Button>
    );
  }

  if (isAuthenticated && userId) {
    return (
      <LogoutLink>
        <Button
          variant="destructive"
          onClick={onLogout}
          aria-label="Logout"
          className="flex items-center gap-2"
        >
          <LogOut />
          Logout
        </Button>
      </LogoutLink>
    );
  }

  return (
    <div className="flex gap-3 flex-col sm:flex-row sm:items-center w-full sm:w-auto">
      <LoginLink>
        <Button
          variant="link"
          className="w-full sm:w-auto flex items-center gap-2 justify-center"
        >
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
  );
}

export function Navbar() {
  const { isLoading, user, isAuthenticated } = useKindeBrowserClient();
  const [sheetOpen, setSheetOpen] = useState(false);

  const userName = user?.given_name ?? user?.email ?? "User";

  function closeMenu() {
    setSheetOpen(false);
  }

  return (
    <nav
      className="bg-background shadow-sm px-4 py-3 sm:py-4 sticky top-0 z-50 text-foreground"
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-extrabold text-2xl tracking-tight hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
          aria-label="Go to homepage"
        >
          <PawPrint className="w-7 h-7" aria-hidden="true" />
          PashuCare
        </Link>

        {/* Desktop Links */}
        <ul
          className="hidden lg:flex items-center gap-6 font-medium"
          role="menubar"
        >
          {navData.map((item) => (
            <li key={item.label} role="none">
              <Link
                href={item.href}
                className="capitalize hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                role="menuitem"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center gap-4">
          {isLoading ? (
            <Button
              disabled
              aria-label="Loading"
              variant="default"
              className="flex items-center gap-2"
            >
              <Loader2 className="animate-spin" />
              Loading...
            </Button>
          ) : isAuthenticated && user?.id ? (
            <>
              <span className="font-semibold select-none truncate max-w-xs">
                Welcome, {userName}
              </span>
              <LogoutLink>
                <Button
                  variant="destructive"
                  aria-label="Logout"
                  className="flex items-center gap-2"
                >
                  <LogOut />
                  Logout
                </Button>
              </LogoutLink>
            </>
          ) : (
            !isLoading && (
              <>
                <LoginLink>
                  <Button variant="link" className="flex items-center gap-2">
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
              </>
            )
          )}
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger
            aria-label="Open mobile menu"
            className="lg:hidden p-2 rounded-md hover:bg-accent hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Menu className="w-6 h-6" />
          </SheetTrigger>

          <SheetContent className="flex flex-col justify-between p-4">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 font-bold text-lg">
                <PawPrint aria-hidden="true" />
                PashuCare
              </SheetTitle>
            </SheetHeader>

            <ul
              className="flex flex-col gap-4 mt-4"
              role="menu"
              aria-label="Mobile navigation"
            >
              {navData.map((item) => (
                <li key={item.label} role="none">
                  <Link
                    href={item.href}
                    className="capitalize block px-4 py-2 rounded hover:bg-accent hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <SheetFooter className="pt-6">
              <AuthSection
                isAuthenticated={!!isAuthenticated}
                isLoading={!!isLoading}
                userName={userName}
                userId={user?.id}
                onLogout={closeMenu}
              />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
