// payment.js
import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    cardNumber: { type: String, required: false },
    expirationDate: { type: String, required: false },
    cvv: { type: String, required: false },
    // Add any other payment-related fields as needed
});

const PaymentModel = mongoose.model("Payment", PaymentSchema);

export default PaymentModel;