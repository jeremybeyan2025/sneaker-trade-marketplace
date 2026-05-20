import { Header } from "@/components/Header";
import { featuredListings, liveDrops } from "@/lib/data";
import { ArrowRight, RadioTower, Sparkles } from "lucide-react";

export default function LiveDropPage() {
  const heroPair = featuredListings[4] ?? featuredListings[0];

  return (
    <main>
      <Header />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-black uppercase tracking-[.22em] text-volt">
            <RadioTower size={16} /> Live Drop Room
          </p>
          <h1 className="mt-5 text-6xl font-black leading-[.9] md:text-8xl">RIP THE DROP.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            A cinematic reveal room for confirmed sneaker drops, trade showcases, and verified pairs. Fast, social, premium, and built for collectors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#drops" className="rounded-2xl bg-volt px-6 py-4 font-black text-black">View Drops</a>
            <a href="/trade" className="rounded-2xl border border-white/15 px-6 py-4 font-black">Make Trade Offer</a>
          </div>
        </div>

        <div className="card-glass overflow-hidden rounded-[2rem] p-5">
          <div className="relative h-[560px] rounded-[1.5rem] bg-black p-5">
            <img src={heroPair.imageUrl} alt={heroPair.model} className="absolute inset-0 h-full w-full rounded-[1.5rem] object-cover opacity-35" />
            <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_center,rgba(231,255,60,.20),transparent_38%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex justify-between">
                <span className="rounded-full bg-heat px-4 py-2 text-sm font-black">LIVE</span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-black">{heroPair.heatScore} HEAT</span>
              </div>
              <div>
                <p className="text-stroke text-8xl font-black">SV</p>
                <h2 className="mt-2 text-4xl font-black">{heroPair.model}</h2>
                <p className="mt-2 text-white/60">{heroPair.brand} · Size {heroPair.size} · Ask ${heroPair.askPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="drops" className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[.22em] text-white/40">Scheduled Rooms</p>
            <h2 className="mt-2 text-4xl font-black">Upcoming drops</h2>
          </div>
          <Sparkles className="text-volt" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {liveDrops.map((drop) => (
            <article key={drop.id} className="card-glass rounded-[2rem] p-6">
              <p className="text-sm font-black uppercase tracking-[.22em] text-volt">{drop.status}</p>
              <h3 className="mt-3 text-3xl font-black">{drop.title}</h3>
              <p className="mt-2 text-white/60">{drop.time} · {drop.pairs} verified pairs</p>
              <a href="/" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-black">
                Browse Market <ArrowRight size={18} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
