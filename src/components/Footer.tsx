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
        <div className={`surface-card contact-card rounded-[32px] p-7 sm:p-10 ${isHighlighted ? "contact-card-active" : ""}`}>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-start lg:gap-14">
            <div className="max-w-xl flex-1">
              <h2 className="contact-heading mb-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Let&apos;s Talk
              </h2>
              <p className="contact-copy text-sm leading-relaxed text-zinc-400 sm:text-base">
                I&apos;m always open to discussing technology, internships, or new opportunities.
              </p>
            </div>

            <div className={`contact-links isolate flex w-full max-w-[28rem] flex-col gap-5 lg:shrink-0 ${isHighlighted ? "contact-links-active" : ""}`}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <a
                  href="mailto:jimmygoncalves1@gmail.com"
                  className="contact-link relative flex min-h-[60px] items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  <Mail size={18} />
                  <span className="text-sm font-mono">Email</span>
                </a>
                <a
                  href="https://linkedin.com/in/teu-utilizador-aqui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link relative flex min-h-[60px] items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  <Linkedin size={18} />
                  <span className="text-sm font-mono">LinkedIn</span>
                </a>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://github.com/hyngux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link relative flex min-h-[60px] w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-white sm:w-[calc(50%-0.625rem)]"
                >
                  <Github size={18} />
                  <span className="text-sm font-mono">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
