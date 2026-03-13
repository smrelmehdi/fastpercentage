import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-225 flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-gray-500 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span>FastPercentage.online</span>
          <a href="https://fastroi.online/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gray-900">FastROI.online</a>
        </div>
        <nav className="flex gap-6">
          <Link href="/about" className="transition-colors hover:text-gray-900">About</Link>
          <Link href="/privacy" className="transition-colors hover:text-gray-900">Privacy</Link>
          <Link href="/contact" className="transition-colors hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
