const mongoose=require("mongoose");

const requestSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
