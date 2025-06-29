'use client'

import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">
              Chocolate.codes
            </div>
            <p className="text-white/70 max-w-md">
              Revolutionizing healthcare through non-invasive voice-based diagnostics. 
              Building the future of accessible health technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-white/70 hover:text-silver-200 transition-colors">Home</a>
              <a href="#technology" className="block text-white/70 hover:text-silver-200 transition-colors">Technology</a>
              <a href="#about" className="block text-white/70 hover:text-silver-200 transition-colors">About</a>
              <a href="#founder" className="block text-white/70 hover:text-silver-200 transition-colors">Founder</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="#contact" className="block text-white/70 hover:text-silver-200 transition-colors">Contact</a>
              <a href="#donation" className="block text-white/70 hover:text-silver-200 transition-colors">Support Us</a>
              <a href="mailto:hello@chocolate.codes" className="block text-white/70 hover:text-silver-200 transition-colors">Email</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 Chocolate.codes. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white/50 hover:text-plum-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/50 hover:text-plum-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-white/50 hover:text-plum-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@chocolate.codes" className="text-white/50 hover:text-plum-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
