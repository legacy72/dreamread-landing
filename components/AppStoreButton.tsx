export default function AppStoreButton() {
  return (
    <div className="inline-flex flex-col items-center gap-3">
      <button
        disabled
        className="px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        aria-label="Download on the App Store - Coming Soon"
      >
        <span className="text-lg">📱 Download on the App Store</span>
      </button>
      <span className="text-accent-blue text-sm font-medium">
        Coming Soon
      </span>
    </div>
  );
}
