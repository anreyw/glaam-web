import { JSX } from "react";

export default function JoinButton(): JSX.Element {
  return (
    <a
      href="https://www.us.mensa.org/join/"
      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-xl font-medium text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 my-6 block sm:inline-block text-center"
    >
       Learn How to Join
    </a>
  )
}
