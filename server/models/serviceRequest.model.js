import mongoose from 'mongoose';

const serviceRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceDetails: { type: String, required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

export const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema); 