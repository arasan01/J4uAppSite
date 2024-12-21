interface PlanProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  checkoutUrl: string;
}

function PricingPlan({ name, price, period, features, checkoutUrl }: PlanProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={checkoutUrl}
        className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center px-6 py-3 rounded-lg transition"
      >
        Subscribe Now
      </a>
    </div>
  );
}

export function PricingSection() {
  const plans = [
    {
      name: "Monthly Plan",
      price: "9.99",
      period: "month",
      features: [
        "Unlimited translations",
        "All languages supported",
        "Regular updates",
        "Email support"
      ],
      checkoutUrl: ""
    },
    {
      name: "Yearly Plan",
      price: "99.99",
      period: "year",
      features: [
        "Everything in Monthly",
        "2 months free",
        "Priority support",
        "Early access to new features"
      ],
      checkoutUrl: ""
    }
  ];

  return (
    <section className="bg-gray-300 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
