import { Header } from "@/components/Header";
import { ListingCard } from "@/components/ListingCard";
import { featuredListings } from "@/lib/data";
import { ArrowRight, BadgeCheck, Lock, RadioTower, ShieldCheck, Shuffle, type LucideIcon } from "lucide-react";

type FeatureCard = {
  title: string;
  Icon: LucideIcon;
  copy: string;
};

const featureCards: FeatureCard[] = [
  { title: "Escrow", Icon: Lock, copy: "Hold funds until authentication passes." },
  { title: "Authentication", Icon: ShieldCheck, copy: "Admin queue for pass/fail decisions." },
  { title: "Trade Engine", Icon: Shuffle, copy: "Sneaker-for-sneaker plus cash difference." },
  { title: "Live Drops", Icon: RadioTower, copy: "TikTok-style product reveals without random paid prizes." }
];

export default function HomePage() {
  return (
    <main>
      <Header />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-bold uppercase tracking-[.22em] text-volt">
            Buy. Sell. Trade. Authenticated.
          </p>
          <h1 className="text-6xl font-black leading-[.92] tracking-tight md:text-8xl">
            THE SNEAKER MARKETPLACE BUILT FOR TRADES.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            A verified sneaker exchange where buyers get authenticated pairs, sellers get protected payouts,
            and collectors can trade grails through two-sided escrow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/trade" className="rounded-2xl bg-volt px-6 py-4 font-black text-black">Start a Trade</a>
            <a href="/sell" className="rounded-2xl border border-white/15 px-6 py-4 font-black">List Sneakers</a>
          </div>
        </div>

        <div className="card-glass relative overflow-hidden rounded-[2rem] p-5">
          <div className="absolute right-8 top-8 rounded-full bg-heat px-4 py-2 text-sm font-black">LIVE DROP</div>
          <div className="rounded-[1.5rem] bg-black p-5">
            <div className="grid h-[520px] place-items-center rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(231,255,60,.22),transparent_38%),#080808]">
              <div className="text-center">
                <p className="text-stroke text-8xl font-black">RIP</p>
                <h2 className="mt-2 text-4xl font-black">Reveal the Drop</h2>
                <p className="mx-auto mt-3 max-w-xs text-white/55">No mystery-box gambling. Just cinematic drops, verified listings, and locked escrow.</p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-black">
                  Enter Drop Room <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="grid gap-4 md:grid-cols-4">
          {featureCards.map(({ title, Icon, copy }) => (
            <div key={title} className="card-glass rounded-3xl p-5">
              <Icon className="mb-5 text-volt" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.25em] text-white/45">Featured Market</p>
            <h2 className="mt-2 text-4xl font-black">Heat on the board</h2>
          </div>
          <BadgeCheck className="text-volt" />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredListings.map((item) => <ListingCard key={item.id} item={item} />)}
        </div>
      </section>
    </main>
  );
}
