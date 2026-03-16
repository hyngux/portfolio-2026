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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="surface-card group relative min-h-[112px] overflow-hidden rounded-3xl p-5 sm:min-h-[122px] sm:p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex items-start gap-4">
              <div className="rounded-2xl border border-white/10 bg-blue-500/10 p-3 text-blue-400 transition-colors group-hover:border-blue-400/30 group-hover:text-blue-300">
                <skill.icon size={20} />
              </div>
              <div>
                <p className="text-base font-semibold text-white">{skill.name}</p>
                <p className="mt-1 text-sm text-zinc-500">{skill.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
