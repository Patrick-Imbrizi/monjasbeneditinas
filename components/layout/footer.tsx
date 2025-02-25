import Link from 'next/link';
import { Church } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-700">
          <p className="text-center text-sm text-zinc-400">
            © {new Date().getFullYear()} Mosteiro de Nossa Senhora da Glória. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}