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

      <div className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:auto-rows-[300px]">
        <motion.div
          whileHover={{ y: -6 }}
          className="surface-card group relative min-h-[320px] overflow-hidden rounded-3xl p-5 sm:min-h-[360px] sm:p-8 md:col-span-2 xl:row-span-2 xl:min-h-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-violet-500/10 opacity-80" />
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-blue-500/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-blue-400 mb-2 block uppercase font-bold tracking-tighter">
                Next Milestone // Internship
              </span>
              <h3 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl">Member & Fee Management</h3>
              <p className="max-w-md text-sm leading-7 text-zinc-400 sm:text-base sm:leading-relaxed">
                Currently in the <span className="text-white italic">data modeling</span> phase. The goal is to build
                an automated member management system focused on state consistency and API performance.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Goal</p>
                  <p className="mt-2 text-sm text-zinc-200">Handle fees, members, and states with clarity.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Technical Focus</p>
                  <p className="mt-2 text-sm text-zinc-200">Data modeling, authentication, and performance.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-zinc-800/80 px-3 py-1 text-[10px] font-mono text-zinc-300">
                PostgreSQL
              </span>
              <span className="rounded-full bg-zinc-800/80 px-3 py-1 text-[10px] font-mono text-zinc-300">
                NextAuth
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300">
                View details
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="surface-card group flex min-h-[220px] flex-col justify-between rounded-3xl p-5 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-blue-500/10 p-3 text-blue-400">
              <Boxes size={18} />
            </div>
            <h3 className="text-xl font-bold text-zinc-200">Infrastructure</h3>
          </div>
          <p className="text-sm text-zinc-500">
            I use Docker to keep development environments standardized, predictable, and easy to reproduce.
          </p>
          <div className="text-blue-500 font-mono text-[10px] font-bold tracking-[0.2em] bg-blue-500/10 py-1 px-3 rounded w-fit">
            DOCKERIZED
          </div>
        </motion.div>

        <motion.a
          whileHover={{ y: -6 }}
          href="https://github.com/hyngux"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[220px] cursor-pointer flex-col justify-between rounded-3xl border border-zinc-200/70 bg-zinc-100 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.12)] transition-colors hover:bg-white sm:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-zinc-300 bg-white p-3 text-zinc-900">
              <Github size={18} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Learning Lab</h3>
          </div>
          <p className="text-sm text-zinc-600">
            A place to explore clean code patterns, UI experiments, and modern API integration work on GitHub.
          </p>
          <div className="flex items-center justify-between text-zinc-900">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              <Layers3 size={14} />
              Ongoing playground
            </span>
            <span className="font-bold transition-transform group-hover:translate-x-1">GITHUB →</span>
          </div>
        </motion.a>

      </div>
    </section>
  )
}
