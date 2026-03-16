import Hero from "@/components/Hero"
import { Reveal } from "@/components/Reveal"
import ProjectGrid from "@/components/ProjectGrid" // Importa a Grid
import Footer from "@/components/Footer"           // Importa o Footer

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white overflow-x-hidden">
      {/* 1. O Hero (Animação de entrada) */}
      <Hero />

      {/* 2. Secção Sobre */}
      <section className="max-w-5xl mx-auto px-6 py-20">
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

      {/* 3. A tua Grid de Projetos/Lab */}
      <ProjectGrid />

      {/* 4. O Footer com os teus contactos */}
      <Footer />
    </main>
  )
}