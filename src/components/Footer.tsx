"use client"
import { useEffect, useRef, useState } from "react"
import { Reveal } from "./Reveal"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const [isHighlighted, setIsHighlighted] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const triggerHighlight = () => {
      setIsHighlighted(false)

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      window.requestAnimationFrame(() => {
        setIsHighlighted(true)
        timeoutRef.current = window.setTimeout(() => {
          setIsHighlighted(false)
        }, 1800)
      })
    }

    const handleContactHighlight = () => {
      triggerHighlight()
    }

    window.addEventListener("contact-highlight", handleContactHighlight)

    return () => {
      window.removeEventListener("contact-highlight", handleContactHighlight)

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    // Adicionámos o id="contacto" aqui
    <footer id="contacto" className="max-w-5xl mx-auto scroll-mt-24 border-t border-zinc-900 px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <div className={`surface-card contact-card rounded-[28px] p-6 sm:p-8 ${isHighlighted ? "contact-card-active" : ""}`}>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="contact-heading mb-2 text-xl font-bold text-white sm:text-2xl">Vamos conversar?</h2>
              <p className="contact-copy text-zinc-500 text-sm">
                Estou sempre disponível para discutir tecnologia, estágio ou novas oportunidades.
              </p>
            </div>

            <div className={`contact-links flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4 ${isHighlighted ? "contact-links-active" : ""}`}>
              <a
                href="mailto:jimmygoncalves1@gmail.com"
                className="contact-link flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
              >
                <Mail size={18} />
                <span className="text-sm font-mono">Email</span>
              </a>
              <a
                href="https://linkedin.com/in/teu-utilizador-aqui"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
              >
                <Linkedin size={18} />
                <span className="text-sm font-mono">LinkedIn</span>
              </a>
              <a
                href="https://github.com/hyngux"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
              >
                <Github size={18} />
                <span className="text-sm font-mono">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
