import { Header } from "@/components/Header";
import { featuredListings } from "@/lib/data";
import { ArrowLeft, BadgeCheck, ShieldCheck, Shuffle, Truck, type LucideIcon } from "lucide-react";
import { notFound } from "next/navigation";

const trustBadges: { label: string; Icon: LucideIcon }[] = [
  { label: "Authenticated", Icon: ShieldCheck },
  { label: "Seller Rated", Icon: BadgeCheck },
  { label: "Tracked Shipping", Icon: Truck }
];

export function generateStaticParams() {
  return featuredListings.map((item) => ({ id: item.id }));
}

export default async function SneakerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = featuredListings.find((listing) => listing.id === id);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl px-5 py-10">
        <a href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-black text-white/60 hover:text-volt">
          <ArrowLeft size={16} /> Back to market
        </a>
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="card-glass overflow-hidden rounded-[2rem] p-4">
            <img src={item.imageUrl} alt={item.model} className="h-[620px] w-full rounded-[1.5rem] object-cover" />
          </div>

          <div className="space-y-5">
            <div className="card-glass rounded-[2rem] p-6">
              <p className="text-sm font-black uppercase tracking-[.24em] text-volt">{item.brand} / {item.sku}</p>
              <h1 className="mt-4 text-5xl font-black leading-none">{item.model}</h1>
              <p className="mt-4 text-white/60">Size {item.size} · {item.condition.replace("_", " ")} · Seller {item.seller}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-white/45">Ask</p>
                  <p className="text-3xl font-black">${item.askPrice}</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-white/45">Last</p>
                  <p className="text-3xl font-black">${item.lastSale}</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-white/45">Heat</p>
                  <p className="text-3xl font-black">{item.heatScore}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button className="rounded-2xl bg-volt px-6 py-4 font-black text-black">Buy Now</button>
                <a href="/trade" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-black">
                  <Shuffle size={18} /> Make Trade Offer
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {trustBadges.map(({ label, Icon }) => (
                <div key={label} className="card-glass rounded-3xl p-5 text-center">
                  <Icon className="mx-auto mb-3 text-volt" />
                  <p className="font-black">{label}</p>
                </div>
              ))}
            </div>

            <div className="card-glass rounded-[2rem] p-6">
              <h2 className="text-2xl font-black">Authentication Guarantee</h2>
              <p className="mt-3 leading-7 text-white/60">
                This pair is routed through the authentication queue before payout or delivery. If the pair fails review, the transaction unwinds and the buyer is protected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
