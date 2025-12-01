export default function Features() {
  const features = [
    {
      icon: "💤",
      title: "Smart Sleep Detection",
      description: "Monitors your heart rate and movement to detect when you fall asleep",
    },
    {
      icon: "🎧",
      title: "Seamless Playback",
      description: "Pick up right where you left off, with automatic progress saving",
    },
    {
      icon: "⌚",
      title: "Apple Watch Control",
      description: "Control playback and view progress directly from your wrist",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Features
          </h2>
          <p className="text-xl text-accent/80">
            Everything you need for the perfect bedtime listening experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent-blue/30 hover:scale-105 transform transition-all duration-300 group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-accent/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
