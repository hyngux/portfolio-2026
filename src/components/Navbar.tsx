export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold tracking-tighter text-xl text-white">Jimmy</span>
        <div className="flex gap-8 text-sm text-zinc-400">
          <a href="#sobre" className="hover:text-white transition-colors cursor-pointer">
            Sobre
          </a>
          <a href="#projetos" className="hover:text-white transition-colors cursor-pointer">
            Projetos
          </a>
          <a
            href="#contacto"
            className="text-blue-500 font-medium hover:text-blue-400 transition-colors cursor-pointer"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}
