import { JSX } from "react";
import Link from "next/link";

export default function JoinButton(): JSX.Element {
  return (
    <Link
      href="/join"
      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-xl text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 block sm:inline-block text-center"
    >
      Learn How to Join
    </Link>
  );
}
