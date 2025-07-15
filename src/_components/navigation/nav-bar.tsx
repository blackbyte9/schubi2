import Link from "next/link";

export function NavBar() {
  return (
    <nav className="bg-green-800 text-white shadow">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-400 text-3x1 font-bold px-8">Schubi2</Link>
        </li>
        <li>
          <Link href="/lease" className="hover:text-gray-400">Ausleihen</Link>
        </li>
        <li>
          <Link href="/return" className="hover:text-gray-400">Zurückgeben</Link>
        </li>
        <li>
          <Link href="/items" className="hover:text-gray-400">Bücher</Link>
        </li>
        <li>
          <Link href="/books" className="hover:text-gray-400">Bucharten</Link>
        </li>
        <li>
          <Link href="/students" className="hover:text-gray-400">Schüler:innen</Link>
        </li>
      </ul>
    </nav>
  );
}
