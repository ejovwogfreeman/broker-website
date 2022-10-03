const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema(
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
    mode: {
      type: String,
      default: null,
      enum: ["Bitcoin", "Tether", "Etherium", "Luno"],
    },
    // proof: {

    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Deposit", depositSchema);
