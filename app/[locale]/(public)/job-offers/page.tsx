import { Header } from "@/ui/Header";
import Link from "next/link";
import { Suspense } from "react";
import { OffersCount } from "./components/OffersCount";
import { OffersList } from "./components/OffersList";
import { Metadata } from "next";
import { PlusIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Job offers",
};

type Props = {
  searchParams: {
    query?: string;
  };
};

export default async function JobOffersPage({ searchParams }: Props) {
  // console.log({ searchParams });

  const query = searchParams.query || null;

  return (
    <div>
      <Header>Job offers</Header>
      <Link href="/job-offers/create" className="block underline my-4">
        <span className="flex">
          <PlusIcon width={20} height={20} /> Create new offer
        </span>
      </Link>

      <Suspense fallback={<p>Loading count...</p>}>
        <OffersCount />
      </Suspense>

      <Suspense key={query} fallback={<p>Loading offers...</p>}>
        <OffersList query={query} />
      </Suspense>
    </div>
  );
}
