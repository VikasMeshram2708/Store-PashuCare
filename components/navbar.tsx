import { PawPrint } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-background p-3">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-semibold sm:text-xl flex items-center gap-2">
          <span>
            <PawPrint />
          </span>
          PashuCare
        </h1>
      </div>
    </nav>
  );
}
