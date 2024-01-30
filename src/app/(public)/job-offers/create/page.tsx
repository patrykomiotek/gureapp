"use client";

import Link from "next/link";
import { FormEvent, useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Button, Header, Input } from "@ui";

import { createJobOffer } from "./actions";

export default function CreateJobOfferPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(undefined);

  const handleSubmit = async (event: FormEvent) => {
    // event
    event.preventDefault();

    // event.currentTarget.valu;

    const data = new FormData(formRef.current);
    // data.set("title", "new job offer50");
    // data.set("description", "lorem ipsum");
    // data.set("position", "backend dev");
    // data.set("employer", "apple");
    // data.set("salary", "54000");

    const formObject = Object.fromEntries(data.entries());

    console.log({ data: data });
    const result = await createJobOffer(data);
    console.log({ result });
    toast.success("Offer was created!");
    // // startTransition(() => router.refresh()); // invalidate cache for /job-offer/create
    startTransition(() => router.push("/job-offers"));
    startTransition(() => router.refresh()); // invalidate cache for /job-offer
  };

  return (
    <div>
      <Header>Create job offer</Header>
      <form ref={formRef} onSubmit={handleSubmit}>
        {/* we can extract below components to server component */}
        <Input name="title" label="Title" />
        <Input name="description" label="Description" />
        <Input name="salary" label="Salary" type="number" />
        <Input name="position" label="Position" />
        <Input name="employer" label="Employee" />
        <Button type="submit" label="submit" />
      </form>
      <Link href="/job-offers">List of offers</Link>
    </div>
  );
}
