"use client";

import { Button } from "@/ui/Button";
import { Header } from "@/ui/Header";
import { Input } from "@/ui/Input";
import { createJobOffer } from "./actions";

import Link from "next/link";
import { FormEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function CreateJobOfferPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: FormEvent) => {
    // event
    event.preventDefault();

    const data = new FormData();
    data.set("title", "new job offer50");
    data.set("description", "lorem ipsum");
    data.set("position", "backend dev");
    data.set("employer", "apple");
    data.set("salary", "54000");

    const result = await createJobOffer(data);
    console.log({ result });
    toast.success("Offer was created!"); // FIXME: small bug
    // startTransition(() => router.refresh()); // invalidate cache for /job-offer/create
    startTransition(() => router.push("/job-offers"));
    startTransition(() => router.refresh()); // invalidate cache for /job-offer
  };

  return (
    <div>
      <Header>Create job offer</Header>
      <form onSubmit={handleSubmit}>
        {/* we can extract below components to server component */}
        <Input name="title" label="Title" />
        <Input name="description" label="Description" />
        <Input name="salary" label="Salary" />
        <Input name="position" label="Position" />
        <Input name="employer" label="Employee" />
        <Button type="submit" label="submit" />
      </form>
      <Link href="/job-offers">List of offers</Link>
    </div>
  );
}
