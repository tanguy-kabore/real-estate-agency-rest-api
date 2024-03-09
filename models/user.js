import mongoose from "mongoose";
import bcrypt from "bcrypt";
import ImageModel from "./image.js";
import PaymentModel from "./payment.js";
import AddressModel from "./address.js";
import PhoneModel from "./phone.js";

const saltRounds = 10; // Adjust the number of salt rounds as needed

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: [PhoneModel.schema],
    avatar: [ImageModel.schema],
    /* properties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }], */
    payment: [PaymentModel.schema],
    address: AddressModel.schema,
    roles: { type: [String], default: ["user"] },
    status: { type: String, default: "active" },
    createdAt: { type: Date, default: Date.now },
    // Add any other fields as needed
});

// Use a pre-save hook to hash the password before saving
UserSchema.pre("save", async function (next) {
    try {
        // Only hash the password if it's modified or new
        if (!this.isModified("password")) {
            return next();
        }

        // Generate a salt
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(this.password, salt);

        // Replace the plaintext password with the hashed one
        this.password = hashedPassword;

        return next();
    } catch (error) {
        return next(error);
    }
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
