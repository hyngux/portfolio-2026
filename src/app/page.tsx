import BackgroundCircles from "@/components/BackgroundCircles"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"      // Novo
import Skills from "@/components/Skills"      // Novo
import ProjectGrid from "@/components/ProjectGrid"
import Footer from "@/components/Footer"
import { Reveal } from "@/components/Reveal"

export default function Home() {
  return (
    <main className="relative bg-zinc-950 min-h-screen text-white overflow-x-hidden mesh-bg">      {/* A Navbar fica fora da estrutura de scroll para estar sempre visível */}
      <BackgroundCircles />

      <div className="relative z-10">
        <Navbar />

        {/* Espaçamento extra no topo para a Navbar não tapar o Hero */}
        <div className="pt-20">

          <Hero />

          {/* Secção Sobre com ID para a Navbar funcionar */}
          <section id="sobre" className="max-w-5xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
            <Reveal>
              <div className="mb-8 flex flex-col gap-4 sm:mb-10">
                <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-500 sm:text-2xl">
                  01. Sobre o meu trabalho
                </h2>
                <div className="h-px w-24 bg-gradient-to-r from-blue-500/70 to-transparent" />
              </div>
            </Reveal>

            <Reveal>
              <div className="surface-card rounded-[28px] p-6 sm:p-8">
                <p className="max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                  Atualmente a construir o meu caminho no desenvolvimento web.{" "}
                  <span className="font-mono italic text-blue-400">&apos;work in progress&apos;</span> focado em transformar conceitos técnicos em interfaces limpas e código funcional.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {["UI limpa", "Estrutura", "Dados", "DX"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <Skills />

          <div id="projetos">
            <ProjectGrid />
          </div>

          <Footer />
        </div>
      </div>
    </main>
  )
}
