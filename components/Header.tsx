import { sitePath } from "@/lib/site";
import { ShieldCheck } from "lucide-react";

const navItems = [
  ["Market", "/"],
  ["Sell", "/sell"],
  ["Trade", "/trade"],
  ["Closet", "/closet"],
  ["Live Drop", "/live-drop"],
  ["Auth Queue", "/admin/authentication"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href={sitePath("/")} className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-volt font-black text-black shadow-glow">SV</div>
          <div>
            <p className="text-lg font-black leading-none">SoleVault</p>
            <p className="text-xs uppercase tracking-[.25em] text-white/45">Authenticated Trades</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-bold text-white/70 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={sitePath(href)} className="transition hover:text-volt">{label}</a>
          ))}
        </nav>

        <a href={sitePath("/sell")} className="hidden rounded-full bg-white px-4 py-2 text-sm font-black text-black md:inline-flex">
          List a Pair
        </a>

        <button className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold md:hidden">
          <ShieldCheck size={16} /> Verified
        </button>
      </div>
    </header>
  );
}
