'use client';

import { useState } from 'react';
import SubscriptionConfirmationModal from './SubscriptionConfirmationModal';

interface Subscriber {
  _id: string;
  email: string;
  subscribedAt: string;
}

export default function TestSubscribe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setMessage('Successfully subscribed!');
      setEmail('');
      setShowConfirmation(true);
      fetchSubscribers(); // Refresh the list
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe');
    }
  };

  const fetchSubscribers = async () => {
    try {
      const response = await fetch('/api/subscribe');
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Failed to fetch subscribers');
      }
      setSubscribers(data);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Test Subscription</h2>
      <form onSubmit={handleSubscribe} className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Subscribe
        </button>
      </form>
      {message && (
        <p className={`mb-4 ${message.includes('Success') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
      <div>
        <button
          onClick={fetchSubscribers}
          className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
        >
          Fetch Subscribers
        </button>
        <div>
          <h3 className="font-bold mb-2">Current Subscribers:</h3>
          <ul className="list-disc pl-4">
            {subscribers.map((sub: Subscriber) => (
              <li key={sub._id}>
                {sub.email} (Subscribed: {new Date(sub.subscribedAt).toLocaleString()})
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SubscriptionConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    </div>
  );
} 