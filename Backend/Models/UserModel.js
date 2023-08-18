const { default: mongoose } = require("mongoose");


const UserSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      enum: ["Mr", "Mrs", "Miss"],
      trim: true,
    },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, unique: true, trim: true },

    email: { type: String, required: true, unique: true, trim: true },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 15,
      trim: true,
    },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      pincode: { type: String, minlength: 6, maxlength: 6, trim: true },
    },
  },
  { timestamps: true }
);




const UserModel = new mongoose.model("UserModel", UserSchema);

module.exports = { UserModel };




