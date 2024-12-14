import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Layers } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    title: 'Website Refresh',
    price: '200-500€',
    description: 'Perfekt für Unternehmen, die einen modernen Touch benötigen',
    features: [
      'Design-Auffrischung',
      'Mobile Optimierung',
      'Performance-Optimierung',
      'Basis SEO-Verbesserungen',
    ],
    icon: Code,
  },
  {
    title: 'Komplette Überarbeitung',
    price: '500-1500€',
    description: 'Umfassende Website-Modernisierung mit KI-Integration',
    features: [
      'Vollständige Design-Überarbeitung',
      'KI-gestützte Funktionen',
      'Erweiterte SEO-Optimierung',
      'Content-Management-System',
      'Analytics-Integration',
    ],
    icon: Cpu,
    featured: true,
  },
  {
    title: 'Custom Development',
    price: 'ab 1500€',
    description: 'Individuelle Website-Entwicklung nach Ihren Vorstellungen',
    features: [
      'Maßgeschneidertes Design',
      'Erweiterte KI-Integration',
      'Full-Stack-Entwicklung',
      'E-Commerce-Funktionen',
      'Individuelle Features',
      'Fortlaufender Support',
    ],
    icon: Layers,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      const navbarHeight = 64;
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gray-950" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Unsere Preismodelle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Wählen Sie das perfekte Paket für Ihre Anforderungen
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan) => (
            <motion.div 
              key={plan.title} 
              variants={cardVariants} 
              className="h-full"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Card className={`relative flex flex-col h-full transform transition-all duration-300 hover:shadow-2xl ${
                plan.featured ? 'border-2 border-white' : 'border border-gray-800'
              } bg-gray-900 text-white hover:border-blue-500`}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                      Beliebteste Wahl
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-300">
                        <svg
                          className="w-4 h-4 mt-1 mr-3 text-green-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-6">
                  <Button
                    onClick={scrollToContact}
                    className={`w-full ${
                      plan.featured
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    Kontakt aufnehmen
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}