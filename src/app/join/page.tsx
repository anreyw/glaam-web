import { JSX } from "react";

import Link from "next/link";

export default function Join(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl">This page is under construction.</p>
      <p>
        See the{" "}
        <a
          href="https://www.us.mensa.org/join#:~:text=How%20to%20Join%20Mensa"
          className="underline text-blue-600 hover:no-underline"
        >
          National Page
        </a>{" "}
        for for more info.
      </p>
      <p className="text-3xl">
        <Link className="underline text-blue-600 hover:no-underline" href="/">
          Go back.
        </Link>
      </p>
    </div>
  );
}
