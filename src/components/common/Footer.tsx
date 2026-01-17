"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
          <Link href="/contact" className="hover:text-gray-900 transition-colors">
            Get in touch →
          </Link>
        </div>
      </div>
    </footer>
  );
}
