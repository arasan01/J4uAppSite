import { Languages, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-20 text-white/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Languages className="w-8 h-8 text-primary" />
              <span className="text-white text-xl font-bold">J4uApp</span>
            </div>
            <p className="text-white/60">
              Translate any text on your screen instantly with our powerful macOS app.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#changelog" className="hover:text-white">Changelog</a></li>
              <li><a href="#roadmap" className="hover:text-white">Roadmap</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#beta" className="hover:text-white">Beta Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#guide" className="hover:text-white">User Guide</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#support" className="hover:text-white">Support</a></li>
              <li><a href="#edu" className="hover:text-white">Educational Discount</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#affiliate" className="hover:text-white">Affiliate Program</a></li>
              <li><a href="#brand" className="hover:text-white">Brand Guidelines</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <p>© {currentYear} J4uApp. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="https://twitter.com/j4uapp" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:support@j4uapp.com" className="hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}