import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-center my-4 p-4">
      <nav className="w-2/3 text-white flex justify-start mx-auto gap-8">
        <Link href="/" className="font-bold text-xl">
          Home
        </Link>
        <Link href="/snippets" className="font-bold text-xl">
          Snippets
        </Link>
        <Link href="/discuss" className="font-bold text-xl">
          Discuss
        </Link>
      </nav>
    </div>
  );
}
