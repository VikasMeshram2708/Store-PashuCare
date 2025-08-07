import { PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background p-3">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-semibold sm:text-xl flex items-center gap-2">
          <span>
            <PawPrint />
          </span>
          PashuCare
        </h1>
        <address>
          <h2>Nagpur, Maharashtra, India</h2>
          <p>441110</p>
        </address>
      </div>
    </footer>
  );
}
