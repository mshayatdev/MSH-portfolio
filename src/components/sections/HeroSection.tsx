'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Circle } from 'lucide-react'
import { PERSONAL } from '@/lib/data'

const ROLES = [
  'Laravel Developer',
  'PHP Engineer',
  'API Specialist',
  'Backend Developer',
  'Freelancer',
]

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const role = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-brand-500 -top-40 -right-40" />
      <div className="orb w-[400px] h-[400px] bg-blue-600 -bottom-20 -left-20" />

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      {/* Animated rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[800px] h-[800px] rounded-full border border-brand-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[600px] h-[600px] rounded-full border border-brand-500/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <Circle size={8} className="text-green-400 fill-green-400 animate-pulse" />
          <span className="text-sm text-slate-300">Available for freelance projects</span>
          <MapPin size={13} className="text-slate-500" />
          <span className="text-sm text-slate-500">Pakistan</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
        >
          <span className="text-white">Muhammad</span>{' '}
          <span className="gradient-text">Saleh</span>
          <br />
          <span className="text-white">Hayat</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-14 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-2xl sm:text-3xl text-brand-400 font-medium">
            {displayed}
          </span>
          <span className="typing-cursor" />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting robust, scalable web applications with Laravel & PHP.
          From REST APIs to SaaS platforms — I turn your ideas into production-ready software.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={() => handleScroll('projects')}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-400 text-white font-semibold hover:shadow-glow-teal-lg transition-all duration-300 hover:scale-105"
          >
            View Projects
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl glass text-white font-semibold hover:border-brand-500/40 hover:bg-brand-500/10 transition-all duration-300"
          >
            <Mail size={17} />
            Hire Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: PERSONAL.github, label: 'GitHub' },
            { icon: Linkedin, href: PERSONAL.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${PERSONAL.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/40 transition-all duration-200"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 glass rounded-full flex items-start justify-center pt-2 cursor-pointer"
            onClick={() => handleScroll('about')}
          >
            <div className="w-1.5 h-3 bg-brand-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
