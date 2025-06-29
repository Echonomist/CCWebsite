'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            This Doesn't Challenge<br />
            <span className="gradient-text">The System.</span><br />
            It Replaces It.
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
          >
            Our system decodes vocal biomarkers—acoustic frequencies, resonance shifts—that correlate with specific biochemical and emotional signatures, revolutionizing healthcare through the power of voice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-plum-600 to-plum-500 rounded-full text-white font-semibold hover:from-plum-700 hover:to-plum-600 transition-all duration-300 transform hover:scale-105 glow-effect">
              Learn More
            </button>
            <button className="px-8 py-4 border border-silver-300 rounded-full text-white font-semibold hover:bg-white/5 hover:border-silver-200 transition-all duration-300 silver-glow">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
