import { Header } from "@/components/Header";

const queue = [
  ["ORD-2041", "Jordan 1 Lost & Found", "Check SKU/box label; outsole photos pending", "Needs Review"],
  ["ORD-2042", "Yeezy 350 V2 Zebra", "Condition mismatch flagged by buyer report", "Manual Review"],
  ["TRD-7781-A", "Nike SB Jarritos", "Trade leg A arrived", "Authenticate"]
];

export default function AuthQueuePage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[.25em] text-volt">Admin</p>
        <h1 className="mt-3 text-5xl font-black">Authentication Queue</h1>
        <div className="card-glass mt-8 overflow-hidden rounded-3xl">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-sm uppercase tracking-[.18em] text-white/45">
              <tr>
                <th className="p-4">Order</th>
                <th className="p-4">Sneaker</th>
                <th className="p-4">Notes</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {queue.map(([id, sneaker, notes, action]) => (
                <tr key={id} className="border-t border-white/10">
                  <td className="p-4 font-black">{id}</td>
                  <td className="p-4">{sneaker}</td>
                  <td className="p-4 text-white/55">{notes}</td>
                  <td className="p-4"><button className="rounded-xl bg-volt px-4 py-2 font-black text-black">{action}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
