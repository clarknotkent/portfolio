"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#334155] bg-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#94A3B8]">
          <p>© {currentYear} Kent Elrond Andionne Aspa. All rights reserved.</p>
          <Link href="/contact" className="hover:text-[#00D9FF] transition-colors">
            Get in touch →
          </Link>
        </div>
      </div>
    </footer>
  );
}
