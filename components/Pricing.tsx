export default function Pricing() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Pricing
          </h2>
          <p className="text-xl text-accent/80">
            Start free, upgrade to unlock Sleep Detection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent-blue/30 transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">Free</h3>
              <p className="text-accent/60 text-sm">
                Everything you need to get started
              </p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$0</span>
              <span className="text-accent/60 ml-1">forever</span>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Up to 50 audiobooks",
                "10 bookmarks",
                "3 folders",
                "Sleep timer",
                "Background playback",
                "Lock Screen controls",
                "LibriVox catalog (15,000+ free books)",
                "7-day listening stats",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-accent/80">
                  <span className="text-secondary text-lg">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Tier */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-secondary/20 to-secondary/5 border border-secondary/50 scale-105 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">Premium</h3>
              <p className="text-accent/60 text-sm">
                Unlock the full DreamRead experience
              </p>
            </div>

            <div className="mb-2">
              <span className="text-5xl font-bold text-white">$34.99</span>
              <span className="text-accent/60 ml-1">/ year</span>
            </div>
            <p className="text-accent-blue text-sm mb-1">
              7-day free trial included
            </p>
            <p className="text-accent/50 text-sm mb-8">
              or $5.99 / month
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Unlimited audiobooks",
                "Unlimited bookmarks",
                "Unlimited folders",
                "Sleep Detection via Apple Watch",
                "Advanced playback controls",
                "Unlimited listening stats",
                "Sleep session quality info",
                "Everything in Free",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-accent/80">
                  <span className="text-secondary text-lg">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>

            <p className="text-accent/50 text-xs text-center">
              Cancel anytime in App Store settings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
