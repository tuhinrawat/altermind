export default function TermsOfService() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing or using AlterMindAI&apos;s website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
          <h3 className="text-xl font-semibold mb-3">2.1 Eligibility</h3>
          <p className="text-gray-600 mb-4">
            You must be at least 18 years old and have the legal authority to enter into this agreement to use our services.
          </p>

          <h3 className="text-xl font-semibold mb-3">2.2 User Accounts</h3>
          <p className="text-gray-600 mb-4">
            When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account and password.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            The service and its original content, features, and functionality are owned by AlterMindAI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
          <p className="text-gray-600 mb-4">
            Some of our services are offered on a subscription basis. You agree to pay all fees or charges to your account based on the pricing and billing terms presented to you at the time of purchase.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>All fees are exclusive of applicable taxes</li>
            <li>Payments are non-refundable unless otherwise specified</li>
            <li>Subscription renewals are automatic unless cancelled</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. User Responsibilities</h2>
          <p className="text-gray-600 mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Use the service for any illegal purpose</li>
            <li>Violate any laws in your jurisdiction</li>
            <li>Infringe upon the rights of others</li>
            <li>Interfere with or disrupt the service</li>
            <li>Attempt to bypass any security measures</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            In no event shall AlterMindAI be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify or replace these terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-gray-600">
            Email: <a href="mailto:support@altermind.in" className="text-indigo-600 hover:text-indigo-800">support@altermind.in</a><br />
            Phone: <a href="tel:+916386406887" className="text-indigo-600 hover:text-indigo-800">+91 6386406887</a>
          </p>
        </section>
      </div>
    </div>
  );
} 