import mongoose from 'mongoose';

const PhoneSchema = new mongoose.Schema({
  countryCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  // Vous pouvez ajouter d'autres champs au besoin
});

const PhoneModel = mongoose.model('Phone', PhoneSchema);

export default PhoneModel;
