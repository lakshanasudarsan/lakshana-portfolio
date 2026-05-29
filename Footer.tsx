import { Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-6 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-white">
            LS
          </a>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-white/60">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/lakshanasudarsan" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 text-white/70 hover:text-white hover:bg-[#00D4C8] transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:lakshana26@gmail.com" 
              className="p-2 rounded-lg bg-white/10 text-white/70 hover:text-white hover:bg-[#00D4C8] transition-all duration-300"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#F5A623] text-white hover:bg-[#e09620] transition-all duration-300"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>
            © {currentYear} Lakshana Sudarsan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
