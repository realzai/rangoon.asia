import Masthead from './components/Masthead'
import { HairRule, SectionDivider } from './components/Ornaments'
import {
  Shwedagon,
  SulePagoda,
  StrandHotel,
  Secretariat,
  HighCourt,
  CityHall,
  BogyokeMarket,
} from './components/Engravings'

const edifices = [
  {
    plate: 'Plate II',
    name: 'The Sule Pagoda',
    descriptor: 'A stúpa of greater antiquity than the city itself.',
    body:
      'Set at the very meeting of Sule Pagoda Road and Maha Bandoola, the octagonal stúpa is reckoned by tradition to enshrine a hair of the Buddha. About its base the city has grown up; about its base the city is most readily measured.',
    Engraving: SulePagoda,
  },
  {
    plate: 'Plate III',
    name: 'The Strand Hotel',
    descriptor: 'Of the Sarkies brothers; opened anno 1901.',
    body:
      'A long verandahed frontage upon the river road, much frequented by officers of the steamship lines and travellers in passage to the upper country. Its lounge is, of an evening, a notable resort.',
    Engraving: StrandHotel,
  },
  {
    plate: 'Plate IV',
    name: 'The Secretariat',
    descriptor: 'Seat of the administration of Lower Burma.',
    body:
      'A vast pile of red brick in the manner of the late Mr. Fowler, with twin wings and a central tower surmounted by an open dome. Its corridors house every department from the Forest Office to the Office of the Director-General of the Post.',
    Engraving: Secretariat,
  },
  {
    plate: 'Plate V',
    name: 'The High Court',
    descriptor: 'Where the Queen&rsquo;s justice is dispensed.',
    body:
      'A clock-tower in the Anglo-Indian Gothic, dominating the prospect from the Cantonment. Within, the Chief Justice and Puisne Judges sit through the heat of the day in robes inherited from a cooler latitude.',
    Engraving: HighCourt,
  },
  {
    plate: 'Plate VI',
    name: 'The City Hall',
    descriptor: 'Of the Indo-Saracenic order, with native pyatthat.',
    body:
      'A happy marriage of two manners: a classical base of arcaded verandahs surmounted by a stepped pyatthat roof, in the Burmese fashion. Lately completed by Mr. Sithu U Tin and accounted among the foremost public buildings.',
    Engraving: CityHall,
  },
  {
    plate: 'Plate VII',
    name: 'Bogyoke Market',
    descriptor: 'Lately Scott Market; the great bazaar.',
    body:
      'A long arcade where the silks of Mandalay, the lacquer of Pagán, the rubies of Mogók, and the every-day produce of the delta are gathered together under one roof of corrugated iron.',
    Engraving: BogyokeMarket,
  },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-broadsheet px-6 py-10">
      <Masthead />

      {/* ─── The Leading Article ─── */}
      <section className="mt-12">
        <SectionDivider
          eyebrow="The Leading Article"
          title={
            // Slight HTML break — passed as a string fragment via children-style title
            // but our component takes a string. Render the title literally.
            'Of the Golden City upon the Irrawaddy'
          }
          deck="Wherein we render an account of the Pagodas, the bazaars, and the European quarter, lately enlarged by the Public Works."
        />
        <div className="mt-2 text-center font-smallcaps text-[11px] uppercase tracking-[0.3em] text-ink-faded">
          From Our Resident Correspondent &middot; Phayre Street, the 22nd inst.
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

      {/* ─── Notable Edifices ─── */}
      <HairRule />
      <section>
        <SectionDivider
          eyebrow="Section the Second"
          title="Notable Edifices of the City"
          deck="With illustrations rendered upon the wood by our staff engraver, from sketches taken upon the ground."
        />

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {edifices.map(({ plate, name, descriptor, body, Engraving }) => (
            <article key={name} className="border border-ink bg-paper-light">
              <div className="border-b border-ink p-4">
                <Engraving className="block h-auto w-full" />
              </div>
              <div className="p-4">
                <div className="font-smallcaps text-[10px] uppercase tracking-[0.3em] text-ink-faded">
                  {plate}
                </div>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase leading-tight">
                  {name}
                </h3>
                <p
                  className="mt-1 font-display text-sm italic text-ink-soft"
                  dangerouslySetInnerHTML={{ __html: descriptor }}
                />
                <div className="rule-thin my-3" />
                <p className="text-justify text-[14px] leading-snug">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Quarters of the City ─── */}
      <HairRule />
      <section>
        <SectionDivider
          eyebrow="Section the Third"
          title="Quarters of the City"
          deck="An index of the principal townships, with the page upon which a fuller description may be found."
        />

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2">
          {[
            {
              name: 'Pabedan',
              descriptor: 'The mercantile heart; godowns and counting-houses.',
              page: 'p. 4',
            },
            {
              name: 'Kyauktada',
              descriptor: 'The seat of justice and the offices of the Crown.',
              page: 'p. 7',
            },
            {
              name: 'Lanmadaw',
              descriptor: 'Old timber-yards along the river; the boatmen&rsquo;s quarter.',
              page: 'p. 9',
            },
            {
              name: 'Latha',
              descriptor: 'The Chinese town, of arcaded shop-houses and lantern-makers.',
              page: 'p. 10',
            },
            {
              name: 'Pazundaung',
              descriptor: 'A creek-side quarter of rice-mills and bullock-carts.',
              page: 'p. 12',
            },
            {
              name: 'Bahan',
              descriptor: 'Beneath the Shwe Dagón; lakes, gardens, and bungalows.',
              page: 'p. 13',
            },
            {
              name: 'Sanchaung',
              descriptor: 'Of mango-groves and the older monasteries.',
              page: 'p. 15',
            },
            {
              name: 'Insein',
              descriptor: 'The railway works and the engine-sheds.',
              page: 'p. 16',
            },
          ].map(({ name, descriptor, page }) => (
            <div key={name} className="border-b border-dotted border-ink-faded pb-2 pt-1">
              <div className="flex items-baseline">
                <span className="font-display text-xl font-bold uppercase tracking-wide">
                  {name}
                </span>
                <span
                  className="mx-3 flex-1"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #534b3c 1px, transparent 1.4px)',
                    backgroundPosition: 'left bottom 0.35em',
                    backgroundSize: '6px 6px',
                    backgroundRepeat: 'repeat-x',
                    height: '1em',
                  }}
                />
                <span className="font-smallcaps text-[12px] uppercase tracking-widest text-ink-faded">
                  {page}
                </span>
              </div>
              <p
                className="mt-0.5 font-display text-sm italic text-ink-soft"
                dangerouslySetInnerHTML={{ __html: descriptor }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Almanack & Weather ─── */}
      <HairRule />
      <section>
        <SectionDivider
          eyebrow="Section the Fourth"
          title="Almanack & Weather"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Weather */}
          <article className="border border-ink p-5">
            <div className="text-center font-smallcaps text-[11px] uppercase tracking-[0.3em] text-ink-faded">
              Observations at the Cantonment
            </div>
            <div className="rule-thin my-3" />
            <dl className="grid grid-cols-2 gap-y-1 font-serif text-[14px]">
              <dt className="italic">Air, at noon</dt>
              <dd className="text-right">88°&nbsp;F.</dd>
              <dt className="italic">Air, at sunrise</dt>
              <dd className="text-right">74°&nbsp;F.</dd>
              <dt className="italic">Barometer</dt>
              <dd className="text-right">29.84&nbsp;in.</dd>
              <dt className="italic">Wind</dt>
              <dd className="text-right">S.W., light</dd>
              <dt className="italic">Sky</dt>
              <dd className="text-right">o&rsquo;ercast</dd>
              <dt className="italic">Rainfall, last 24h</dt>
              <dd className="text-right">0.42&nbsp;in.</dd>
            </dl>
            <div className="rule-thin my-3" />
            <p className="text-center font-display text-sm italic text-ink-soft">
              The south-west monsoon is by general report withdrawing.
            </p>
          </article>

          {/* Tides */}
          <article className="border border-ink p-5">
            <div className="text-center font-smallcaps text-[11px] uppercase tracking-[0.3em] text-ink-faded">
              Tides on the Hlaing
            </div>
            <div className="rule-thin my-3" />
            <table className="w-full font-serif text-[14px]">
              <thead>
                <tr className="border-b border-ink">
                  <th className="py-1 text-left font-smallcaps text-[10px] uppercase tracking-widest text-ink-faded">
                    &nbsp;
                  </th>
                  <th className="py-1 text-right font-smallcaps text-[10px] uppercase tracking-widest text-ink-faded">
                    Hr.
                  </th>
                  <th className="py-1 text-right font-smallcaps text-[10px] uppercase tracking-widest text-ink-faded">
                    Ft.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 italic">High water</td>
                  <td className="text-right tabular-nums">03 : 42</td>
                  <td className="text-right tabular-nums">17.4</td>
                </tr>
                <tr>
                  <td className="py-1 italic">Low water</td>
                  <td className="text-right tabular-nums">09 : 58</td>
                  <td className="text-right tabular-nums">3.1</td>
                </tr>
                <tr>
                  <td className="py-1 italic">High water</td>
                  <td className="text-right tabular-nums">16 : 11</td>
                  <td className="text-right tabular-nums">18.0</td>
                </tr>
                <tr>
                  <td className="py-1 italic">Low water</td>
                  <td className="text-right tabular-nums">22 : 27</td>
                  <td className="text-right tabular-nums">2.6</td>
                </tr>
              </tbody>
            </table>
            <div className="rule-thin my-3" />
            <p className="text-center font-display text-sm italic text-ink-soft">
              Pilots are warned of the shifting bar at Elephant Point.
            </p>
          </article>

          {/* Almanack */}
          <article className="border border-ink p-5">
            <div className="text-center font-smallcaps text-[11px] uppercase tracking-[0.3em] text-ink-faded">
              Almanack
            </div>
            <div className="rule-thin my-3" />
            <dl className="grid grid-cols-2 gap-y-1 font-serif text-[14px]">
              <dt className="italic">Sun rises</dt>
              <dd className="text-right tabular-nums">05 : 51</dd>
              <dt className="italic">Sun sets</dt>
              <dd className="text-right tabular-nums">17 : 38</dd>
              <dt className="italic">Moon</dt>
              <dd className="text-right">Waxing gibbous</dd>
              <dt className="italic">Sabbath day</dt>
              <dd className="text-right">Thadingyut full</dd>
            </dl>
            <div className="rule-thin my-3" />
            <p className="font-display text-sm italic text-ink-soft">
              Observances: the Festival of Lights upon the morrow. The terraces
              of the Pagoda will be illuminated from sunset until the second
              watch.
            </p>
          </article>
        </div>
      </section>

      {/* ─── Classifieds & Notices ─── */}
      <HairRule />
      <section>
        <SectionDivider
          eyebrow="Section the Fifth"
          title="Classifieds & Notices"
          deck="Inserted by paying advertisers; the Editor disclaims all responsibility for the contents thereof."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* WANTED */}
          <article className="border-[3px] border-double border-ink p-5">
            <div className="text-center font-display text-3xl font-black uppercase tracking-widest">
              Wanted
            </div>
            <div className="rule-thin my-3" />
            <p className="text-justify text-[14px] leading-snug">
              An assistant clerk, of sober habits and a fair hand, for the
              counting-house of <span className="italic">Messrs. Steel Brothers &amp; Co.</span>,
              Strand Road. Knowledge of double-entry book-keeping indispensable;
              of Hindustani, an advantage. Apply, with testimonials, before the
              30th instant.
            </p>
          </article>

          {/* TO LET */}
          <article className="border-[3px] border-double border-ink p-5">
            <div className="text-center font-display text-3xl font-black uppercase tracking-widest">
              To Let
            </div>
            <div className="rule-thin my-3" />
            <p className="text-justify text-[14px] leading-snug">
              A commodious bungalow upon the Lake at Kandawgyi: six bedrooms,
              wide verandahs, kitchen and out-houses detached, a tank for
              bathing, and a compound planted to mango. Sub-let by an officer
              proceeding on furlough. Terms moderate to a respectable family.
            </p>
          </article>

          {/* FOR SALE */}
          <article className="border-[3px] border-double border-ink p-5">
            <div className="text-center font-display text-3xl font-black uppercase tracking-widest">
              For Sale
            </div>
            <div className="rule-thin my-3" />
            <p className="text-justify text-[14px] leading-snug">
              A consignment of squared teak from the Pyinmana forests, of the
              first quality, suitable for ship&rsquo;s timbers or the
              construction of bungalows. Will be sold by public auction at the
              Custom House jetty on Tuesday, the 31st, at ten of the morning.
            </p>
          </article>

          {/* STEAMSHIP NOTICE */}
          <article className="border-[3px] border-double border-ink p-5">
            <div className="text-center font-display text-3xl font-black uppercase tracking-widest">
              Steamship
            </div>
            <div className="rule-thin my-3" />
            <p className="text-justify text-[14px] leading-snug">
              The <span className="italic">S.S. Java</span> of the British India
              Line will sail for Calcutta and Madras on Thursday next, the
              26th, at 4 p.m. precisely. Cargo received until noon of the 25th.
              Cabin passages to be secured at the Office, No. 12 Strand.
            </p>
          </article>

          {/* PUBLIC LECTURE */}
          <article className="border-[3px] border-double border-ink p-5">
            <div className="text-center font-display text-3xl font-black uppercase tracking-widest">
              Lecture
            </div>
            <div className="rule-thin my-3" />
            <p className="text-justify text-[14px] leading-snug">
              The <span className="italic">Asiatic Society of Burma</span> will
              meet at the Bernard Free Library on Friday at half past six.
              Paper to be read by Dr.&nbsp;Forchhammer, &ldquo;Upon the
              inscriptions of the Mon kingdom of Pegu.&rdquo; Visitors admitted.
            </p>
          </article>

          {/* CAUTIONARY */}
          <article className="border-[3px] border-double border-ink p-5">
            <div className="text-center font-display text-3xl font-black uppercase tracking-widest">
              Caution
            </div>
            <div className="rule-thin my-3" />
            <p className="text-justify text-[14px] leading-snug">
              The public is hereby warned that certain persons in the bazaars
              of Pazundaung have been observed to offer bills purporting to
              bear the signature of the undersigned. All such are forgeries.
              <span className="block mt-1 text-right italic">
                &mdash; H. R. Anderson, Manager.
              </span>
            </p>
          </article>
        </div>
      </section>

      {/* ─── Footer Colophon ─── */}
      <footer className="mt-24">
        <div className="rule-double" />
        <div className="rule-thin mt-1" />

        <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          {/* left: printer's mark */}
          <div className="text-center md:text-left">
            <svg
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-20 w-20 md:mx-0"
              role="img"
              aria-label="Printer&apos;s mark"
            >
              <g fill="#0e0d0b">
                <circle cx="40" cy="40" r="38" fill="none" stroke="#0e0d0b" strokeWidth="1.2" />
                <circle cx="40" cy="40" r="32" fill="none" stroke="#0e0d0b" strokeWidth="1" />
                <text
                  x="40"
                  y="46"
                  textAnchor="middle"
                  fontFamily="serif"
                  fontStyle="italic"
                  fontWeight="700"
                  fontSize="22"
                >
                  RG
                </text>
              </g>
            </svg>
            <div className="mt-2 font-smallcaps text-[10px] uppercase tracking-[0.3em] text-ink-faded">
              Printer&rsquo;s Mark
            </div>
          </div>

          {/* center: imprint */}
          <div className="text-center font-serif">
            <div className="font-blackletter text-2xl">The Rangoon Gazette</div>
            <p className="mt-2 text-[14px] leading-snug">
              Printed and published every weekday at
              <br />
              The Press of Hanthawaddy &amp; Co.,
              <br />
              No.&nbsp;39, Phayre Street, Rangoon.
            </p>
            <p className="mt-3 font-display text-sm italic text-ink-soft">
              Subscriptions: One Rupee per quarter, post paid.
            </p>
          </div>

          {/* right: editorial */}
          <div className="text-center font-serif md:text-right">
            <div className="font-smallcaps text-[10px] uppercase tracking-[0.3em] text-ink-faded">
              Editorial Offices
            </div>
            <p className="mt-1 text-[14px] leading-snug">
              Editor &mdash; Mr. J. P. Maitland
              <br />
              Sub-editor &mdash; Mr. Maung Tin
              <br />
              Engraver &mdash; Mr. Saya San
            </p>
            <p className="mt-3 font-display text-sm italic text-ink-soft">
              All correspondence to the Editor.
            </p>
          </div>
        </div>

        <div className="rule-thin mt-10" />
        <div className="py-4 text-center font-smallcaps text-[10px] uppercase tracking-[0.4em] text-ink-faded">
          Set in the type of the Press &middot; Composed by hand &middot;
          Printed upon paper of the country
        </div>
      </footer>
    </main>
  )
}
