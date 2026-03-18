"use client"

import { scrollToContactAndHighlight } from "@/lib/contact"

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-5xl px-3 pt-3 sm:px-6">
        <div className="surface-card flex min-h-14 items-center justify-between gap-2 rounded-[24px] px-3 py-2 sm:rounded-full sm:px-6">
          <span className="shrink-0 text-sm font-bold tracking-tighter text-white sm:text-xl">Jimmy</span>
          <div className="nav-links flex min-w-0 items-center justify-end gap-2 overflow-x-auto whitespace-nowrap text-[10px] text-zinc-400 sm:gap-8 sm:text-sm">
            <a href="#about" className="cursor-pointer transition-colors hover:text-white">
              About
            </a>
            <a href="#projects" className="cursor-pointer transition-colors hover:text-white">
              Projects
            </a>
            <a
              href="#contact"
              onClick={scrollToContactAndHighlight}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1.5 font-medium text-blue-400 transition-colors hover:border-blue-400/50 hover:text-blue-300 sm:px-3"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
