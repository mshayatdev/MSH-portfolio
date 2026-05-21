'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SERVICES } from '@/lib/data'

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding px-6 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-blue-700 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-brand-400 text-sm tracking-widest uppercase">What I offer</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">Services</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">End-to-end development services tailored to your business needs.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass glass-hover rounded-3xl p-6 group cursor-default transition-all duration-300"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={14} className="text-brand-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
