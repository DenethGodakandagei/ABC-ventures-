import mongoose, { Schema, Document } from "mongoose";

export interface IMeal extends Document {
  city: string;
  type: "Breakfast" | "Lunch" | "Dinner" | "Events" | "Offers";
  title: string;
  description: string;
  images: string[]; 
  price: {
    adult: number;
    kid: number;
  };
  availability: boolean;
  createdAt: Date;
}

const MealSchema: Schema = new Schema(
  {
    city: { type: String, required: true },
    type: {
      type: String,
      enum: ["Breakfast", "Lunch", "Dinner", "Events", "Offers"],
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    images: {
      type: [String],
      validate: [(arr: string[]) => arr.length <= 4, "Max 4 images allowed"],
    },
    price: {
      adult: { type: Number, required: true },
      kid: { type: Number, required: true },
    },
    availability: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Meal || mongoose.model<IMeal>("Meal", MealSchema);
