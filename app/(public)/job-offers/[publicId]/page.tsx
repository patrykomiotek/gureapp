import { notFound } from "next/navigation";
import { fetchOffer } from "../service/offers";
import { Header } from "@/ui/Header";

type Params = {
  params: {
    publicId: string;
  };
};

export default async function JobDetailsPage({ params }: Params) {
  const publicId = params["publicId"];
  // if (!publicId) {
  //   notFound();
  // }
  const offer = await fetchOffer(publicId);
  if (!offer) {
    notFound();
  }

  return (
    <div>
      <Header>{offer.title}</Header>
      <p>{offer.description}</p>
      <p>{offer.position}</p>
    </div>
  );
}
