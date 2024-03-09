// image.js
import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    uid: String,
    name: String,
    url: String,
    type: String,
    size: Number,
    percent: Number,
    status: String,
});

const ImageModel = mongoose.model("Image", ImageSchema);

export default ImageModel;