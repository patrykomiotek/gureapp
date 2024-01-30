"use client";

import { useEffect, useState } from "react";
import { Review, fetchReviews } from "@services/reviews";

export const ReviewsList = () => {
  const [reviews, setReviews] = useState<Review[] | undefined>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchReviews();
        setReviews(data.records);
      } catch {
        // TODO: later
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <div>
        {reviews?.map((review) => (
          <p key={review.id}>
            {review.fields.content} {review.fields.points}{" "}
            {review.fields.author}
          </p>
        ))}
      </div>
    </div>
  );
};
