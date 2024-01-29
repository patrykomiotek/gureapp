import { unstable_noStore as noStore } from "next/cache";
import { z } from "zod";

const BASE_URL = "https://api.airtable.com/v0/appRbMdcioCPUAEG6";
const TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN;

export const createReviewSchema = z.object({
  author: z.string().min(1, "Author is required"),
  content: z
    .string()
    .min(5, "Content should have at least 5 characters")
    .or(z.literal("")),
  points: z
    .number()
    .min(1, "Points should at least 1")
    .max(5, "Points should be max 5"),
});

export type CreateReviewDto = z.infer<typeof createReviewSchema>;

export type Review = {
  id: string;
  fields: {
    author: string;
    points: number;
    content: string;
    created_at: string;
  };
};

// export type CreateReviewDto = Omit<Review["fields"], "created_at">;

type RecordsResponse = {
  records: Review[];
};

// { records: [{ fields: { author, points, content } }]}

export const fetchReviews = async (): Promise<RecordsResponse> => {
  noStore();
  // uses url as a cache, ttl 3600
  return fetch(`${BASE_URL}/reviews`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-type": "application/json",
      // cache: "no-store",
      // revalidate: 0,
    },
  }).then((response) => response.json());
};

export const createReview = async (data: CreateReviewDto) => {
  return fetch(`${BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-type": "application/json",
      // cache: "no-store",
      // revalidate: 0,
    },
    body: JSON.stringify({ records: [{ fields: data }] }),
  }).then((response) => response.json());
};
