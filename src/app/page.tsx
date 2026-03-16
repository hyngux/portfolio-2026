import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"      // Novo
import Skills from "@/components/Skills"      // Novo
import ProjectGrid from "@/components/ProjectGrid"
import Footer from "@/components/Footer"
import { Reveal } from "@/components/Reveal"

export default function Home() {
  return (
    <main className="relative bg-zinc-950 min-h-screen text-white overflow-x-hidden mesh-bg">      {/* A Navbar fica fora da estrutura de scroll para estar sempre visível */}
      <Navbar />

      {/* Espaçamento extra no topo para a Navbar não tapar o Hero */}
      <div className="pt-16">

        <Hero />

        {/* Secção Sobre com ID para a Navbar funcionar */}
        <section id="sobre" className="max-w-5xl mx-auto px-6 py-24">
          <Reveal>
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-zinc-500">
              01. Sobre o meu trabalho
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              Atualmente a desenvolver competências em todo o <span className="text-white font-medium">ciclo de vida</span> de uma aplicação.
              Interesso-me pela construção de interfaces intuitivas, mas é na <span className="text-blue-500 font-mono italic">lógica de negócio</span> e na gestão de dados que encontro os meus maiores desafios técnicos.
            </p>
          </Reveal>
        </section>

        <Skills />

        <div id="projetos">
          <ProjectGrid />
        </div>

        <Footer />
      </div>
    </main>
  )
}
