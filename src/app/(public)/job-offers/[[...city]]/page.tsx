import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import { Header } from "@ui";

import { OffersCount } from "./components/OffersCount";
import { OffersList } from "./components/OffersList";
import { SearchForm } from "./components/SearchForm";

export const metadata: Metadata = {
  title: "Job offers",
};

type Props = {
  params?: {
    city?: string[];
  };
  searchParams: {
    query?: string;
  };
};

// export const revalidate = 3600;

export default async function JobOffersPage({ params, searchParams }: Props) {
  // console.log({ searchParams });
  // setRequestLocale(locale);

  console.log({ params });

  const query = searchParams.query || null;
  const city = params?.city?.[0] || null;

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

      <SearchForm />

      <Suspense key={`${query}-${city}`} fallback={<p>Loading offers...</p>}>
        <OffersList query={query} city={city} />
      </Suspense>
    </div>
  );
}
