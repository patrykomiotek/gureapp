import { Header } from "@/ui/Header";
import { createReviewAction } from "./actions";
import { FormInputs } from "./FormInputs";

export default function CreateReview() {
  return (
    <div>
      <Header>Create review</Header>
      <form action={createReviewAction}>
        <FormInputs />
      </form>
    </div>
  );
}
