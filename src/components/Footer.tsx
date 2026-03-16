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
    <footer id="contact" className="mx-auto max-w-5xl scroll-mt-24 border-t border-zinc-900 px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <div className={`surface-card contact-card rounded-[28px] p-6 sm:p-8 ${isHighlighted ? "contact-card-active" : ""}`}>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="contact-heading mb-2 text-xl font-bold text-white sm:text-2xl">Let&apos;s Talk</h2>
              <p className="contact-copy text-sm text-zinc-500 sm:text-base">
                I&apos;m always open to discussing technology, internships, or new opportunities.
              </p>
            </div>

            <div className={`contact-links grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:grid-cols-2 ${isHighlighted ? "contact-links-active" : ""}`}>
              <a
                href="mailto:jimmygoncalves1@gmail.com"
                className="contact-link flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-300 transition-colors hover:border-white/30 hover:text-white lg:min-w-[190px]"
              >
                <Mail size={18} />
                <span className="text-sm font-mono">Email</span>
              </a>
              <a
                href="https://linkedin.com/in/teu-utilizador-aqui"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-300 transition-colors hover:border-white/30 hover:text-white lg:min-w-[190px]"
              >
                <Linkedin size={18} />
                <span className="text-sm font-mono">LinkedIn</span>
              </a>
              <a
                href="https://github.com/hyngux"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-300 transition-colors hover:border-white/30 hover:text-white sm:col-span-2 lg:min-w-[190px] lg:justify-self-start"
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
