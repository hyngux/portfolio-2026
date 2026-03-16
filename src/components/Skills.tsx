"use client"
import { motion } from "framer-motion"

const skills = ["Node.js", "PHP", "MySQL", "Docker", "Tailwind CSS", "TypeScript"]

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-zinc-500 text-sm uppercase tracking-[0.2em] mb-12">
        02. Stack Tecnológica
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-zinc-800 bg-zinc-900/50 p-4 rounded-xl text-center hover:border-blue-500/50 transition-colors group"
          >
            <span className="text-zinc-400 group-hover:text-white font-medium transition-colors">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
