'use client'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { EXPERIENCE } from '@/lib/data'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-brand-400 text-sm tracking-widest uppercase">My journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">Experience</h2>
        </motion.div>

        <div className="relative timeline-line pl-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute -left-12 top-1 w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center z-10">
                <Briefcase size={16} className="text-brand-400" />
              </div>

              <motion.div
                whileHover={{ x: 4 }}
                className="glass glass-hover rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{exp.title}</h3>
                    <p className="text-brand-400 text-sm font-medium mt-0.5">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full glass text-xs font-mono text-slate-400 border border-white/10 whitespace-nowrap">
                    {exp.year}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map(h => (
                    <span key={h} className="px-2.5 py-1 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
