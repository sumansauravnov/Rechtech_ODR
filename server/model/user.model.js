const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    contactNo: {
      type: String,
      require: true,
    },
    emailId: {
      type: String,
      require: true,
      unique: true,
    },
    noOfAssignCase: {
      type: Number,
      require: true,
      default: 0,
    },
    caseAdded: {
      type: Number,
      require: true,
      default: 0,
    },
    status: {
      type: Boolean,
      require: true,
      default: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
      enum: ["admin", "client", "arbitrator"],
      default: "client",
    },
  },
  { timestamps: true }
);

const USER = mongoose.model("User", userSchema);

module.exports = { USER };
