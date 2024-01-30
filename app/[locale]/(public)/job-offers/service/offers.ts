import { unstable_noStore as noStore } from "next/cache";

import db from "../../../../../prisma/db";

export const fetchOffers = async (query: string | null) => {
  if (query) {
    return db.jobOffer.findMany({
      select: {
        public_id: true,
        title: true,
        description: true,
        position: true,
        salary: true,
      },
      where: {
        title: {
          contains: query,
        },
      },
    });
  } else {
    return db.jobOffer.findMany({
      select: {
        public_id: true,
        title: true,
        description: true,
        position: true,
        salary: true,
      },
    });
  }
};

export const fetchOffersCount = async () => {
  return await db.jobOffer.count();
};

export const fetchOffer = async (publicId: string) => {
  // noStore();
  return db.jobOffer.findUnique({ where: { public_id: publicId } });
};
