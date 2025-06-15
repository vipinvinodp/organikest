'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-4 justify-center sm:justify-start">
          <Image
            src="/organic-kerala-nest-logo.png"
            alt="OrganiKeSt Logo"
            width={60}
            height={60}
            priority
          />
          <div className="text-left">
            <h1 className="text-xl font-bold text-green-700">OrganiKeSt</h1>
            <p className="text-xs text-green-600">Organic Kerala Nest</p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-4 sm:mt-0 space-x-6 text-sm sm:text-base text-gray-700 text-center">
<Link href="/" className="hover:text-green-600 transition">Home</Link>
<Link href="/#products" className="hover:text-green-600 transition">Products</Link>
<Link href="/contact" className="hover:text-green-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
