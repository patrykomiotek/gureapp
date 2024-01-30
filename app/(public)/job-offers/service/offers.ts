import db from "../../../../prisma/db";

export const fetchOffers = async () => {
  return db.jobOffer.findMany({
    select: {
      public_id: true,
      title: true,
      description: true,
      position: true,
      salary: true,
    },
  });
};

export const fetchOffersCount = async () => {
  return await db.jobOffer.count();
};

export const fetchOffer = async (publicId: string) => {
  return db.jobOffer.findUnique({ where: { public_id: publicId } });
};
