import { sitePath } from "@/lib/site";

const items = [
  ["Market", "/"],
  ["Sell", "/sell"],
  ["Trade", "/trade"],
  ["Closet", "/closet"],
  ["Drop", "/live-drop"]
];

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/85 px-3 py-2 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-5 gap-1">
        {items.map(([label, href]) => (
          <a key={href} href={sitePath(href)} className="rounded-2xl px-2 py-3 text-center text-[11px] font-black text-white/70">
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
