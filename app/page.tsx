import Masthead from './components/Masthead'
import { Shwedagon } from './components/Engravings'

export default function Home() {
  return (
    <main className="mx-auto max-w-broadsheet px-6 py-10">
      <Masthead />

      {/* ─── The Leading Article ─── */}
      <section className="mt-10">
        <div className="text-center">
          <div className="font-smallcaps text-[11px] uppercase tracking-[0.4em] text-ink-faded">
            &mdash;&nbsp;&nbsp;The Leading Article&nbsp;&nbsp;&mdash;
          </div>
          <h2 className="mt-3 font-display text-5xl font-black uppercase leading-[1.05] tracking-tight sm:text-7xl">
            Of the Golden City
            <br />
            upon the Irrawaddy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg italic text-ink-soft sm:text-xl">
            Wherein we render an account of the Pagodas, the bazaars, and the
            European quarter, lately enlarged by the Public Works.
          </p>
          <div className="mt-4 font-smallcaps text-[11px] uppercase tracking-[0.3em] text-ink-faded">
            From Our Resident Correspondent &middot; Phayre Street, the 22nd inst.
          </div>
        </div>

        <div className="rule-thin mt-6" />

        {/* 4-column broadsheet body */}
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Column 1 — engraving + caption */}
          <figure className="lg:border-r lg:border-ink lg:pr-6">
            <div className="border border-ink bg-paper-light p-3">
              <Shwedagon className="block h-auto w-full" />
            </div>
            <figcaption className="mt-2 text-center font-smallcaps text-[10px] uppercase tracking-[0.25em]">
              Fig. I &mdash; The Shwe Dagón, by moonlight
            </figcaption>
            <p className="mt-3 text-justify text-[15px] leading-snug">
              <span className="float-left mr-2 mt-1 font-display text-[5.25rem] font-black leading-[0.78] text-ink">
                F
              </span>
              ew harbours in the East offer to the traveller so picturesque a
              prospect as that of Rangoon at sunrise. The river, broad and tawny
              with the silt of three thousand miles, glides past the godowns and
              the timber-yards; the masts of brigs and the tall funnels of
              steamers stand against a sky already gilded by the first light upon
              the Pagoda.
            </p>
          </figure>

          {/* Column 2 */}
          <div className="lg:border-r lg:border-ink lg:pr-6">
            <p className="text-justify text-[15px] leading-snug">
              The Shwe Dagón &mdash; that vast and venerable monument, raised, by
              ancient tradition, upon eight hairs of Lord Gautama himself
              &mdash; rises from the northern ridge to a height of three hundred
              and twenty-six feet. Its terraces, mounted by long flights of
              weather-worn steps, are thronged from dawn till dusk by pilgrims
              of every condition: the merchant from Mandalay, the cultivator
              from the delta, the Shan trader newly arrived by river-boat.
            </p>
            <p className="mt-3 text-justify text-[15px] leading-snug">
              Around the central stúpa cluster some sixty subsidiary shrines,
              their gilded pinnacles catching the light of the morning in a
              manner not easily forgotten by any who have witnessed it.
            </p>
          </div>

          {/* Column 3 */}
          <div className="lg:border-r lg:border-ink lg:pr-6">
            <p className="text-justify text-[15px] leading-snug">
              The European quarter, between the river and the Cantonment, has of
              late assumed an aspect altogether changed. The Strand, once a riot
              of warehouses and palm-leaf sheds, presents now a frontage of
              stone and stucco, broken at intervals by arcaded verandahs in the
              Italian manner. The new Custom House, the Gymkhana, and the
              offices of the Irrawaddy Flotilla bear witness to the energy of
              the Public Works Department.
            </p>
            <p className="mt-3 text-justify text-[15px] leading-snug">
              Phayre Street, named for the late Sir Arthur, is now metalled
              throughout its length, and may be perambulated of an evening
              without the inconvenience formerly attendant upon the monsoon.
            </p>
          </div>

          {/* Column 4 — pull quote + close */}
          <div>
            <blockquote className="border-y-2 border-double border-ink py-4 text-center font-display text-2xl italic leading-snug">
              &ldquo;A frontage of stone and stucco, broken at intervals by
              verandahs in the Italian manner.&rdquo;
            </blockquote>
            <p className="mt-3 text-justify text-[15px] leading-snug">
              Yet beyond Phayre Street, in the quarters of Pazundaung and
              Lanmadaw, the older Burma persists. There the bullock-cart and
              the longyi keep their ancient ways; the betel-seller squats at
              his stall; the bell-rope of a wooden monastery stirs at the touch
              of an unseen hand.
            </p>
            <p className="mt-3 text-right font-display italic">&mdash; J. P. M.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
