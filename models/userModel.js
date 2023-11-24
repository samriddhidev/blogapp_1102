import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "emmail is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);
const userModel = mongoose.model("User", userSchema);
export default userModel;
