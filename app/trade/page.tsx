import { Header } from "@/components/Header";
import { tradeQueue } from "@/lib/data";

export default function TradePage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-5xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[.25em] text-volt">Trade Escrow</p>
        <h1 className="mt-3 text-5xl font-black">Trade grails without getting burned.</h1>
        <p className="mt-4 max-w-2xl text-white/60">
          Both parties ship to authentication. Cash differences are held. If either pair fails, the trade unwinds.
        </p>

        <div className="mt-8 grid gap-5">
          {tradeQueue.map((trade) => (
            <div key={trade.id} className="card-glass rounded-3xl p-6">
              <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto] md:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[.22em] text-white/45">Offered</p>
                  <p className="mt-1 text-xl font-black">{trade.offered}</p>
                </div>
                <p className="text-3xl font-black text-volt">↔</p>
                <div>
                  <p className="text-xs uppercase tracking-[.22em] text-white/45">Requested</p>
                  <p className="mt-1 text-xl font-black">{trade.requested}</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 text-center">
                  <p className="text-xs text-white/45">Cash Diff</p>
                  <p className="text-2xl font-black">${trade.cashDifference}</p>
                </div>
              </div>
              <p className="mt-4 rounded-full bg-black/40 px-4 py-2 text-sm font-bold text-white/60">{trade.status.replaceAll("_", " ")}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
