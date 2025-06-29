'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="gradient-text">Chocolate.codes</span>
            </h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                We develop non-invasive diagnostic tools rooted in voice, frequency
                and resonance. Our mission is to integrate clinical science and
                human-centred design to promote well-being.
              </p>
              <p>
                This approach shifts diagnostics away from invasive procedures
                toward accessible voice-based analysis usable anywhere, anytime.
              </p>
              <p>
                We build science-driven tech without VC funding or acquisition
                goals — independence comes first.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Our Principles
            </h3>

            <div className="space-y-4">
              <div className="border-l-4 border-plum-500 pl-6">
                <h4 className="font-semibold text-white mb-2">Independence</h4>
                <p className="text-white/70">
                  No venture capital. No acquisition.
                </p>
              </div>

              <div className="border-l-4 border-silver-400 pl-6">
                <h4 className="font-semibold text-white mb-2">Innovation</h4>
                <p className="text-white/70">
                  Pioneering voice-based health diagnostics.
                </p>
              </div>

              <div className="border-l-4 border-plum-500 pl-6">
                <h4 className="font-semibold text-white mb-2">Accessibility</h4>
                <p className="text-white/70">
                  Advanced healthcare for everyone, everywhere.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
