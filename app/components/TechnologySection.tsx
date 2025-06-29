'use client';

import { motion } from 'framer-motion';
import { Mic, Zap, Shield, Clock } from 'lucide-react';

export default function TechnologySection() {
  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice-First Diagnostics",
      description: "Users simply speak into a secured app. In under three minutes, they receive an output aligned with clinical standards."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Frequency Analysis",
      description: "Built on a novel harmonic-frequency model that has already been validated on preliminary datasets."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Non-Invasive & Secure",
      description: "Completely non-invasive, home-based solution that prioritizes user privacy and data security."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Results",
      description: "Faster, more accessible, and cheaper than traditional telehealth, wearables, or lab tests."
    },
  ];

  return (
    <section id="technology" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Decoding vocal biomarkers through advanced acoustic frequency analysis,
            correlating with specific biochemical and emotional signatures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-plum-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
