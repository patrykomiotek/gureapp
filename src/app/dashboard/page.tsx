import { JobOffer } from "@prisma/client";
import db from "@connection/db";

export default function Page() {
  // const jobOffer: JobOffer = {
  //   title: "Abc",
  //   description: "lorem ipsum",
  //   employer: "intel",
  //   position: "Frontend developer",
  //   salary: 10000,
  // };

  // await db.jobOffer.create({
  //   data: jobOffer
  // });

  // await db.jobOffer.findMany();

  return (
    <main className="container p-6">
      <h1>Dashboard page</h1>
    </main>
  );
}
