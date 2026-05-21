'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { PERSONAL } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-slate-500 text-sm flex items-center gap-1.5"
        >
          © {new Date().getFullYear()} {PERSONAL.shortName}. Built with
          <Heart size={13} className="text-brand-400 fill-brand-400" />
          & Laravel passion.
        </motion.p>
        <div className="flex items-center gap-4">
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
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/30 transition-colors"
              aria-label={label}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
