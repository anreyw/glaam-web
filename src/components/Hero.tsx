import Image from "next/image";
import Link from "next/link";

export default function Hero(): React.JSX.Element {
  return (
    <>
      <header>
	<nav aria-label="Global" className="flex justify-center px-12 py-6">
          <Image
            src="/glaam-logo.png"
            alt="Logo of the Greater Los Angeles Mensa Area Chapter."
            className="w-3xs lg:w-xs"
            width={600}
            height={200}
	    priority
          />
	  <Link href="#">Member Resources</Link>
	</nav>
      </header>
      <main></main>
    </>
  );
}
