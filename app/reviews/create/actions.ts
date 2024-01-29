"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createReview } from "@/services/reviews";

export const createReviewAction = async (formData: FormData) => {
  console.log("Hello from console log", formData);

  const review = {
    author: (formData.get("author") as string) || "",
    content: (formData.get("content") as string) || "",
    points: Number(formData.get("points")) || 0,
  };

  // throw new Error("Oh no!");

  // createReview(review);
  // revalidatePath("/reviews");
  // redirect("/reviews");

  return { validation: "error #1" };
};
