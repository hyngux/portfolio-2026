"use client"
import { Reveal } from "./Reveal"
import { Database, Users, ShieldCheck } from "lucide-react" // Ícones pro

const projects = [
  {
    title: "Gestão de Sócios v1",
    description: "Sistema Fullstack para controlo de mensalidades e acessos. Focado em performance e segurança de dados.",
    tech: ["Node.js", "PostgreSQL", "Docker"],
    icon: <Database className="text-blue-500" />
  },
  // Podes adicionar mais aqui depois
]

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <Reveal>
        <h2 className="text-3xl font-bold mb-10 italic uppercase tracking-tighter">
          Projetos <span className="text-blue-600 underline decoration-2">Destaque</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
