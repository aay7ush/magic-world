import Link from "next/link"
import Search from "./Search"
import { ThemeToggle } from "./ThemeToggle"

export default function Header() {
  return (
    <header className="fixed w-full z-50 top-0 flex justify-between items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <h2 className="text-3xl font-bold">MagicWorld</h2>
      </Link>

      <div className="flex gap-x-2">
        {/* <GenreSelect /> */}
        <Search />
        <ThemeToggle />
      </div>
    </header>
  )
}
