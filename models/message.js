import mongoose from 'mongoose';

const MessagetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  // Ajoutez d'autres champs au besoin
});

const MessagetModel = mongoose.model('Messaget', MessagetSchema);

export default MessagetModel;