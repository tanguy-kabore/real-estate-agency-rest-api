// property.js
import mongoose from "mongoose";
import ImageModel from "./image.js";
import AddressModel from "./address.js";

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    propertyType: { type: String, required: true }, // Added propertyType
    status: { type: String, required: true },
    /* location: { type: String, required: true }, */
    price: { type: String, required: true },
    surface : { type: String, required: true },
    photos: [ImageModel.schema],  // Using ImageModel.schema to reference the ImageSchema
    bedrooms: { type: Number, required: true }, // Added bedrooms
    bathrooms: { type: Number, required: true }, // Added bathrooms
    livingrooms: { type: Number, required: true }, // Added livingrooms
    address: AddressModel.schema,
    /* creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, */
    creator: { type: String, required: true },
});

const PropertyModel = mongoose.model("Property", propertySchema);

export default PropertyModel;