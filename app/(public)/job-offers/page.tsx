import { Header } from "@/ui/Header";
import Link from "next/link";
import { Suspense } from "react";
import { OffersCount } from "./components/OffersCount";
import { OffersList } from "./components/OffersList";

export default async function JobOffersPage() {
  return (
    <div>
      <Header>Job offers</Header>
      <Link href="/job-offers/create">Create new offer</Link>

      <Suspense fallback={<p>Loading count...</p>}>
        <OffersCount />
      </Suspense>

      <Suspense fallback={<p>Loading offers...</p>}>
        <OffersList />
      </Suspense>
    </div>
  );
}
