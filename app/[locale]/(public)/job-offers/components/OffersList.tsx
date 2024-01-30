import Link from "next/link";
import { fetchOffers } from "../service/offers";
import { Route } from "next";
import { SearchForm } from "./SearchForm";

type Props = {
  query: string | null;
};

export const OffersList = async ({ query }: Props) => {
  const offers = await fetchOffers(query);

  return (
    <>
      <SearchForm />
      <div>
        {offers.map((offer) => (
          <div key={offer.public_id}>
            <div className="mb-2">
              <div>
                <p className="font-semibold">
                  <Link href={`/en/job-offers/${offer.public_id}`}>
                    {offer.title}
                  </Link>
                </p>
              </div>
              <div>{offer.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
