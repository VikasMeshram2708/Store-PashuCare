import { PawPrint } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-screen-xl mx-auto flex items-center">
        <h1 className="flex items-center text-2xl font-semibold">
          <PawPrint />
          PashuCare
        </h1>
      </div>
    </footer>
  );
}
