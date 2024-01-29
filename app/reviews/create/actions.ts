"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// import { CreateReviewDto, createReview } from "@/services/reviews";
import {
  CreateReviewDto,
  createReview,
  createReviewSchema,
} from "@/services/reviews";
import { ZodError } from "zod";

export const createReviewAction = async (formData: FormData) => {
  console.log("Hello from console log", formData);

  const review = {
    author: (formData.get("author") as string) || "",
    content: (formData.get("content") as string) || "",
    points: Number(formData.get("points")) || 0,
  };

  // throw new Error("Oh no!");

  createReview(review);
  revalidatePath("/reviews");
  redirect("/reviews");

  // return { validation: "error #1" };
};

export const createReviewClientAction = async (formData: CreateReviewDto) => {
  console.log("Hello from console log", formData);

  try {
    const result = createReviewSchema.parse(formData); // throw an exception, safeParse don't
    console.log(result);

    // throw new Error("Oh no!");

    await createReview(formData);
    revalidatePath("/reviews");
    redirect("/reviews");
  } catch (error) {
    if (error instanceof ZodError) {
      // validation error
      // log
      // console.log("zod error?", error.message);
      // return JSON.stringify(error.message); // NextResponse
      // throw new Error("test");
      // return JSON.stringify({ validation: "one two three" }); // NextResponse
      return {
        errors: error.flatten().fieldErrors,
      };
    }
  }
};
