import { fetchOffers } from "../service/offers";

export const OffersList = async () => {
  const offers = await fetchOffers();

  return (
    <div>
      {offers.map((offer) => (
        <div key={offer.public_id}>
          <div className="mb-2">
            <div>
              <p className="font-semibold">{offer.title}</p>
            </div>
            <div>{offer.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
