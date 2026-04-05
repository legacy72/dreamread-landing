export default function Features() {
  const features = [
    {
      icon: "💤",
      title: "Smart Sleep Detection",
      description:
        "Monitors your Apple Watch heart rate to automatically pause when you fall asleep",
    },
    {
      icon: "⌚",
      title: "Apple Watch Control",
      description:
        "Control playback and monitor your heart rate directly from your wrist",
    },
    {
      icon: "🌙",
      title: "Sleep Timer",
      description:
        "Set a 15, 30, 45, or 60-minute timer — audio fades out automatically",
    },
    {
      icon: "📖",
      title: "15,000+ Free Audiobooks",
      description:
        "Browse and listen to the built-in LibriVox catalog — no sign-up required",
    },
    {
      icon: "🎧",
      title: "All Popular Formats",
      description:
        "Import MP3, M4A, M4B, FLAC, WAV, AIFF, OGG, Opus files with automatic progress saving",
    },
    {
      icon: "📊",
      title: "Listening Stats",
      description:
        "Track your bedtime listening habits and sleep session quality over time",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
