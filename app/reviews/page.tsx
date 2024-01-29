import { Header } from "@/ui/Header";
import { ReviewsList } from "./ReviewsList";
import { fetchReviews } from "@/services/reviews";
import Link from "next/link";

export default async function ReviewsPage() {
  const { records: reviews } = await fetchReviews(); // data.records

  return (
    <div>
      <Header>Reviews</Header>
      {/* <ReviewsList /> */}
      <div>
        <Link
          href="/reviews/create"
          className="bg-blue-700 text-white p-4 rounded-sm"
        >
          Create new review
        </Link>
      </div>

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
}
