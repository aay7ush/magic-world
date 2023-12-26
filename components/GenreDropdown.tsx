import fetchAPI from "@/lib/fetchAPI"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default async function GenreDropdown() {
  const url = new URL(
    "https://api.themoviedb.org/3/genre/movie/list?language=en"
  )
  const data = await fetchAPI(url)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex items-center">
        Genre <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {data.genres.map((genre: Genre) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
