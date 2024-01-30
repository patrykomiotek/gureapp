import { notFound } from "next/navigation";
import { fetchOffer } from "../service/offers";
import { Header } from "@/ui/Header";
import { Metadata, ResolvingMetadata } from "next";

type Params = {
  params: {
    publicId: string;
  };
};

// export const metadata: Metadata = {
//   title: "Job details",
// };

export async function generateMetadata(
  { params }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const publicId = params["publicId"];

  const offer = await fetchOffer(publicId);

  return {
    title: offer?.title,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default async function JobDetailsPage({ params }: Params) {
  const publicId = params["publicId"];
  // if (!publicId) {
  //   notFound();
  // }
  const offer = await fetchOffer(publicId);
  if (!offer) {
    notFound(); // -> <Suspense fallback={not-found.tsx}>
  }

  return (
    <div>
      <Header>{offer.title}</Header>
      <p>{offer.description}</p>
      <p>{offer.position}</p>
    </div>
  );
}
