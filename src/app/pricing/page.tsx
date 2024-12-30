'use client';

export default function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for trying out our services",
      features: [
        "Basic Customer Support Bot",
        "Simple Analytics Dashboard",
        "5 AI Content Generations/month",
        "Community Support",
        "Basic Documentation"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: "49",
      description: "Best for growing businesses",
      features: [
        "Everything in Free, plus:",
        "Advanced Customer Support Bot",
        "Full Analytics Suite",
        "100 AI Content Generations/month",
        "Priority Support",
        "API Access"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Everything in Pro, plus:",
        "Custom AI Model Training",
        "Dedicated Account Manager",
        "Unlimited AI Generations",
        "24/7 Premium Support",
        "Custom Integrations"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Start free and scale as your business grows
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 ${
                  tier.highlighted
                    ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white transform scale-105"
                    : "bg-white"
                } shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${!tier.highlighted && "text-gray-900"}`}>
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {tier.price === "Custom" ? "Custom" : `$${tier.price}`}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className={`${tier.highlighted ? "text-purple-100" : "text-gray-500"}`}>
                        /month
                      </span>
                    )}
                  </div>
                  <p className={`mb-6 ${tier.highlighted ? "text-purple-100" : "text-gray-600"}`}>
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center space-x-3"
                    >
                      <svg
                        className={`flex-shrink-0 h-5 w-5 ${
                          tier.highlighted ? "text-purple-200" : "text-purple-500"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={tier.highlighted ? "text-purple-100" : "text-gray-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-colors duration-200 ${
                    tier.highlighted
                      ? "bg-white text-purple-600 hover:bg-purple-50"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto grid gap-8">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans."
              },
              {
                q: "Is there a long-term contract?",
                a: "No, all our plans are month-to-month with no long-term commitment required."
              }
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 