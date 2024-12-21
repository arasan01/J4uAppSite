import { Clock, Globe2, Headphones, Languages, Laptop, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function PricingFeatures() {
  const features = [
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "100+ Languages",
      description: "Translate between more than 100 languages with high accuracy and natural-sounding results."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Translation",
      description: "Get translations in milliseconds with our optimized OCR and translation engine."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Translation History",
      description: "Access your translation history anytime, even offline. Never lose an important translation."
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Native Performance",
      description: "Built specifically for macOS, ensuring smooth performance and minimal resource usage."
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Smart Detection",
      description: "Automatically detects source language and suggests the most relevant target language."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Premium Support",
      description: "Get priority support from our team of language and technical experts."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Everything You Need</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          J4uApp comes packed with powerful features to make translation effortless
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
