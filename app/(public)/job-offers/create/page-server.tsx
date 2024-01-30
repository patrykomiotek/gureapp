import Link from "next/link";

import { Button, Header, Input } from "@ui";

import { createJobOffer } from "./actions";

export default function CreateJobOfferPage() {
  return (
    <div>
      <Header>Create job offer</Header>
      <form action={createJobOffer}>
        <Input name="title" label="Title" />
        <Input name="description" label="Description" />
        <Input name="salary" label="Salary" />
        <Input name="position" label="Position" />
        <Input name="employer" label="Employee" />
        <Button label="submit" />
      </form>
      <Link href="/job-offers">List of offers</Link>
    </div>
  );
}
