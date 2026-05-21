'use client'
import { motion } from 'framer-motion'
import { User, Briefcase, Code2, Award } from 'lucide-react'
import { PERSONAL, TECH_STACK } from '@/lib/data'

const stats = [
  { icon: Briefcase, value: '20+', label: 'Projects Delivered' },
  { icon: Code2, value: '3+', label: 'Years Experience' },
  { icon: Award, value: '100%', label: 'Client Satisfaction' },
  { icon: User, value: '15+', label: 'Happy Clients' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-brand-400 text-sm tracking-widest uppercase">Get to know me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="orb w-40 h-40 bg-brand-500 -top-10 -right-10" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center mb-6">
                  <User size={28} className="text-brand-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Laravel & PHP Developer
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">{PERSONAL.bio}</p>
                <p className="text-slate-400 leading-relaxed">
                  With a deep understanding of MVC architecture, database design, and API development,
                  I consistently deliver projects that exceed expectations — on time, on budget, and bug-free.
                </p>
                <div className="mt-8">
                  <a
                    href={`mailto:${PERSONAL.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 text-white font-semibold hover:shadow-glow-teal transition-all duration-300 hover:scale-105 text-sm"
                  >
                    Let's Work Together
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: stats + tech */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass glass-hover rounded-2xl p-5 text-center cursor-default"
                >
                  <Icon size={22} className="text-brand-400 mx-auto mb-2" />
                  <div className="font-display text-3xl font-bold gradient-text">{value}</div>
                  <div className="text-slate-500 text-sm mt-1">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-sm font-mono text-brand-400 tracking-widest uppercase mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all duration-200 cursor-default"
                    style={{
                      borderColor: tech.color + '44',
                      color: tech.color,
                      backgroundColor: tech.color + '11',
                    }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
