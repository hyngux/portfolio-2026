"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">
          Web <span className="text-zinc-600">Developer</span>
        </h1>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-zinc-500 font-mono text-xs uppercase tracking-widest">
          <span>Frontend Focus</span>
          <span className="text-zinc-800">•</span>
          <span>Backend Learning</span>
          <span className="text-zinc-800">•</span>
          <span>CTeSP Intern</span>
        </div>
        <p className="text-zinc-400 font-mono mt-4 text-sm md:text-base">
          Next.js // TypeScript // Node.js // Docker
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-500 font-mono text-lg md:text-xl max-w-2xl mx-auto"
        >
          &gt; still learning
        </motion.p>
      </motion.div>

      <div className="flex items-center justify-center gap-2 mt-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
          Disponível para novos desafios
        </span>
      </div>

      {/* Rato para scroll animado */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-20 w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-blue-600 rounded-full" />
      </motion.div>
    </section>
  )
}
