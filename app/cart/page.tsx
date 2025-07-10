import Link from "next/link";

export default function CartPage() {
  return (
    <div className="bg-background min-h-screen px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-3xl font-semibold text-neutral-800 dark:text-white mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-base mb-2">
          You {"haven't"} added any items yet.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-base mb-6">
          Start exploring our{" "}
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            product collection
          </Link>{" "}
          and find something {"you’ll"} love.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors duration-200"
        >
          Shop Products
        </Link>
      </div>
    </div>
  );
}
