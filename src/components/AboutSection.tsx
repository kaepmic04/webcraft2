import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Globe, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Digitale Präsenz',
    description: 'In der heutigen digitalen Welt ist Ihre Website Ihr wichtigstes Aushängeschild. Der erste Eindruck zählt!',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Schnelle Ladezeiten und optimale Performance sind entscheidend für den Erfolg Ihrer Website.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Modernes, responsives Design sorgt für ein optimales Nutzererlebnis auf allen Geräten.',
  },
  {
    icon: Bot,
    title: 'KI-Integration',
    description: 'Chatbots und KI-gestützte Funktionen automatisieren Kundenservice und Prozesse.',
  },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gray-950" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Warum eine professionelle Website wichtig ist
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            In der digitalen Ära ist Ihre Website oft der erste Kontaktpunkt mit potenziellen Kunden. 
            Ein professioneller Webauftritt stärkt Ihre Marke, steigert die Glaubwürdigkeit und 
            generiert mehr Leads und Umsatz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}