import { model, models, Schema } from "mongoose";

const LeadsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },

  packageCategory: {
    type: String,
    required: false,
  },

  packageName: {
    type: String,
    required: false,
  },
});

export const Leads = models.Leads || model("Leads", LeadsSchema);
