// location.js
import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false },
    street: { type: String, required: false },
    city: { type: String, required: false },
    zipCode: { type: String, required: false },
    country: { type: String, required: true },
    region: { type: String, required: false },
});

const AddressModel = mongoose.model("Address", AddressSchema);

export default AddressModel;
