import Link from 'next/link';
import { Church } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Church className="h-6 w-6 text-primary" />
              <span className="font-cinzel text-sm font-bold">Mosteiro de Nossa Senhora das Graças</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              "Felizes os que habitam vossa casa (Sl 83, 3)"
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-cinzel text-sm font-semibold text-zinc-900 dark:text-white">Visit</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/directions" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      Directions
                    </Link>
                  </li>
                  <li>
                    <Link href="/accommodations" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      Accommodations
                    </Link>
                  </li>
                  <li>
                    <Link href="/schedule" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      Daily Schedule
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="font-cinzel text-sm font-semibold text-zinc-900 dark:text-white">Community</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/vocations" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      Vocations
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      News & Events
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-cinzel text-sm font-semibold text-zinc-900 dark:text-white">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/donate" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link href="/volunteer" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link href="/prayer-requests" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      Prayer Requests
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="font-cinzel text-sm font-semibold text-zinc-900 dark:text-white">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/contact" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      Get in Touch
                    </Link>
                  </li>
                  <li>
                    <Link href="/newsletter" className="text-sm text-zinc-500 hover:text-primary dark:text-zinc-400">
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-700">
          <p className="text-center text-sm text-zinc-400">
            © {new Date().getFullYear()} Mosteiro de Nossa Senhora das Graças. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}