"use server";

import { JobOffer } from "@prisma/client";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type CreateJobOffer = Omit<JobOffer, "id" | "public_id">;

export const createJobOffer = async (formData: FormData) => {
  // const jobOffer = Object.fromEntries(formData.entries()) as CreateJobOffer;
  const jobOffer: CreateJobOffer = {
    // public_id: formData.get('public_id') as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    employer: formData.get("employer") as string,
    salary: parseInt(formData.get("salary") as string),
    position: formData.get("position") as string,
  };
  // console.log({ jobOffer });

  const offer = await db.jobOffer.create({ data: jobOffer });
  console.log({ offer });

  // TODO: belowe lines are for server only
  // revalidatePath("/job-offers");
  // redirect("/job-offers");

  return { status: "ok" };
};
