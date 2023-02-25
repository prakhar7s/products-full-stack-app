const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Types = Schema.Types;

const itemSchema = new mongoose.Schema({
  name: {
    type: Types.String,
    trim: true,
    text: true,
  },
  imageUrl: {
    type: Types.String,
    trim: true,
    text: true,
  },
  description: {
    type: Types.String,
    trim: true,
    text: true,
  },
  price: {
    type: Types.Number,
  },
  rating: {
    type: Types.Number,
  },
  discount: {
    type: Types.Number,
  },
});

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
