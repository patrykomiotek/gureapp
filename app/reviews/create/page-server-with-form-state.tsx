import { Header } from "@/ui/Header";
import { createReviewAction } from "./actions";
import { FormInputs } from "./FormInputs";
import { useFormState } from "react-dom";

export default function CreateReview() {
  // const [state, formAction] = useFormState(createReviewAction, {});

  return (
    <div>
      <Header>Create review</Header>
      <form action={createReviewAction}>
        <FormInputs />
      </form>
    </div>
  );
}
