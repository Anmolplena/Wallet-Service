import { Schema ,Document} from 'mongoose';


export interface Wallet extends Document {
  userType: string;

  balance: number;
  user_id: string;
}

export const WalletSchema = new Schema<Wallet>({
  userType: { type: String,default: 'B2C'},
  balance: { type: Number,default:0 },
  user_id: { type: String, required: true},
});

