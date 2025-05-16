import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-4 mx-4 mt-8 mb-4 lg:mx-auto max-w-xl">
      <Link href="/" className="hover:text-gray-600">Home</Link>
      <Link href="/projects" className="hover:text-gray-600">Projects</Link>
    </nav>
  );
}