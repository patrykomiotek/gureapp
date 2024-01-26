import { User, Invoice, Customer, Revenue } from '@prisma/client';
import bcrypt from 'bcrypt';
import {
  invoices,
  customers,
  revenue,
  users,
} from '../app/lib/placeholder-data';

import db from './db';

async function main() {
  await Promise.all(
    users.map(async (user: User) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          password: hashedPassword,
        },
      });
    }),
  );

  await Promise.all(
    customers.map(async (customer: Customer) =>
      db.customer.create({
        data: {
          id: customer.id,
          name: customer.name,
          email: customer.email,
          image_url: customer.image_url,
        },
      }),
    ),
  );

  await Promise.all(
    invoices.map((invoice) =>
      db.invoice.create({
        data: {
          customer: {
            connect: {
              id: invoice.customer_id,
            },
          },
          amount: invoice.amount,
          status: invoice.status,
          // created_at: invoice.created_at,
        },
      }),
    ),
  );

  await Promise.all(
    revenue.map(async (rev: Revenue) =>
      db.revenue.create({
        data: {
          month: rev.month,
          revenue: rev.revenue,
        },
      }),
    ),
  );
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit();
  });
