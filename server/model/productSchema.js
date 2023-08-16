const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please add the price of your item"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, //add timestamps to the schema
  }
);

const product = mongoose.model("product", productSchema);

module.exports = product;
