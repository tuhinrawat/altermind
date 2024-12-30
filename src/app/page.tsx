'use client';

import { useState } from 'react';
import DemoRequestModal from './components/DemoRequestModal';
import NewsletterSubscribe from './components/NewsletterSubscribe';

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="bg-white pt-40 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Transform Your Business with AI
            </h1>
            <p className="text-xl text-gray-600">
              Harness the power of artificial intelligence to streamline operations, enhance customer engagement, and drive growth with our intelligent multi-agent platform.
            </p>
            <div className="flex justify-center gap-4 pt-6">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Book Demo
              </button>
              <a
                href="#content-section"
                className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24" id="content-section">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose AlterMindAI?</h2>
            <p className="text-xl text-gray-600">
              Our platform offers cutting-edge AI solutions that adapt to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Intelligent Automation',
                description: 'Automate complex tasks with AI agents that learn and adapt to your business processes.',
              },
              {
                title: 'Seamless Integration',
                description: 'Easily integrate with your existing systems and workflows without disruption.',
              },
              {
                title: 'Scalable Solutions',
                description: 'Grow with confidence using our scalable infrastructure that adapts to your needs.',
              },
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Join us in shaping the future of business automation. Get started today!
            </p>
            <NewsletterSubscribe />
          </div>
        </div>
      </div>

      {/* Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
} 