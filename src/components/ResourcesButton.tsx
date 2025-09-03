import { JSX } from "react";
import Link from "next/link";

export default function ResourcesButton(): JSX.Element {
  return (
    <Link
      href="/members"
      className="rounded-md bg-pink-600 px-3.5 py-2.5 text-xl text-white shadow-xs hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 block sm:inline-block text-center"
    >
       Member Resources
    </Link>
  )
}
