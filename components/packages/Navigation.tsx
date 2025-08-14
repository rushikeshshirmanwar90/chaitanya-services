import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-2xl font-bold">WanderLust</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/#home"
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link href="/packages" className="text-blue-600 font-semibold">
              Packages
            </Link>
            <Link
              href="/#services"
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
