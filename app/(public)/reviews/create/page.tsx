"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Header, Input, Textarea, Button } from "@ui";
import { CreateReviewDto, createReviewSchema } from "@services/reviews";

import { createReviewAction, createReviewClientAction } from "./actions";
import { FormInputs } from "./FormInputs";

// TODO: move to separate file
// "use client";
// type Props = { children: React.ReactNode };
// export const ClientWrapper = ({ children }: Props) => children;

export default function CreateReview() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateReviewDto>({
    resolver: zodResolver(createReviewSchema),
  });

  /**
   * Allows us to get result of server action
   *
   * @param data
   */
  const handleFormSubmit = async (data: CreateReviewDto) => {
    // line below makes request POST /create
    const response = await createReviewClientAction(data);
    // server validation errors
    console.log(response);
  };

  return (
    <div>
      <Header>Create review</Header>
      {/* <form action={createReviewAction}>
        <FormInputs />
      </form> */}

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          {...register("author")}
          name="author"
          label="Author"
          error={errors.author}
        />
        <Textarea
          {...register("content")}
          name="content"
          label="Content"
          error={errors.content}
        />
        <Input
          {...register("points", { valueAsNumber: true })}
          name="points"
          type="number"
          label="Points"
          error={errors.points}
        />
        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
}
