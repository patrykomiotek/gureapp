import { Header } from "@/ui/Header";
import { createReviewAction } from "./actions";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";
import { Button } from "@/ui/Button";

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
