import { useFormState } from "react-dom";
import { Header } from "@ui";

import { createReviewAction } from "./actions";
import { FormInputs } from "./FormInputs";

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
