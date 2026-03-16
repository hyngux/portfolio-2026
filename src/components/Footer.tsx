"use client"
import { Reveal } from "./Reveal"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-900">
      <Reveal>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Vamos conversar?</h2>
            <p className="text-zinc-500 text-sm">
              Estou sempre disponível para discutir tecnologia, estágio ou novas oportunidades.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:jimmygoncalves1@gmail.com"
              className="flex items-center gap-2 text-zinc-400 hover:text-blue-500 transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm font-mono">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/teu-perfil"
              target="_blank"
              className="flex items-center gap-2 text-zinc-400 hover:text-blue-500 transition-colors"
            >
              <Linkedin size={18} />
              <span className="text-sm font-mono">LinkedIn</span>
            </a>
            <a
              href="https://github.com/hyngux"
              target="_blank"
              className="flex items-center gap-2 text-zinc-400 hover:text-blue-500 transition-colors"
            >
              <Github size={18} />
              <span className="text-sm font-mono">GitHub</span>
            </a>
          </div>
        </div>

        <div className="mt-20 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <span>© 2026 // Localhost Studio</span>
          <span>Desenvolvido com Next.js & Docker</span>
        </div>
      </Reveal>
    </footer>
  )
}