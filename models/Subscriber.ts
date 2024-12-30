import mongoose from 'mongoose';

export interface ISubscriber {
  email: string;
  subscribedAt: Date;
}

const subscriberSchema = new mongoose.Schema<ISubscriber>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  }
});

const Subscriber = mongoose.models.Subscriber || mongoose.model<ISubscriber>('Subscriber', subscriberSchema);

export default Subscriber; 