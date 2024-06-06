import Link from 'next/link';

export default function Header() {
  return (
    <div className="w-full flex items-center">
      <nav className="w-2/3 text-white flex items-center justify-start mx-auto">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
      </nav>
    </div>
  );
}
