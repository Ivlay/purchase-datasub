import type { NextApiRequest, NextApiResponse } from 'next';

import { Purchase } from 'db/models/purchase';

import connectDB from 'lib/dbConnect';

interface DefaultValues {
  id?: string;
  amount: number;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DefaultValues | unknown>,
) {
  try {
    const { body } = req;

    const data = JSON.parse(body);

    const { id, amount } = await Purchase.create({
      amount: Number(data.amount),
      cvv: Number(data.amount),
      expiration_date: data.expiration_date,
      card_number: Number(data.card_number),
    });

    res.status(201).json({ id, amount });
  } catch (error) {
    res.status(400).send(error);
  }
}

export default connectDB(handler);
