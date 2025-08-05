"use server";

import { FAVOURITE, FAVOURITE_PRODUCT } from "@/lib/models/favourites";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type AddToFavResponse = {
  success: boolean;
  message: string;
};

type MarkedFvtResponse = {
  data?: any;
} & AddToFavResponse;

export async function AddToFav({
  productId,
}: {
  productId: string;
}): Promise<AddToFavResponse> {
  if (!productId) {
    return {
      success: false,
      message: "Missing product ID.",
    };
  }

  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();
  const userId = user?.id;

  if (!userId || !(await isAuthenticated())) {
    return {
      success: false,
      message: "Unauthorized access.",
    };
  }

  const payload = { productId, userId };

  const parsed = FAVOURITE_PRODUCT.safeParse(payload);
  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid data provided.",
    };
  }

  const existing = await FAVOURITE.findOne({ productId, userId });
  console.log("existing", existing);
  if (existing) {
    await FAVOURITE.deleteOne({ productId });

    return {
      success: true,
      message: "Product removed from favourites.",
    };
  }

  const timestamp = new Date().toISOString();

  const insertion = await FAVOURITE.insertOne({
    ...payload,
    createdAt: timestamp,
    updatedAt: timestamp,
  });

  if (!insertion.insertedId) {
    return {
      success: false,
      message: "Failed to add to favourites. Please try again.",
    };
  }

  return {
    success: true,
    message: "Product added to favourites.",
  };
}

// check if its  marked as favroutie
export async function GetFvtItems(): Promise<MarkedFvtResponse> {
  // auth check
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const userId = user?.id;
  if (!userId || !(await isAuthenticated())) {
    return {
      success: false,
      message: "Unauthorized access.",
    };
  }

  // get the list of all the items in favrouties collection
  // check if the specific product is found
  const fvtItems = await FAVOURITE.find({ userId }).toArray();
  const items = fvtItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  console.log("fvtItems", fvtItems);

  console.log("fvt-items", fvtItems);

  return {
    success: true,
    message: "Product is marked favourites.",
    data: items,
  };
}
