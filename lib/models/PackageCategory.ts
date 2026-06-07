import { model, models, Schema } from "mongoose";

// A travel package category (e.g. "Yatra Special") shown on the home page and
// Packages page. Each category holds a list of trip names.

const PackageCategorySchema = new Schema(
  {
    key: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    color: { type: String, default: "bg-blue-500" },
    order: { type: Number, default: 0 },
    trips: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const PackageCategory =
  models.PackageCategory || model("PackageCategory", PackageCategorySchema);
