const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema(
  {
    user: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      username: String,
      email: String,
    },
    amount: {
      type: Number,
      requied: true,
    },
    plan: {
      type: String,
      default: "Starter Plan",
      enum: ["Starter Plan", "Silver Plan", "Gold Plan"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Investment", investmentSchema);
