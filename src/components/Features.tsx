import { Monitor, Zap } from 'lucide-react';

export function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Native MacOS App
            </h2>
            <p className="text-gray-600">
              Built with Swift for lightning-fast performance. Capture any text on your screen and get instant translations with a single click.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Monitor className="w-5 h-5 text-blue-500 mr-2" />
                <span>Native UI</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-blue-500 mr-2" />
                <span>Instant Translation</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=800&q=80"
              alt="App Screenshot"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
