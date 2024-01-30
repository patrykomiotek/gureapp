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
