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

export function SulePagoda({ className, title = 'The Sule Pagoda' }: EngravingProps) {
  return (
    <svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <g fill="#0e0d0b" stroke="#0e0d0b">
        <rect x="0" y="262" width="200" height="2" />
        {/* octagonal stepped base — Sule has a clear octagonal plan */}
        <path d="M40 262 L160 262 L154 248 L46 248 Z" />
        <path d="M52 248 L148 248 L143 234 L57 234 Z" />
        <path d="M64 234 L136 234 L131 220 L69 220 Z" />
        <path d="M74 220 L126 220 L121 204 L79 204 Z" />
        {/* octagonal mid section */}
        <path d="M82 204 L118 204 L114 190 L86 190 Z" />
        {/* bell — octagonal-fluted feel via two angled sides */}
        <path d="M86 190 Q88 130 100 110 Q112 130 114 190 Z" />
        {/* lotus throne */}
        <path d="M89 110 Q100 118 111 110 L108 102 Q100 108 92 102 Z" />
        {/* banana bud */}
        <path d="M93 102 Q100 90 107 102 Q107 92 100 80 Q93 92 93 102 Z" />
        {/* hti — five tiers (smaller than Shwedagon's seven) */}
        <line x1="100" y1="80" x2="100" y2="74" strokeWidth="1.5" />
        <ellipse cx="100" cy="74" rx="11" ry="2.2" />
        <line x1="100" y1="72" x2="100" y2="66" strokeWidth="1.5" />
        <ellipse cx="100" cy="66" rx="8" ry="1.8" />
        <line x1="100" y1="64" x2="100" y2="59" strokeWidth="1.2" />
        <ellipse cx="100" cy="59" rx="6" ry="1.5" />
        <line x1="100" y1="57" x2="100" y2="52" strokeWidth="1" />
        <ellipse cx="100" cy="52" rx="4" ry="1.2" />
        <line x1="100" y1="50" x2="100" y2="44" strokeWidth="1" />
        <circle cx="100" cy="42" r="2.2" />
        <path d="M100 39 L100 31 L107 34 L100 36 Z" />
      </g>
    </svg>
  )
}

export function StrandHotel({ className, title = 'The Strand Hotel' }: EngravingProps) {
  // Wide colonial frontage, three storeys, central pediment, awnings
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <g fill="#0e0d0b">
        <rect x="0" y="170" width="320" height="2" />
        {/* main building block */}
        <rect x="20" y="50" width="280" height="120" />
        {/* paper-coloured cut-outs for windows etc. */}
        <g fill="#f3eee2">
          {/* third storey: 12 small arched windows */}
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={`w3-${i}`} x={32 + i * 22} y={62} width="12" height="18" rx="6" />
          ))}
          {/* second storey: 12 taller rectangular windows */}
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={`w2-${i}`} x={32 + i * 22} y={92} width="12" height="22" />
          ))}
          {/* awning shadow line */}
          <rect x="20" y="125" width="280" height="3" />
          {/* ground-floor arches: 11 arched openings */}
          {Array.from({ length: 11 }).map((_, i) => (
            <path
              key={`arch-${i}`}
              d={`M${36 + i * 24} 168 L${36 + i * 24} 145 Q${48 + i * 24} 134 ${60 + i * 24} 145 L${60 + i * 24} 168 Z`}
            />
          ))}
        </g>
        {/* central pediment */}
        <path d="M140 50 L180 50 L180 30 L160 18 L140 30 Z" />
        <g fill="#f3eee2">
          <rect x="155" y="35" width="10" height="12" />
        </g>
        {/* flag-pole */}
        <line x1="160" y1="18" x2="160" y2="2" stroke="#0e0d0b" strokeWidth="1.5" />
        <path d="M160 4 L172 8 L160 12 Z" />
        {/* awning over central entrance */}
        <path d="M148 128 L172 128 L168 142 L152 142 Z" />
      </g>
    </svg>
  )
}

export function Secretariat({ className, title = 'The Secretariat' }: EngravingProps) {
  // Long Victorian wings flanking a central tower with onion dome
  return (
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <g fill="#0e0d0b">
        <rect x="0" y="170" width="320" height="2" />
        {/* west wing */}
        <rect x="10" y="100" width="120" height="70" />
        {/* east wing */}
        <rect x="190" y="100" width="120" height="70" />
        {/* central block */}
        <rect x="125" y="80" width="70" height="90" />
        {/* central tower */}
        <rect x="145" y="40" width="30" height="40" />
        {/* dome — pointed onion shape */}
        <path d="M140 40 Q160 8 180 40 Z" />
        {/* finial */}
        <line x1="160" y1="10" x2="160" y2="-2" stroke="#0e0d0b" strokeWidth="1.5" />
        <circle cx="160" cy="-2" r="2" />
        {/* corner turrets on the wings */}
        <rect x="10" y="84" width="14" height="20" />
        <path d="M8 84 L26 84 L17 70 Z" />
        <rect x="116" y="84" width="14" height="20" />
        <path d="M114 84 L132 84 L123 70 Z" />
        <rect x="190" y="84" width="14" height="20" />
        <path d="M188 84 L206 84 L197 70 Z" />
        <rect x="296" y="84" width="14" height="20" />
        <path d="M294 84 L312 84 L303 70 Z" />
        {/* paper-cut windows in regular rhythm */}
        <g fill="#f3eee2">
          {/* west wing windows */}
          {Array.from({ length: 10 }).map((_, i) => (
            <rect key={`sw-${i}`} x={18 + i * 12} y={114} width="6" height="14" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <rect key={`sw2-${i}`} x={18 + i * 12} y={140} width="6" height="14" />
          ))}
          {/* east wing windows */}
          {Array.from({ length: 10 }).map((_, i) => (
            <rect key={`se-${i}`} x={198 + i * 12} y={114} width="6" height="14" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <rect key={`se2-${i}`} x={198 + i * 12} y={140} width="6" height="14" />
          ))}
          {/* central windows */}
          <rect x="135" y="100" width="8" height="20" />
          <rect x="151" y="100" width="8" height="20" />
          <rect x="167" y="100" width="8" height="20" />
          <rect x="183" y="100" width="8" height="20" />
          {/* tower window */}
          <rect x="156" y="56" width="8" height="14" />
        </g>
      </g>
    </svg>
  )
}

export function HighCourt({ className, title = 'The High Court' }: EngravingProps) {
  // Brick Victorian with prominent clock tower
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <g fill="#0e0d0b">
        <rect x="0" y="232" width="240" height="2" />
        {/* main block */}
        <rect x="10" y="150" width="220" height="82" />
        {/* central tower base */}
        <rect x="100" y="80" width="40" height="70" />
        {/* clock-face level */}
        <rect x="98" y="60" width="44" height="22" />
        {/* spire */}
        <path d="M98 60 L142 60 L120 14 Z" />
        {/* flag */}
        <line x1="120" y1="14" x2="120" y2="2" stroke="#0e0d0b" strokeWidth="1.5" />
        <path d="M120 4 L130 8 L120 12 Z" />
        {/* corner pavilions */}
        <rect x="10" y="138" width="22" height="14" />
        <path d="M8 138 L34 138 L21 124 Z" />
        <rect x="208" y="138" width="22" height="14" />
        <path d="M206 138 L232 138 L219 124 Z" />
        {/* clock face */}
        <g fill="#f3eee2">
          <circle cx="120" cy="71" r="9" />
        </g>
        <g stroke="#0e0d0b" strokeWidth="1" fill="none">
          <circle cx="120" cy="71" r="9" />
        </g>
        {/* clock hands — XII and IX */}
        <line x1="120" y1="71" x2="120" y2="65" stroke="#0e0d0b" strokeWidth="1" />
        <line x1="120" y1="71" x2="115" y2="71" stroke="#0e0d0b" strokeWidth="1" />
        {/* paper-cut windows */}
        <g fill="#f3eee2">
          {/* arched ground-floor windows */}
          {Array.from({ length: 9 }).map((_, i) => {
            const cx = 24 + i * 22
            return (
              <path
                key={`hc-arch-${i}`}
                d={`M${cx} 220 L${cx} 188 Q${cx + 7} 178 ${cx + 14} 188 L${cx + 14} 220 Z`}
              />
            )
          })}
          {/* second storey rectangular */}
          {Array.from({ length: 9 }).map((_, i) => (
            <rect key={`hc-w2-${i}`} x={24 + i * 22} y={158} width="14" height="20" />
          ))}
          {/* tower window */}
          <rect x="115" y="100" width="10" height="16" />
        </g>
      </g>
    </svg>
  )
}

export function CityHall({ className, title = 'The City Hall' }: EngravingProps) {
  // Burmese-Edwardian fusion: stepped pyatthat tiered roof over a classical base
  return (
    <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <g fill="#0e0d0b">
        <rect x="0" y="192" width="280" height="2" />
        {/* main classical base */}
        <rect x="20" y="120" width="240" height="72" />
        {/* central projecting block */}
        <rect x="100" y="100" width="80" height="92" />
        {/* pediment over central block */}
        <path d="M96 100 L184 100 L140 80 Z" />
        {/* pyatthat — stepped tiered roof, three tiers */}
        <path d="M104 80 L176 80 L168 64 L112 64 Z" />
        <path d="M114 64 L166 64 L160 50 L120 50 Z" />
        <path d="M124 50 L156 50 L150 38 L130 38 Z" />
        {/* finial spire */}
        <path d="M134 38 L146 38 L140 22 Z" />
        <line x1="140" y1="22" x2="140" y2="6" stroke="#0e0d0b" strokeWidth="1.2" />
        <circle cx="140" cy="6" r="2" />
        {/* flanking decorative urns */}
        <g>
          <rect x="40" y="108" width="10" height="12" />
          <ellipse cx="45" cy="106" rx="6" ry="3" />
          <rect x="230" y="108" width="10" height="12" />
          <ellipse cx="235" cy="106" rx="6" ry="3" />
        </g>
        {/* paper-cut elements */}
        <g fill="#f3eee2">
          {/* base columns/arches */}
          {Array.from({ length: 5 }).map((_, i) => (
            <path
              key={`ch-arch-${i}`}
              d={`M${30 + i * 16} 188 L${30 + i * 16} 162 Q${37 + i * 16} 152 ${44 + i * 16} 162 L${44 + i * 16} 188 Z`}
            />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <path
              key={`ch-arch-r-${i}`}
              d={`M${190 + i * 16} 188 L${190 + i * 16} 162 Q${197 + i * 16} 152 ${204 + i * 16} 162 L${204 + i * 16} 188 Z`}
            />
          ))}
          {/* central entrance */}
          <path d="M126 188 L126 144 Q140 130 154 144 L154 188 Z" />
          {/* upper floor windows on central block */}
          <rect x="112" y="106" width="8" height="14" />
          <rect x="160" y="106" width="8" height="14" />
        </g>
      </g>
    </svg>
  )
}

export function BogyokeMarket({ className, title = 'Bogyoke Market' }: EngravingProps) {
  // Long arcade with repeating arches and a low pediment over the central entry
  return (
    <svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <g fill="#0e0d0b">
        <rect x="0" y="142" width="320" height="2" />
        {/* main long block */}
        <rect x="10" y="60" width="300" height="82" />
        {/* central pediment */}
        <path d="M140 60 L180 60 L180 38 L160 26 L140 38 Z" />
        {/* paper-cut arched openings repeating along the front */}
        <g fill="#f3eee2">
          {Array.from({ length: 13 }).map((_, i) => {
            const cx = 18 + i * 22
            return (
              <path
                key={`bm-${i}`}
                d={`M${cx} 138 L${cx} 100 Q${cx + 9} 84 ${cx + 18} 100 L${cx + 18} 138 Z`}
              />
            )
          })}
          {/* clerestory windows */}
          {Array.from({ length: 13 }).map((_, i) => (
            <rect key={`bm-cl-${i}`} x={20 + i * 22} y={70} width="14" height="10" />
          ))}
          {/* sign panel under pediment */}
          <rect x="148" y="42" width="24" height="8" />
        </g>
        {/* tiny finial */}
        <line x1="160" y1="26" x2="160" y2="14" stroke="#0e0d0b" strokeWidth="1.2" />
        <circle cx="160" cy="14" r="1.6" />
      </g>
    </svg>
  )
}
