"use client"
import { Reveal } from "./Reveal"

export default function ProjectGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <Reveal>
        <h2 className="text-2xl font-bold mb-12 text-zinc-500 uppercase tracking-widest">
          02. Projetos & Lab
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        
        {/* Card Grande - O que vais construir no Estágio */}
        <div className="md:col-span-2 md:row-span-2 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-colors group relative overflow-hidden">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="text-xs font-mono text-blue-500 mb-2 block uppercase font-bold tracking-tighter">
                Next Milestone // Estágio
              </span>
              <h3 className="text-3xl font-bold mb-4">Gestão de Sócios & Quotas</h3>
              <p className="text-zinc-400 max-w-md leading-relaxed">
                Em fase de <span className="text-white italic">modelação de dados</span>. O objetivo é criar um sistema automatizado para controlo de membros, focado na consistência de estados e performance da API.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
               <span className="px-3 py-1 bg-zinc-800 text-[10px] font-mono rounded-full text-zinc-300">PostgreSQL</span>
               <span className="px-3 py-1 bg-zinc-800 text-[10px] font-mono rounded-full text-zinc-300">NextAuth</span>
            </div>
          </div>
        </div>

        {/* Card Pequeno 1 - O que já dominas (Docker/Infra) */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors">
          <h3 className="font-bold text-xl text-zinc-200">Infraestrutura</h3>
          <p className="text-zinc-500 text-sm">
            Uso de Docker para garantir ambientes de desenvolvimento padronizados e reprodutíveis.
          </p>
          <div className="text-blue-500 font-mono text-[10px] font-bold tracking-[0.2em] bg-blue-500/10 py-1 px-3 rounded w-fit">
            DOCKERIZED
          </div>
        </div>

        {/* Card Pequeno 2 - Atitude de Aprendizagem */}
        <div className="bg-zinc-100 rounded-3xl p-8 flex flex-col justify-between hover:bg-white transition-colors cursor-pointer group">
          <h3 className="font-bold text-xl text-zinc-900">Learning Lab</h3>
          <p className="text-zinc-600 text-sm">
            Exploração de padrões de Clean Code e integração de APIs modernas no GitHub.
          </p>
          <div className="text-zinc-900 text-right font-bold">GITHUB →</div>
        </div>

      </div>
    </section>
  )
}
