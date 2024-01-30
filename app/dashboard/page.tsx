import { JobOffer } from "@prisma/client";

export default function Page() {
  const jobOffer: JobOffer = {
    title: "Abc",
    description: "lorem ipsum",
    employer: "intel",
    position: "Frontend developer",
    salary: 10000,
  };

  return (
    <main className="container p-6">
      <h1>Dashboard page</h1>
    </main>
  );
}
