import Masthead from './components/Masthead'

export default function Home() {
  return (
    <main className="mx-auto max-w-broadsheet px-6 py-10">
      <Masthead />
      <section className="mt-10 font-serif">
        <p className="italic text-ink-faded">
          &mdash; the press is being set; the lede comes in tomorrow&rsquo;s edition.
        </p>
      </section>
    </main>
  )
}
