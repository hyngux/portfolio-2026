"use client"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { scrollToContactAndHighlight } from "@/lib/contact"

const typedMessages = [
  "> currently learning fullstack development...",
  "> currently learning clean code practices...",
  "> currently learning backend logic and APIs...",
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [messageIndex, setMessageIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const typedText = prefersReducedMotion ? typedMessages[0] : displayText

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const currentMessage = typedMessages[messageIndex]
    const reachedEnd = displayText === currentMessage
    const reachedStart = displayText.length === 0

    let timeout = 85

    if (!isDeleting && reachedEnd) {
      timeout = 1400
    } else if (isDeleting && reachedStart) {
      timeout = 250
    } else if (isDeleting) {
      timeout = 36
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && !reachedEnd) {
        setDisplayText(currentMessage.slice(0, displayText.length + 1))
        return
      }

      if (!isDeleting && reachedEnd) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && !reachedStart) {
        setDisplayText(currentMessage.slice(0, displayText.length - 1))
        return
      }

      setIsDeleting(false)
      setMessageIndex((currentIndex) => (currentIndex + 1) % typedMessages.length)
    }, timeout)

    return () => window.clearTimeout(timer)
  }, [displayText, isDeleting, messageIndex, prefersReducedMotion])

  return (
    <section className="flex min-h-[78svh] flex-col items-center justify-center px-4 text-center sm:h-[70vh] sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl font-black uppercase tracking-tighter text-white sm:text-6xl md:text-8xl">
          <span className="hologram-text">Web Developer</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
          A construir interfaces modernas enquanto aprofundo conhecimentos em desenvolvimento Fullstack.
          Focado em aprender as melhores práticas para entregar código limpo e projetos com um acabamento cuidado.
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-4 max-w-2xl min-h-[1.5rem] font-mono text-sm text-zinc-400 sm:min-h-[1.75rem] sm:text-base md:text-lg"
        >
          <span className="typewriter-text">{typedText}</span>
          <span className="typewriter-cursor" aria-hidden="true">
            |
          </span>
        </motion.p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5"
          >
            Ver projetos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contacto"
            onClick={scrollToContactAndHighlight}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-blue-500/40 hover:text-white"
          >
            Falar comigo
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
          {["Frontend Focus", "Backend Learning", "CTeSP Intern"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-colors hover:border-blue-500/30 hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500 sm:tracking-[0.3em]">
          Disponível para novos desafios
        </span>
      </div>

      {/* Rato para scroll animado */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-14 hidden h-10 w-6 justify-center rounded-full border-2 border-zinc-800 p-1 md:flex"
      >
        <div className="w-1 h-2 bg-blue-600 rounded-full" />
      </motion.div>
    </section>
  )
}
