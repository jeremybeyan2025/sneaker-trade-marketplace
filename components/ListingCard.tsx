import { Flame, ShieldCheck, Shuffle } from "lucide-react";
import { SneakerListing } from "@/lib/types";

export function ListingCard({ item }: { item: SneakerListing }) {
  return (
    <article className="card-glass overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-volt/40">
      <a href={`/sneakers/${item.id}`} className="block">
        <div className="relative h-56">
          <img src={item.imageUrl} alt={`${item.brand} ${item.model}`} className="h-full w-full object-cover" />
          <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            {item.condition.replace("_", " ")}
          </div>
          <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-volt px-3 py-1 text-xs font-black text-black">
            <Flame size={14} /> {item.heatScore}
          </div>
        </div>
      </a>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-white/50">{item.brand} / {item.sku}</p>
          <a href={`/sneakers/${item.id}`} className="mt-2 block text-xl font-black leading-tight hover:text-volt">{item.model}</a>
          <p className="mt-1 text-sm text-white/60">Size {item.size} · Seller {item.seller}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/5 p-3">
            <p className="text-xs text-white/50">Ask</p>
            <p className="text-2xl font-black">${item.askPrice}</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-3">
            <p className="text-xs text-white/50">Last sale</p>
            <p className="text-2xl font-black">${item.lastSale}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <a href={`/sneakers/${item.id}`} className="flex-1 rounded-2xl bg-volt py-3 text-center font-black text-black">Buy Now</a>
          <a href="/trade" className="rounded-2xl border border-white/15 px-4 py-3"><Shuffle size={18} /></a>
          <a href="/admin/authentication" className="rounded-2xl border border-white/15 px-4 py-3"><ShieldCheck size={18} /></a>
        </div>
      </div>
    </article>
  );
}
