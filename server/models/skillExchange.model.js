import mongoose from 'mongoose';

const skillExchangeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  skillNeeded: { type: String, required: true },
  skillOffered: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const SkillExchangeRequest = mongoose.model('SkillExchangeRequest', skillExchangeSchema); 