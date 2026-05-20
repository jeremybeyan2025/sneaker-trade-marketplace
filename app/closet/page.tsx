import { Header } from "@/components/Header";
import { closetItems } from "@/lib/data";
import { Plus, Shirt, Shuffle } from "lucide-react";

export default function ClosetPage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[.22em] text-volt"><Shirt size={16} /> Collector Closet</p>
            <h1 className="mt-3 text-6xl font-black leading-[.92] md:text-7xl">YOUR TRADE VAULT.</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">
              Add sneakers to your closet, mark pairs available for trade, and build offers around verified collector inventory.
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-volt px-6 py-4 font-black text-black">
            <Plus size={18} /> Add Sneaker
          </button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {closetItems.map((item) => (
            <article key={item.id} className="card-glass overflow-hidden rounded-[2rem]">
              <div className="relative h-64">
                <img src={item.imageUrl} alt={item.model} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-black/75 px-3 py-1 text-xs font-black uppercase tracking-wide">
                  Size {item.size}
                </span>
              </div>
              <div className="space-y-4 p-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.22em] text-white/40">{item.brand}</p>
                  <h2 className="mt-2 text-xl font-black leading-tight">{item.model}</h2>
                </div>
                <p className="text-sm leading-6 text-white/55">{item.ownerNote}</p>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-3">
                  <span className="text-sm font-bold text-white/60">Trade Status</span>
                  <span className={item.availableForTrade ? "text-sm font-black text-volt" : "text-sm font-black text-white/40"}>
                    {item.availableForTrade ? "Available" : "Holding"}
                  </span>
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 py-3 font-black">
                  <Shuffle size={16} /> Build Trade
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
