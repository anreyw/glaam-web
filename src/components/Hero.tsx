import Image from "next/image";
import Link from "next/link";

export default function Hero(): React.JSX.Element {
  return (
    <>
      {/* DECORATIVE BLUR BACKGROUND */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

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
            <h2>What is Mensa?</h2>
          </div>
        </main>
      </div>
    </>
  );
}
