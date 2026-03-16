const circleItems = Array.from({ length: 10 }, (_, index) => index)

export default function BackgroundCircles() {
  return (
    <div aria-hidden className="background-area pointer-events-none fixed inset-0 overflow-hidden">
      <ul className="background-circles">
        {circleItems.map((item) => (
          <li key={item} />
        ))}
      </ul>
    </div>
  )
}
