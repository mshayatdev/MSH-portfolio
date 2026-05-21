'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SKILLS } from '@/lib/data'

export default function SkillsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding px-6 relative">
      <div className="orb w-[500px] h-[500px] bg-brand-600 top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-brand-400 text-sm tracking-widest uppercase">What I work with</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">Skills & Expertise</h2>
        </motion.div>

        <div ref={ref} className="space-y-5">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 glass-hover"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-semibold text-white">{skill.name}</span>
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="font-mono text-brand-400 font-bold text-sm"
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  className="skill-bar-fill"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill badges extra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 glass rounded-2xl p-6"
        >
          <h3 className="text-sm font-mono text-brand-400 tracking-widest uppercase mb-4">Also experienced with</h3>
          <div className="flex flex-wrap gap-3">
            {['Eloquent ORM', 'Laravel Sanctum', 'Queue Jobs', 'Blade Templates', 'Livewire', 'Composer', 'Git & GitHub', 'Linux CLI', 'Postman', 'cPanel/VPS'].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs font-mono hover:text-brand-400 hover:border-brand-500/30 transition-all cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
