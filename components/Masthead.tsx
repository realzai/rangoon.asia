export default function Masthead() {
  return (
    <header className="border-b-[3px] border-double border-ink pb-3">
      {/* Top strip — small caps ribbon above the title */}
      <div className="flex items-center justify-between border-b border-ink py-1.5 font-smallcaps text-[10px] uppercase tracking-[0.35em] text-ink">
        <span>Printed in Burma</span>
        <span className="hidden sm:inline">By Her Majesty&rsquo;s Mail</span>
        <span>Price&nbsp;&mdash;&nbsp;One Anna</span>
      </div>

      {/* Title row: side mottos + blackletter wordmark */}
      <div className="grid grid-cols-12 items-center gap-4 pt-6 sm:pt-10">
        {/* Left motto */}
        <aside className="col-span-3 hidden sm:block">
          <div className="border border-ink p-3 text-center">
            <div className="font-smallcaps text-[10px] uppercase tracking-[0.3em]">
              Motto of the House
            </div>
            <div className="mt-1 font-display text-xl italic">
              Lux in Oriente
            </div>
            <div className="mt-1 font-serif text-[11px] italic text-ink-faded">
              &mdash; Light in the East &mdash;
            </div>
          </div>
        </aside>

        {/* Wordmark */}
        <div className="col-span-12 sm:col-span-6 text-center">
          <h1 className="font-blackletter leading-none text-ink text-[clamp(3rem,11vw,8.5rem)]">
            The Rangoon Gazette
          </h1>
          <p className="mt-3 font-display italic text-base sm:text-lg">
            A Daily Chronicle of the Golden City upon the Irrawaddy
          </p>
        </div>

        {/* Right almanac */}
        <aside className="col-span-3 hidden sm:block">
          <div className="border border-ink p-3 text-center">
            <div className="font-smallcaps text-[10px] uppercase tracking-[0.3em]">
              This Day&rsquo;s Almanack
            </div>
            <div className="mt-1 font-display text-xl">23&nbsp;Oct.</div>
            <div className="mt-1 font-serif text-[11px] italic text-ink-faded">
              Sun rises 5:51 &middot; sets 17:38
            </div>
          </div>
        </aside>
      </div>

      {/* Folio strip — volume, issue, dateline */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-y-1 border-y border-ink py-1.5 font-smallcaps text-[11px] uppercase tracking-[0.25em]">
        <span>Vol.&nbsp;CLXXII &nbsp;&middot;&nbsp; No.&nbsp;4,217</span>
        <span className="hidden md:inline">
          Monday, the Twenty-third of October, MDCCCLII
        </span>
        <span>Sixteen Pages</span>
      </div>
    </header>
  )
}
