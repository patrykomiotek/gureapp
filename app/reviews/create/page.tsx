"use client";

import { useForm } from "react-hook-form";

import { Header } from "@/ui/Header";
import { createReviewAction, createReviewClientAction } from "./actions";
import { FormInputs } from "./FormInputs";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";
import { Button } from "@/ui/Button";
import { CreateReviewDto } from "@/services/reviews";

export default function CreateReview() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateReviewDto>();

  const handleFormSubmit = async (data: CreateReviewDto) => {
    const response = await createReviewClientAction(data);
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
