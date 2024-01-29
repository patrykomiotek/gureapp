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

export const fetchReviews = async (): Promise<RecordsResponse> => {
  return fetch(`${BASE_URL}/reviews`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
};
