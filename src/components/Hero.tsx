import Image from "next/image";
import Link from "next/link";
import JoinButton from "@/components/JoinButton";

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
          </nav>
        </header>
        <main className="flex flex-col items-center">
          <div className="flex flex-col items-start max-w-3xl gap-4">
            <h1 className="text-6xl sm:text-5xl py-12">
              Where Brilliance Belongs
            </h1>
            <JoinButton />
          </div>
        </main>
      </div>
    </>
  );
}
