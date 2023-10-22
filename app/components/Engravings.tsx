/* Hand-drawn SVG engravings of Rangoon landmarks. Wood-block / line-cut feel. */

type EngravingProps = {
  className?: string
  title?: string
}

export function Shwedagon({ className, title = 'The Shwe Dagón Pagoda' }: EngravingProps) {
  return (
    <svg
      viewBox="0 0 300 440"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <g fill="#0e0d0b" stroke="#0e0d0b" strokeLinejoin="miter">
        {/* ground line */}
        <rect x="0" y="412" width="300" height="2" />

        {/* left subsidiary stupa */}
        <g>
          <path d="M22 412 L22 372 L17 370 L36 348 Q36 336 46 326 Q56 336 56 348 L75 370 L70 372 L70 412 Z" />
          <path d="M40 326 L40 312 L36 312 L40 300 L52 300 L56 312 L52 312 L52 326 Z" />
          <line x1="46" y1="300" x2="46" y2="280" strokeWidth="1.5" />
          <circle cx="46" cy="278" r="2" />
        </g>

        {/* right subsidiary stupa (mirror) */}
        <g transform="translate(208 0)">
          <path d="M22 412 L22 372 L17 370 L36 348 Q36 336 46 326 Q56 336 56 348 L75 370 L70 372 L70 412 Z" />
          <path d="M40 326 L40 312 L36 312 L40 300 L52 300 L56 312 L52 312 L52 326 Z" />
          <line x1="46" y1="300" x2="46" y2="280" strokeWidth="1.5" />
          <circle cx="46" cy="278" r="2" />
        </g>

        {/* main pagoda — tiered base platforms */}
        <path d="M62 412 L238 412 L232 392 L68 392 Z" />
        <path d="M82 392 L218 392 L212 374 L88 374 Z" />
        <path d="M98 374 L202 374 L196 356 L104 356 Z" />
        <path d="M112 356 L188 356 L182 338 L118 338 Z" />

        {/* octagonal section */}
        <path d="M122 338 L178 338 L173 322 L127 322 Z" />

        {/* bell (khaung laung) */}
        <path d="M129 322 Q129 240 150 210 Q171 240 171 322 Z" />

        {/* shading: a few engraved hatch lines on the bell, right side */}
        <g stroke="#f3eee2" strokeWidth="1">
          <line x1="158" y1="232" x2="168" y2="244" />
          <line x1="160" y1="248" x2="170" y2="260" />
          <line x1="161" y1="264" x2="171" y2="276" />
          <line x1="162" y1="280" x2="172" y2="292" />
          <line x1="162" y1="296" x2="172" y2="308" />
        </g>

        {/* lotus throne (kya lan) */}
        <path d="M134 210 Q150 220 166 210 L162 200 Q150 208 138 200 Z" />

        {/* banana bud (paungyit) */}
        <path d="M141 200 Q150 184 159 200 Q159 188 150 174 Q141 188 141 200 Z" />

        {/* hti — umbrella crown, seven tiers */}
        <g>
          <line x1="150" y1="174" x2="150" y2="166" strokeWidth="2" />
          <ellipse cx="150" cy="166" rx="16" ry="3" />
          <line x1="150" y1="163" x2="150" y2="155" strokeWidth="2" />
          <ellipse cx="150" cy="155" rx="13" ry="2.5" />
          <line x1="150" y1="153" x2="150" y2="146" strokeWidth="2" />
          <ellipse cx="150" cy="146" rx="10" ry="2" />
          <line x1="150" y1="144" x2="150" y2="137" strokeWidth="1.5" />
          <ellipse cx="150" cy="137" rx="8" ry="1.8" />
          <line x1="150" y1="135" x2="150" y2="128" strokeWidth="1.5" />
          <ellipse cx="150" cy="128" rx="6" ry="1.6" />
          <line x1="150" y1="126" x2="150" y2="120" strokeWidth="1.2" />
          <ellipse cx="150" cy="120" rx="4" ry="1.2" />
          <line x1="150" y1="118" x2="150" y2="110" strokeWidth="1" />
          {/* diamond bud (sein bu) */}
          <circle cx="150" cy="106" r="3" />
          {/* vane (hngetmyatna) — small bird-flag */}
          <path d="M150 102 L150 92 L160 96 L150 98 Z" />
        </g>

        {/* foreground silhouette of palm fronds, left */}
        <g>
          <path d="M0 412 L0 405 Q12 402 18 410 Q12 406 6 410 Q14 406 24 414" stroke="#0e0d0b" strokeWidth="1.2" fill="none" />
        </g>
      </g>
    </svg>
  )
}
