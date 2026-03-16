"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Boxes, Github, Layers3 } from "lucide-react"
import { Reveal } from "./Reveal"

export default function ProjectGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <div className="mb-8 flex flex-col gap-4 sm:mb-12">
          <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-500 sm:text-2xl">
            03. Projetos & Lab
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-blue-500/70 to-transparent" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 auto-rows-auto md:grid-cols-3 md:auto-rows-[300px]">
        
        {/* Card Grande - O que vais construir no Estágio */}
        <motion.div
          whileHover={{ y: -6 }}
          className="surface-card group relative min-h-[360px] overflow-hidden rounded-3xl p-6 sm:p-8 md:col-span-2 md:row-span-2 md:min-h-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-violet-500/10 opacity-80" />
          <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-blue-500/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="text-xs font-mono text-blue-400 mb-2 block uppercase font-bold tracking-tighter">
                Next Milestone // Estágio
              </span>
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">Gestão de Sócios & Quotas</h3>
              <p className="max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
                Em fase de <span className="text-white italic">modelação de dados</span>. O objetivo é criar um sistema automatizado para controlo de membros, focado na consistência de estados e performance da API.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Objetivo</p>
                  <p className="mt-2 text-sm text-zinc-200">Gerir quotas, membros e estados de forma clara.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Foco técnico</p>
                  <p className="mt-2 text-sm text-zinc-200">Modelação de dados, autenticação e performance.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
               <span className="px-3 py-1 bg-zinc-800/80 text-[10px] font-mono rounded-full text-zinc-300">PostgreSQL</span>
               <span className="px-3 py-1 bg-zinc-800/80 text-[10px] font-mono rounded-full text-zinc-300">NextAuth</span>
               <span className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300">
                 Ver detalhes
                 <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
               </span>
            </div>
          </div>
        </motion.div>

        {/* Card Pequeno 1 - O que já dominas (Docker/Infra) */}
        <motion.div
          whileHover={{ y: -6 }}
          className="surface-card group flex min-h-[220px] flex-col justify-between rounded-3xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-blue-500/10 p-3 text-blue-400">
              <Boxes size={18} />
            </div>
            <h3 className="text-xl font-bold text-zinc-200">Infraestrutura</h3>
          </div>
          <p className="text-sm text-zinc-500">
            Uso de Docker para garantir ambientes de desenvolvimento padronizados, previsíveis e fáceis de replicar.
          </p>
          <div className="text-blue-500 font-mono text-[10px] font-bold tracking-[0.2em] bg-blue-500/10 py-1 px-3 rounded w-fit">
            DOCKERIZED
          </div>
        </motion.div>

        {/* Card Pequeno 2 - Atitude de Aprendizagem */}
        <motion.a
          whileHover={{ y: -6 }}
          href="https://github.com/hyngux"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[220px] cursor-pointer flex-col justify-between rounded-3xl border border-zinc-200/70 bg-zinc-100 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.12)] transition-colors hover:bg-white sm:p-8"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-zinc-300 bg-white p-3 text-zinc-900">
              <Github size={18} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Learning Lab</h3>
          </div>
          <p className="text-sm text-zinc-600">
            Exploração de padrões de Clean Code, experiências de UI e integração de APIs modernas no GitHub.
          </p>
          <div className="flex items-center justify-between text-zinc-900">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              <Layers3 size={14} />
              Playground contínuo
            </span>
            <span className="font-bold transition-transform group-hover:translate-x-1">GITHUB →</span>
          </div>
        </motion.a>

      </div>
    </section>
  )
}
