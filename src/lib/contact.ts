import type { MouseEvent } from "react"

const CONTACT_HASH = "#contacto"

function dispatchContactHighlight() {
  window.dispatchEvent(new Event("contact-highlight"))
}

export function scrollToContactAndHighlight(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()

  const target = document.getElementById("contacto")

  if (!target) {
    return
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (window.location.hash !== CONTACT_HASH) {
    window.history.pushState(null, "", CONTACT_HASH)
  }

  if (prefersReducedMotion) {
    target.scrollIntoView({ behavior: "auto", block: "start" })
    window.setTimeout(dispatchContactHighlight, 80)
    return
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" })

  let frameId = 0
  let lastTop = Number.POSITIVE_INFINITY
  let stableFrames = 0

  const fallbackId = window.setTimeout(() => {
    window.cancelAnimationFrame(frameId)
    dispatchContactHighlight()
  }, 1800)

  const checkIfSettled = () => {
    const top = target.getBoundingClientRect().top
    const movement = Math.abs(top - lastTop)
    const nearViewportTarget = top >= 0 && top <= 160

    if (nearViewportTarget && movement < 0.6) {
      stableFrames += 1
    } else {
      stableFrames = 0
    }

    if (stableFrames >= 8) {
      window.clearTimeout(fallbackId)
      dispatchContactHighlight()
      return
    }

    lastTop = top
    frameId = window.requestAnimationFrame(checkIfSettled)
  }

  frameId = window.requestAnimationFrame(checkIfSettled)
}
