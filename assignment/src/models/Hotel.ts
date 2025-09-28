import mongoose, { Schema, Document } from "mongoose";

export interface IHotel extends Document {
  name: string;
  city: string;
}

const HotelSchema = new Schema<IHotel>({
  name: { type: String, required: true },
  city: { type: String, required: true },
});

export default mongoose.models.Hotel || mongoose.model<IHotel>("Hotel", HotelSchema);
