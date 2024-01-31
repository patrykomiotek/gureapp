import { unstable_noStore as noStore } from "next/cache";

import db from "@connection/db";

export const fetchOffers = async (
  query: string | null,
  city: string | null
) => {
  const whereQuery = {
    ...(query && {
      title: {
        contains: query,
      },
    }),
    ...(city && {
      city: {
        contains: city,
      },
    }),
  };

  return db.jobOffer.findMany({
    select: {
      public_id: true,
      title: true,
      description: true,
      position: true,
      salary: true,
      city: true,
    },
    where: whereQuery,
  });
};

export const fetchOffersCount = async () => {
  return await db.jobOffer.count();
};

export const fetchOffer = async (publicId: string) => {
  // noStore();
  return db.jobOffer.findUnique({ where: { public_id: publicId } });
};
