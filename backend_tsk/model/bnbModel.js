const moongose = require("mongoose");

var Bnb;
const bnbSchema = new moongose.Schema({
  address: {
    country: {
      type: String,
    },
    country_code: {
      type: String,
    },
    location: {
      coordinates: {
        type: Array,
      },
    },
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  review_scores: {
    review_scores_rating: {
      type: Number,
    },
  },
},{ collection: "listingsAndReviews" });

Bnb = module.exports = moongose.model("Bnb", bnbSchema);
