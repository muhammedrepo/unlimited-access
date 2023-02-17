import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema(
  {
    earnings: {
      type: String,
      required: [true, 'Please provide company'],
      maxlength: 50,
    },
    clicks: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100,
    },
    referrals: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    posts: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
    tasks: {
      type: String,
      default: 'my city',
      required: true,
    },
    accountLocation: {
      type: String,
      default: 'my city',
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Account', AccountSchema);
