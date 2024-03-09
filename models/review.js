import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  propperty: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  // Ajoutez d'autres champs au besoin
});

const ReviewModel = mongoose.model('Review', ReviewSchema);

export default ReviewModel;
