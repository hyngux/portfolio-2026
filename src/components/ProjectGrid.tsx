"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Boxes, Github, Layers3 } from "lucide-react"
import { Reveal } from "./Reveal"

export default function ProjectGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <div className="mb-8 flex flex-col gap-4 sm:mb-12">
          <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-500 sm:text-2xl">
            03. Projects & Lab
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-blue-500/70 to-transparent" />
        </div>
      </Reveal>

      <div className="grid auto-rows-auto grid-cols-1 gap-7 md:gap-5 md:grid-cols-2">
        <motion.div
          whileHover={{ y: -4 }}
          className="surface-card group relative min-h-[400px] overflow-hidden rounded-[32px] p-7 sm:min-h-[360px] sm:p-8 md:col-span-2"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-sky-400/[0.06] opacity-100" />
          <div className="absolute right-0 top-0 h-36 w-36 translate-x-12 -translate-y-12 rounded-full bg-white/8 blur-3xl transition-transform duration-500 group-hover:scale-110" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                Next Milestone // Internship
              </span>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight leading-tight text-white sm:text-3xl">
                Member & Fee Management
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                Currently in the <span className="text-white italic">data modeling</span> phase. The goal is to build
                an automated member management system focused on state consistency and API performance.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Goal</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    Handle fees, members, and states with clarity.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Technical Focus</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    Data modeling, authentication, and performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[10px] font-mono text-zinc-300">
                PostgreSQL
              </span>
              <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[10px] font-mono text-zinc-300">
                NextAuth
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-200">
                View details
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="surface-card group flex min-h-[240px] flex-col justify-between rounded-[32px] p-7 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 text-zinc-100">
              <Boxes size={18} />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-white">Infrastructure</h3>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400">
            I use Docker to keep development environments standardized, predictable, and easy to reproduce.
          </p>
          <div className="w-fit rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-zinc-300">
            DOCKERIZED
          </div>
        </motion.div>

        <motion.a
          whileHover={{ y: -4 }}
          href="https://github.com/hyngux"
          target="_blank"
          rel="noopener noreferrer"
          className="surface-card group flex min-h-[240px] cursor-pointer flex-col justify-between rounded-[32px] p-7 transition-colors hover:border-white/16 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3 text-zinc-100">
              <Github size={18} />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-white">Learning Lab</h3>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400">
            A place to explore clean code patterns, UI experiments, and modern API integration work on GitHub.
          </p>
          <div className="flex items-center justify-between text-zinc-200">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              <Layers3 size={14} />
              Ongoing playground
            </span>
            <span className="font-medium transition-transform group-hover:translate-x-1">GitHub</span>
          </div>
        </motion.a>
      </div>
    </section>
  )
}
