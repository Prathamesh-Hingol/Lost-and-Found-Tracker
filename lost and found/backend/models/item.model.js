import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "object title required"],
    },

    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: [true, "location is required"],
    },
    status: {
      type: String,
      enum: ["lost", "found", "resolved"],
      default: "lost",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true },
);

const itemModel = mongoose.model("item", itemSchema);
export default itemModel;
