import AppStoreButton from "./AppStoreButton";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-dark to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto text-center z-10">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-accent-blue to-white bg-clip-text text-transparent leading-tight">
            Fall Asleep to Your Favorite Audiobooks
          </h1>
        </div>

        <div className="animate-fadeIn delay-200">
          <p className="text-xl md:text-2xl text-accent mb-12 max-w-3xl mx-auto leading-relaxed">
            DreamRead automatically pauses when you drift off, using your Apple Watch
          </p>
        </div>

        <div className="animate-fadeIn delay-400">
          <AppStoreButton />
        </div>

        <div className="mt-16 animate-fadeIn delay-500">
          <div className="inline-block p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-8xl animate-float">📱⌚</div>
            <p className="text-sm text-accent/70 mt-4">iPhone + Apple Watch</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
