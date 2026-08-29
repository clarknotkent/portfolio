"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline mt-auto w-full">
      {/* Desktop: row, copyright left, links right */}
      <div className="shell py-8 hidden md:flex items-center justify-between gap-6">
        <span
          className="text-[10px] text-muted uppercase tracking-[0.18em] leading-none"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          &copy; {currentYear} Kent Elrond Andionne Aspa
        </span>
        <div className="flex items-center">
          <a
            className="text-[10px] text-muted uppercase tracking-[0.18em] leading-none flex items-center h-11 px-3 transition-[color,background-color,border-color,transform] duration-150 hover:text-primary active:scale-[0.99]"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              transitionTimingFunction: "var(--ease-out)",
            }}
            href="https://github.com/clarknotkent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="text-muted opacity-20 text-[10px]">&bull;</span>
          <a
            className="text-[10px] text-muted uppercase tracking-[0.18em] leading-none flex items-center h-11 px-3 transition-[color,background-color,border-color,transform] duration-150 hover:text-primary active:scale-[0.99]"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              transitionTimingFunction: "var(--ease-out)",
            }}
            href="https://linkedin.com/in/clarknotkent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="text-muted opacity-20 text-[10px]">&bull;</span>
          <a
            className="text-[10px] text-muted uppercase tracking-[0.18em] leading-none flex items-center h-11 px-3 transition-[color,background-color,border-color,transform] duration-150 hover:text-primary active:scale-[0.99]"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              transitionTimingFunction: "var(--ease-out)",
            }}
            href="https://instagram.com/clarknotkent_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Mobile: stacked, centered, links above copyright */}
      <div className="shell py-8 flex md:hidden flex-col items-center gap-2">
        <div className="flex items-center justify-center">
          <a
            className="text-[10px] text-muted uppercase tracking-[0.18em] leading-none flex items-center h-11 px-3 active:scale-[0.99] transition-transform duration-150"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            href="https://github.com/clarknotkent"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="text-muted opacity-20 text-[10px]">&bull;</span>
          <a
            className="text-[10px] text-muted uppercase tracking-[0.18em] leading-none flex items-center h-11 px-3 active:scale-[0.99] transition-transform duration-150"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            href="https://linkedin.com/in/clarknotkent"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="text-muted opacity-20 text-[10px]">&bull;</span>
          <a
            className="text-[10px] text-muted uppercase tracking-[0.18em] leading-none flex items-center h-11 px-3 active:scale-[0.99] transition-transform duration-150"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            href="https://instagram.com/clarknotkent_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <span
          className="text-[10px] text-muted uppercase tracking-[0.18em] leading-none text-center"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          &copy; {currentYear} Kent Elrond Andionne Aspa
        </span>
      </div>
    </footer>
  );
}
