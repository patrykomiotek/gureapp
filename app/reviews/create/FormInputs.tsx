"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";

export const FormInputs = () => {
  const { action, pending } = useFormStatus();

  // console.log(action, pending);

  return (
    <>
      <Input name="author" label="Author" />
      <Textarea name="content" label="Content" />
      <Input name="points" type="number" label="Points" />
      <Button type="submit" disabled={pending} label="Submit" />
    </>
  );
};
