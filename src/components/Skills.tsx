"use client"
import { motion } from "framer-motion"
import { Box, Braces, Database, FileCode2, Palette, Server } from "lucide-react"

const skills = [
  { name: "Node.js", detail: "APIs and logic", icon: Server },
  { name: "PHP", detail: "Backend foundations", icon: Braces },
  { name: "MySQL", detail: "Data and queries", icon: Database },
  { name: "Docker", detail: "Consistent environments", icon: Box },
  { name: "Tailwind CSS", detail: "Fast, clean UI", icon: Palette },
  { name: "TypeScript", detail: "Safer code", icon: FileCode2 },
]

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-8 flex flex-col gap-4 sm:mb-12">
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
          02. Technical Stack
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-violet-500/70 to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="surface-card group relative min-h-[120px] overflow-hidden rounded-[28px] p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-sky-400/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex items-start gap-4">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 text-zinc-100 transition-colors group-hover:border-white/14 group-hover:text-white">
                <skill.icon size={20} />
              </div>
              <div>
                <p className="text-base font-semibold tracking-tight text-white">{skill.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{skill.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
