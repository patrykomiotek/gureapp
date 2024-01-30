import { fetchOffersCount } from "../service/offers";

export const OffersCount = async () => {
  const offersCount = await fetchOffersCount();

  return <div>Amount: {offersCount}</div>;
};
