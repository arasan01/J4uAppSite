export function Hero() {
  return (
    <div className="text-center mt-32 mb-16">
      <h1 className="text-6xl font-bold text-black mb-6 leading-tight">
        Instant Translation
        <br />
        with a Screenshot
      </h1>
      <p className="text-black/80 text-xl mb-12 max-w-2xl mx-auto">
        The most intuitive translation app for your Mac.
        Designed for seamless integration with your workflow.
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
