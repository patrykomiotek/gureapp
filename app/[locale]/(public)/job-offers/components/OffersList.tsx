import Link from "next/link";
import { fetchOffers } from "../service/offers";
import { Route } from "next";

export const OffersList = async () => {
  const offers = await fetchOffers();

  return (
    <div>
      {offers.map((offer) => (
        <div key={offer.public_id}>
          <div className="mb-2">
            <div>
              <p className="font-semibold">
                <Link href={`/job-offers/${offer.public_id}`}>
                  {offer.title}
                </Link>
              </p>
            </div>
            <div>{offer.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
