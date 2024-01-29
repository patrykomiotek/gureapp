import { Header } from "@/ui/Header";
import { ReviewsList } from "./ReviewsList";
import { fetchReviews } from "@/services/reviews";

export default async function ReviewsPage() {
  const { records: reviews } = await fetchReviews(); // data.records

  return (
    <div>
      <Header>Reviews</Header>
      {/* <ReviewsList /> */}
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
