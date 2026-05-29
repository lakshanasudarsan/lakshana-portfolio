import { useState } from 'react'
import { Mail, MapPin, Send, Linkedin, Briefcase } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Message sent successfully!')
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00D4C8] text-sm tracking-[0.2em] uppercase font-semibold">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#0A1628]">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-[#00D4C8] mx-auto rounded-full" />
          <p className="text-[#1E293B]/70 mt-6 max-w-xl mx-auto">
            Interested in collaboration or have opportunities to discuss? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-[#00D4C8]" size={22} />
              </div>
              <div>
                <p className="text-sm text-[#1E293B]/60">Email</p>
                <a href="mailto:lakshana26@gmail.com" className="text-[#0A1628] font-medium hover:text-[#00D4C8] transition-colors">
                  lakshana26@gmail.com
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center flex-shrink-0">
                <Linkedin className="text-[#00D4C8]" size={22} />
              </div>
              <div>
                <p className="text-sm text-[#1E293B]/60">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/lakshanasudarsan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A1628] font-medium hover:text-[#00D4C8] transition-colors"
                >
                  linkedin.com/in/lakshanasudarsan
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D4C8]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#00D4C8]" size={22} />
              </div>
              <div>
                <p className="text-sm text-[#1E293B]/60">Location</p>
                <p className="text-[#0A1628] font-medium">Dubai, United Arab Emirates</p>
              </div>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-xl bg-[#0A1628] border border-[#0A1628]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#00D4C8] animate-pulse" />
                <span className="text-white font-semibold">Actively Seeking Global Opportunities</span>
              </div>
              <p className="text-sm text-white/70">
                Currently open to full-time positions, ERP implementation roles, and consulting engagements — open to relocation globally.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-[#1E293B] font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#E2E8F0] text-[#0A1628] placeholder-[#1E293B]/40 focus:border-[#00D4C8] focus:outline-none focus:ring-2 focus:ring-[#00D4C8]/20 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#1E293B] font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#E2E8F0] text-[#0A1628] placeholder-[#1E293B]/40 focus:border-[#00D4C8] focus:outline-none focus:ring-2 focus:ring-[#00D4C8]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-[#1E293B] font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#E2E8F0] text-[#0A1628] placeholder-[#1E293B]/40 focus:border-[#00D4C8] focus:outline-none focus:ring-2 focus:ring-[#00D4C8]/20 transition-all"
                placeholder="Opportunity inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-[#1E293B] font-medium mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#E2E8F0] text-[#0A1628] placeholder-[#1E293B]/40 focus:border-[#00D4C8] focus:outline-none focus:ring-2 focus:ring-[#00D4C8]/20 transition-all resize-none"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 bg-[#F5A623] text-white font-semibold rounded-lg hover:bg-[#e09620] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
