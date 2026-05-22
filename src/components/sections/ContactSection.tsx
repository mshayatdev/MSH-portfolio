'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Github, Linkedin, MessageCircle, CheckCircle } from 'lucide-react'
import { PERSONAL } from '@/lib/data'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    setError(false)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '918fcdf8-da7f-4922-afcb-2663c649f284',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  const socials = [
    { icon: Github, label: 'GitHub', value: '@mshayatdev', href: PERSONAL.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'Muhammad Saleh Hayat', href: PERSONAL.linkedin },
    { icon: Mail, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat directly', href: `https://wa.me/92${PERSONAL.whatsapp}` },
  ]

  return (
    <section id="contact" className="section-padding px-6 relative">
      <div className="orb w-[500px] h-[500px] bg-brand-700 bottom-0 left-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-brand-400 text-sm tracking-widest uppercase">Let's connect</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">Get In Touch</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">Have a project in mind? Let's talk about how I can help bring your vision to life.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-2">Ready to start a project?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                I'm currently accepting new freelance projects. Whether it's a small bug fix or a full-scale SaaS build, I'm here to help.
              </p>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-brand-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">{label}</div>
                      <div className="text-sm text-slate-300 group-hover:text-white transition-colors">{value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1.5 tracking-wider uppercase">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-brand-500/50 focus:bg-brand-500/5 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1.5 tracking-wider uppercase">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-brand-500/50 focus:bg-brand-500/5 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-500 mb-1.5 tracking-wider uppercase">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-brand-500/50 focus:bg-brand-500/5 transition-all resize-none"
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm text-center">
                  ❌ Message send nahi hua — dobara try karo!
                </p>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={sending || sent}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 text-white font-semibold hover:shadow-glow-teal transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <><CheckCircle size={17} /> Message Sent! ✅</>
                ) : sending ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : (
                  <><Send size={17} /> Send Message</>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}