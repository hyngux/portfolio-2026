"use client"

const START_DATE = Date.UTC(2026, 1, 2)
const END_DATE = Date.UTC(2026, 5, 6)

function getTodayUtcTimestamp() {
  const today = new Date()

  return Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
}

function getInternshipProgress() {
  const today = getTodayUtcTimestamp()
  const totalDuration = END_DATE - START_DATE
  const elapsedDuration = today - START_DATE

  return Number(Math.min(Math.max((elapsedDuration / totalDuration) * 100, 0), 100).toFixed(1))
}

export default function InternshipProgress() {
  const progress = getInternshipProgress()

  return (
    <div className="mx-auto mt-6 w-full max-w-sm rounded-2xl border border-zinc-800/90 bg-zinc-950/70 p-4 text-left backdrop-blur-sm sm:mt-7">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          Professional Internship
        </span>
      </div>

      <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.45)] transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-4 font-mono text-[10px] leading-relaxed">
        <span className="text-zinc-500">{progress.toFixed(1)}%</span>
        <span className="text-right text-zinc-600">Estimated completion: June 2026</span>
      </div>
    </div>
  )
}
