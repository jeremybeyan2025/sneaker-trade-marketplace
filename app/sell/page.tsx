import { Header } from "@/components/Header";

export default function SellPage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-4xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[.25em] text-volt">Seller Flow</p>
        <h1 className="mt-3 text-5xl font-black">List a pair in under 60 seconds.</h1>
        <div className="card-glass mt-8 rounded-3xl p-6">
          <div className="grid gap-5 md:grid-cols-2">
            {["Brand", "Model", "SKU", "Size", "Condition", "Ask Price"].map((label) => (
              <label key={label} className="space-y-2">
                <span className="text-sm font-bold text-white/65">{label}</span>
                <input className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-volt" placeholder={label} />
              </label>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-white/20 p-8 text-center text-white/55">
            Upload required photos: both sides, outsole, insole, size tag, box label, flaws.
          </div>
          <button className="mt-6 w-full rounded-2xl bg-volt py-4 font-black text-black">Submit for Listing Review</button>
        </div>
      </section>
    </main>
  );
}
