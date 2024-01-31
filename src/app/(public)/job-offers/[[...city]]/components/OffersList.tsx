import { Route } from "next";
import Link from "next/link";

import { fetchOffers } from "../service/offers";
import { SearchForm } from "./SearchForm";

type Props = {
  query: string | null;
  city: string | null;
};

export const OffersList = async ({ query, city }: Props) => {
  const offers = await fetchOffers(query, city);

  return (
    <>
      <div>
        {offers.map((offer) => (
          <div key={offer.public_id}>
            <div className="mb-2">
              <div>
                <p className="font-semibold">
                  <Link href={`/offers/${offer.public_id}`}>{offer.title}</Link>
                </p>
              </div>
              <div>{offer.description}</div>
              <div>City: {offer.city}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
