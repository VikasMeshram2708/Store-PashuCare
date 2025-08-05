export function AddToCart(productId: string, userId: string) {
  try {
    // verify the userId
    // save the product to orders collection
  } catch (error) {
    const err =
      (error as Error).message ?? "Something went wrong. Please try again.";
    throw new Error("Internal Server Error");
  }
}
