import { unstable_noStore as noStore } from "next/cache";

const BASE_URL = "https://api.airtable.com/v0/appRbMdcioCPUAEG6";
const TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN;

export type Review = {
  id: string;
  fields: {
    author: string;
    points: number;
    content: string;
    created_at: string;
  };
};

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

export const createReview = async (
  data: Omit<Review["fields"], "created_at">
) => {
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
