/* Typographic ornaments: fleurons, dividers, section headers. */

export function Fleuron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g fill="#0e0d0b" stroke="#0e0d0b" strokeWidth="1" strokeLinecap="round">
        <path
          d="M30 4 Q22 4 22 12 Q22 18 28 18 Q30 18 30 16 Q30 14 28 14 Q26 14 26 12 Q26 8 32 8 Q38 8 38 12 Q38 14 36 14 Q34 14 34 16 Q34 18 36 18 Q42 18 42 12 Q42 4 30 4 Z"
          fill="#0e0d0b"
        />
        <circle cx="6" cy="12" r="1.6" />
        <circle cx="14" cy="12" r="1.2" />
        <circle cx="46" cy="12" r="1.2" />
        <circle cx="54" cy="12" r="1.6" />
      </g>
    </svg>
  )
}

export function SectionDivider({
  eyebrow,
  title,
  deck,
}: {
  eyebrow: string
  title: string
  deck?: string
}) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-16 bg-ink sm:w-24" />
        <span className="font-smallcaps text-[11px] uppercase tracking-[0.4em] text-ink-faded whitespace-nowrap">
          {eyebrow}
        </span>
        <span className="h-px w-16 bg-ink sm:w-24" />
      </div>
      <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl">
        {title}
      </h2>
      {deck ? (
        <p className="mx-auto mt-3 max-w-2xl font-display text-base italic text-ink-soft sm:text-lg">
          {deck}
        </p>
      ) : null}
      <div className="mt-5 flex items-center justify-center">
        <Fleuron className="h-4 w-16" />
      </div>
    </div>
  )
}

export function HairRule() {
  return (
    <div className="my-12 flex items-center justify-center gap-3">
      <span className="h-px flex-1 bg-ink" />
      <Fleuron className="h-4 w-16" />
      <span className="h-px flex-1 bg-ink" />
    </div>
  )
}
