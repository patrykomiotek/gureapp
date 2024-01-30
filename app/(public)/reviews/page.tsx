import Link from "next/link";

import { fetchReviews } from "@services/reviews";
import { Header } from "@ui";
import { ReviewsList } from "./ReviewsList";

export default async function ReviewsPage() {
  const { records: reviews } = await fetchReviews(); // data.records

  return (
    <div>
      <Header>Reviews</Header>
      {/* <ReviewsList /> */}
      <div className="flex">
        <Link
          href="/reviews/create"
          className=" bg-blue-700  text-white p-4 rounded-sm"
        >
          Create new review
        </Link>
      </div>

      <div className="mt-2">
        {reviews?.map((review) => (
          <p key={review.id} className="mb-4">
            {review.fields.content} {review.fields.points}{" "}
            {review.fields.author}
          </p>
        ))}
      </div>
    </div>
  );
}
