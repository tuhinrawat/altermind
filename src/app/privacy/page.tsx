export default function PrivacyPolicy() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            At AlterMindAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
          <p className="text-gray-600 mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Register for our services</li>
            <li>Subscribe to our newsletter</li>
            <li>Fill out a contact form</li>
            <li>Request a demo</li>
            <li>Participate in our surveys or feedback forms</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
          <p className="text-gray-600 mb-4">
            When you visit our website, we automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Access times</li>
            <li>Pages visited</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Provide and maintain our services</li>
            <li>Improve our website and user experience</li>
            <li>Send you marketing and promotional communications (with your consent)</li>
            <li>Respond to your comments and questions</li>
            <li>Protect our rights and prevent fraud</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to our processing of your information</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
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