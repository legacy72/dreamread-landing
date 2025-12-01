import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AppStoreButton from "@/components/AppStoreButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Bedtime?
          </h2>
          <p className="text-xl text-accent/80 mb-12">
            Join the waitlist and be the first to experience DreamRead
          </p>
          <AppStoreButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
