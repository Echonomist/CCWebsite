'use client'

import { motion } from 'framer-motion'
import { Heart, Wallet, Repeat } from 'lucide-react'

export default function DonationSection() {
  return (
    <section id="donation" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Support Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Help us revolutionize healthcare through voice-based diagnostics. Your support enables 
            continued research and development of accessible health technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-8 text-center"
          >
            <div className="text-plum-400 mb-6">
              <Heart className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">One-Time Donation</h3>
            <p className="text-white/70 mb-6">
              Make a single contribution to support our research and development efforts.
            </p>
            <button className="w-full bg-gradient-to-r from-plum-600 to-plum-500 hover:from-plum-700 hover:to-plum-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 glow-effect">
              Donate via PayPal
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-8 text-center"
          >
            <div className="text-silver-300 mb-6">
              <Repeat className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Monthly Support</h3>
            <p className="text-white/70 mb-6">
              Become a recurring supporter and help sustain our ongoing research initiatives.
            </p>
            <button className="w-full border border-silver-300 hover:bg-white/5 hover:border-silver-200 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 silver-glow">
              Monthly Donation
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect rounded-xl p-8 text-center"
        >
          <div className="text-plum-400 mb-6">
            <Wallet className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Web3 Donations</h3>
          <p className="text-white/70 mb-6">
            Support us with cryptocurrency or NFT contributions. Wallet address and NFT details coming soon.
          </p>
          <div className="bg-white/5 rounded-lg p-4 text-sm font-mono text-silver-300">
            Crypto wallet address: Coming soon...
          </div>
        </motion.div>
      </div>
    </section>
  )
}
