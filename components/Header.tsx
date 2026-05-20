import { ShieldCheck } from "lucide-react";

export function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-volt font-black text-black shadow-glow">SV</div>
        <div>
          <p className="text-lg font-black leading-none">SoleVault</p>
          <p className="text-xs uppercase tracking-[.25em] text-white/45">Authenticated Trades</p>
        </div>
      </div>

      <nav className="hidden items-center gap-7 text-sm font-bold text-white/70 md:flex">
        <a href="/">Market</a>
        <a href="/sell">Sell</a>
        <a href="/trade">Trade</a>
        <a href="/admin/authentication">Auth Queue</a>
      </nav>

      <button className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold">
        <ShieldCheck size={16} /> Verified
      </button>
    </header>
  );
}
