import Image from "next/image";
import Link from "next/link";

export default function Hero(): React.JSX.Element {
  return (
    <div className="p-6 sm:p-12">
      <header>
	<nav aria-label="Global" className="flex flex-col sm:flex-row justify-between items-center">
          <Image
            src="/glaam-logo.png"
            alt="Logo of the Greater Los Angeles Mensa Area Chapter."
            className="w-3xs lg:w-xs"
            width={600}
            height={200}
	    priority
          />
	  <Link href="#" className="hidden sm:inline-block">Member Resources</Link>
	</nav>
      </header>
      <main>
	<h1 className="text-4xl sm:text-5xl font-semibold py-12">Where Brilliance Belongs</h1>
	<p>Greater Los Angeles Area Mensa (or “GLAAM“) is a local chapter of American Mensa, Ltd.  Our territory covers all of Los Angeles and Kern and Inyo counties, along with portions of San Bernardino and Riverside and Ventura counties.

Mensa (TM) is an international society which welcomes all persons who have tested within the top two percentile of the population in intelligence. We enjoy a variety of ‘smart’ activities in our local communities, as exemplified in the photos below.  We currently have some 150,000 members worldwide, but we are always looking for more.  Click the Testing link in the menu below to see if you or a loved one is qualified to join us!</p>
	<a href="https://www.us.mensa.org/join/">Join Now</a>
      </main>
    </div>
  );
}
