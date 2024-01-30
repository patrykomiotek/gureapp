import { Header, Input, Textarea, Button } from "@ui";

import { createReviewAction } from "./actions";

export default function CreateReview() {
  return (
    <div>
      <Header>Create review</Header>
      <form action={createReviewAction}>
        <Input name="author" label="Author" />
        <Textarea name="content" label="Content" />
        <Input name="points" type="number" label="Points" />
        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
}
