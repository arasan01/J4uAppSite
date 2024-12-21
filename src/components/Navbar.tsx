import { Languages } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 container mx-auto">
      <div className="flex items-center space-x-2">
        <Languages className="w-8 h-8 text-primary" />
        <span className="text-black text-xl font-bold">J4uApp</span>
      </div>
      <div className="flex items-center space-x-8">
        <a href="#features" className="text-black/80 hover:text-black">Product</a>
        <a href="#help" className="text-black/80 hover:text-black">Help</a>
        <a href="#pricing" className="text-black/80 hover:text-black">Pricing</a>
        <a href="https://twitter.com/j4uapp" className="text-black/80 hover:text-black">Twitter</a>
        <a
          href="https://dist.j4uapp.com/J4uApp-0.1.0-Installer.dmg"
          className="bg-primary hover:bg-primary/90 text-black px-6 py-2 rounded-lg transition"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
