import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const SOCIALS: SocialProps[] = [
  {
    name: "Twitter",
    icon: <Twitter />,
    url: "https://twitter.com/",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    url: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    url: "https://www.instagram.com/",
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-center border-t p-5">
        <p className="text-lg">
          &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>

        <div className="flex gap-3">
          {SOCIALS.map((social: SocialProps) => (
            <Link key={social.name} href={social.url} target="_blank">
              <Button variant={"outline"} size={"icon"}>
                {social.icon}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
