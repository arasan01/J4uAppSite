export function Hero() {
  return (
    <div className="text-center mt-32 mb-16">
      <h1 className="text-6xl font-bold text-black mb-6 leading-tight">
        Cross Culture Communication Assistant
        <br />
        with a Screen Capture
      </h1>
      <p className="text-black/80 text-xl mb-12 max-w-2xl mx-auto">
        J4uApp is a native macOS app that lets you translate any text on your screen with a single click. Perfect for cross-cultural communication and language learning.
      </p>
      <div className="flex flex-col items-center space-y-4">
        <a
          href="https://dist.j4uapp.com/J4uApp-0.1.0-Installer.dmg"
          className="bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-lg text-lg font-semibold transition"
        >
          Try J4uApp for free
        </a>
        <span className="text-black/60 text-sm">macOS 15.2+ is recommended</span>
      </div>
    </div>
  );
}
