import {
  model,
  Schema,
  Document,
  models,
} from 'mongoose';

interface DefaultValues extends Document {
  card_number: number;
  expiration_date: string;
  cvv: number;
  amount: number;
}

const PurchaseSchema = new Schema<DefaultValues>({
  amount: { type: Number, required: true },
  expiration_date: { type: String, required: true },
  card_number: { type: Number, required: true, maxlength: 16, minlength: 16 },
  cvv: { type: Number, required: true, minlength: 3 },
});

export const Purchase = models.Purchase || model('Purchase', PurchaseSchema);
