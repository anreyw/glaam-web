import Image from "next/image";
import Link from "next/link";

export default function Hero(): React.JSX.Element {
  return (
    <>
      <header>
	<nav aria-label="Global" className="flex flex-col sm:flex-row justify-between items-center px-12 py-6">
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
      <main>
	<p>Greater Los Angeles Area Mensa (or “GLAAM“) is a local chapter of American Mensa, Ltd.  Our territory covers all of Los Angeles and Kern and Inyo counties, along with portions of San Bernardino and Riverside and Ventura counties.

Mensa (TM) is an international society which welcomes all persons who have tested within the top two percentile of the population in intelligence. We enjoy a variety of ‘smart’ activities in our local communities, as exemplified in the photos below.  We currently have some 150,000 members worldwide, but we are always looking for more.  Click the Testing link in the menu below to see if you or a loved one is qualified to join us!</p>
		
      </main>
    </>
  );
}
