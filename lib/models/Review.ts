import { model, models, Schema } from "mongoose";

// A customer testimonial shown in the Reviews section.

const ReviewSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, default: "" },
    package: { type: String, default: "" },
    rating: { type: Number, default: 5, min: 1, max: 5 },
    review: { type: String, default: "" },
    image: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Review = models.Review || model("Review", ReviewSchema);
