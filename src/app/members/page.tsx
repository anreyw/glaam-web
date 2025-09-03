import { JSX } from "react";

import Link from "next/link";

export default function Members(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl">This page is under construction.</p>
      <p className="text-3xl">
        <Link className="underline text-blue-600 hover:no-underline" href="/">
          Go back.
        </Link>
      </p>
    </div>
  );
}
