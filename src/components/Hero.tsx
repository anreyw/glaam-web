import Image from "next/image";
import Link from "next/link";

export default function Hero(): React.JSX.Element {
  return (
    <>            
      <div className="p-6 sm:p-12">
        <header>
          <nav
            aria-label="Global"
            className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-5xl mx-auto"
          >
            <Image
              src="/glaam-logo.png"
              alt="Logo of the Greater Los Angeles Mensa Area Chapter."
              className="w-3xs lg:w-xs"
              width={600}
              height={200}
              priority
            />
            <Link
              href="#"
              className="underline underline-offset-4 decoration-2 text-blue-800 hover:bg-blue-100"
            >
              Click Here for Members-Only Resources
            </Link>
          </nav>
        </header>
        <main className="flex flex-col items-center">
          <div className="flex flex-col items-start max-w-3xl gap-4">
            <h1 className="text-6xl sm:text-5xl py-12">
              Where Brilliance Belongs
            </h1>
            <a
              href="https://www.us.mensa.org/join/"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 my-6 block sm:inline-block text-center"
            >
              Learn How to Join
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
