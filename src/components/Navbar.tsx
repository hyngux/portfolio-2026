"use client"

import { scrollToContactAndHighlight } from "@/lib/contact"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-5xl px-4 pt-3 sm:px-6">
        <div className="surface-card flex h-14 items-center justify-between gap-4 rounded-full px-4 sm:px-6">
          <span className="font-bold tracking-tighter text-lg text-white sm:text-xl">Jimmy</span>
          <div className="flex min-w-0 items-center justify-end gap-4 overflow-x-auto whitespace-nowrap text-xs text-zinc-400 sm:gap-8 sm:text-sm">
            <a href="#sobre" className="cursor-pointer transition-colors hover:text-white">
              Sobre
            </a>
            <a href="#projetos" className="cursor-pointer transition-colors hover:text-white">
              Projetos
            </a>
            <a
              href="#contacto"
              onClick={scrollToContactAndHighlight}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 font-medium text-blue-400 transition-colors hover:border-blue-400/50 hover:text-blue-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
