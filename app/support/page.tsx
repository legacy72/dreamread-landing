import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Support - DreamRead",
  description: "Get help with DreamRead audiobook app",
};

export default function Support() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-accent-blue hover:text-accent mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Home
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Support</h1>
          <p className="text-accent/60 mb-12">We&apos;re here to help you get the most out of DreamRead.</p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-accent/80 mb-4">
              Have a question, found a bug, or want to suggest a feature? Send us an email and we&apos;ll get back to you as soon as possible.
            </p>
            <a
              href="mailto:support@dreamread.app"
              className="inline-block bg-accent-blue text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              support@dreamread.app
            </a>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Frequently Asked Questions</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Does Sleep Detection require Apple Watch?</h3>
                <p className="text-accent/80">
                  Yes, Sleep Detection uses heart rate data from Apple Watch. The audio player, library, and all other features work without Apple Watch.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">What audio formats are supported?</h3>
                <p className="text-accent/80">
                  DreamRead supports MP3, M4A, M4B, FLAC, WAV, AIFF, OGG, Opus, and AWB files.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">How do I import audiobooks?</h3>
                <p className="text-accent/80">
                  Tap the import button in the Library tab to open the Files app. You can import individual files or entire folders. DreamRead also includes a built-in catalog with 15,000+ free audiobooks via LibriVox.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Sleep Detection paused too early / didn&apos;t pause at all</h3>
                <p className="text-accent/80">
                  You can adjust the sensitivity threshold in Settings → Sleep Detection. Try a lower percentage (e.g. 6%) if the app doesn&apos;t detect sleep, or a higher one (e.g. 15%) if it triggers too early.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">My progress wasn&apos;t saved</h3>
                <p className="text-accent/80">
                  DreamRead saves your position automatically every few seconds during playback. If progress was lost, make sure the app wasn&apos;t force-quit during playback.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Privacy &amp; Legal</h2>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-accent-blue hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="text-accent-blue hover:underline">Terms of Service</Link>
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}
