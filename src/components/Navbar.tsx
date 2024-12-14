import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; // Height of the navbar
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">WebCraft</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-white hover:text-gray-300"
                onClick={() => scrollToSection('hero')}
              >
                Start
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-gray-300"
                onClick={() => scrollToSection('about')}
              >
                Über Uns
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-gray-300"
                onClick={() => scrollToSection('ai')}
              >
                Services
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-gray-300"
                onClick={() => scrollToSection('pricing')}
              >
                Preise
              </Button>
              <Button 
                variant="default" 
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => scrollToSection('contact')}
              >
                Kontakt
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300"
              onClick={() => scrollToSection('hero')}
            >
              Start
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300"
              onClick={() => scrollToSection('about')}
            >
              Über Uns
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300"
              onClick={() => scrollToSection('ai')}
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-white hover:text-gray-300"
              onClick={() => scrollToSection('pricing')}
            >
              Preise
            </Button>
            <Button 
              variant="default" 
              className="w-full bg-white text-black hover:bg-gray-200"
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}