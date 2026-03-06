export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Get started with the basics",
      features: [
        "3 audiobooks",
        "5 bookmarks",
        "Background playback",
        "Lock Screen controls",
      ],
      cta: "Coming Soon",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "$4.99",
      period: "/ month",
      description: "For dedicated listeners",
      features: [
        "50 audiobooks",
        "50 bookmarks",
        "Sleep Detection",
        "Sleep Timer",
        "Apple Watch control",
      ],
      cta: "Coming Soon",
      highlighted: true,
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/ month",
      description: "Unlimited everything",
      features: [
        "Unlimited audiobooks",
        "Unlimited bookmarks",
        "Sleep Detection",
        "Sleep Timer",
        "Apple Watch control",
        "iCloud sync",
      ],
      cta: "Coming Soon",
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Pricing
          </h2>
          <p className="text-xl text-accent/80">
            Start free, upgrade when you&apos;re ready
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-secondary/20 to-secondary/5 border-secondary/50 scale-105"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-accent-blue/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-accent/60 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-accent/60 ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-accent/80">
                    <span className="text-secondary text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                disabled
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed ${
                  plan.highlighted
                    ? "bg-secondary text-white disabled:opacity-70"
                    : "bg-white/10 text-accent disabled:opacity-50"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
