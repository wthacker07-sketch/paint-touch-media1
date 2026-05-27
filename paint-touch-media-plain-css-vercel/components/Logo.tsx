import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Paint Touch Media home">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-sm font-black text-white shadow-card transition-transform group-hover:-rotate-3">
        PT
      </span>
      <span className="leading-none">
        <span className="block text-base font-black tracking-tight">Paint Touch</span>
        <span className="block text-base font-black tracking-tight">Media</span>
      </span>
    </Link>
  );
}
