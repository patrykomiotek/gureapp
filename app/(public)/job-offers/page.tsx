import { Header } from "@/ui/Header";
import Link from "next/link";
import { fetchOffers } from "./service/offers";

export default async function JobOffersPage() {
  const offers = await fetchOffers();

  return (
    <div>
      <Header>Job offers</Header>
      <Link href="/job-offers/create">Create new offer</Link>
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
}
