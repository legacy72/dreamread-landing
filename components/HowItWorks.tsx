export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Import Your Audiobooks",
      description: "Add your favorite audiobook files to DreamRead",
      icon: "📚",
    },
    {
      number: "2",
      title: "Start Listening Before Bed",
      description: "Put on your Apple Watch and start your audiobook",
      icon: "🌙",
    },
    {
      number: "3",
      title: "Sleep Peacefully",
      description: "We'll automatically pause when you fall asleep",
      icon: "😴",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary-dark/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-accent/80">
            Three simple steps to better sleep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg">
                  {step.number}
                </div>

                <div className="text-5xl mb-6">{step.icon}</div>

                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>

                <p className="text-accent/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-1">
                  <div className="w-full h-full bg-gradient-to-r from-secondary to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
