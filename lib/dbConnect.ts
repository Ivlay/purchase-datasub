import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

import { MONGODB_URI } from 'constants/index';

const connectDB = (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  await mongoose.connect(MONGODB_URI as string);
  return handler(req, res);
};

export default connectDB;
