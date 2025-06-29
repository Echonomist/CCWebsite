<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="glass-effect rounded-xl p-10 flex flex-col justify-between"
  >
    <div>
      <h3 className="text-2xl font-semibold mb-4">Interested in connecting?</h3>
      <p className="text-white/70 mb-6">
        Drop us a line. Whether you're curious, inspired, or have something meaningful to share — we’d love to hear from you.
      </p>
    </div>
    <div className="mt-6 text-sm text-white/50">
      Prefer to email? Reach us directly at <br />
      <a
        href="mailto:HQ@chocolate.codes"
        className="text-plum-400 hover:text-plum-300 transition-colors"
      >
        HQ@chocolate.codes
      </a>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="glass-effect rounded-xl p-10"
  >
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-500 text-white placeholder-white/50"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-500 text-white placeholder-white/50"
        required
      />
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-500 text-white placeholder-white/50"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us what’s on your mind..."
        rows={6}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-500 text-white placeholder-white/50 resize-none"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-plum-600 to-plum-500 hover:from-plum-700 hover:to-plum-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 glow-effect"
      >
        Send Message
      </button>
    </form>
  </motion.div>
</div>
export default ContactSection;
