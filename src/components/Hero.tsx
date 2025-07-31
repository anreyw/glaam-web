import Image from "next/image";

export default function Hero(): React.JSX.Element {
  return (
    <header>
      <nav aria-label="Global" className="flex justify-center">
        <Image
          src="/glaam-logo.png"
          alt="Logo of the Greater Los Angeles Mensa Area Chapter."
          className="w-sm"
          width={600}
          height={200}
        />
      </nav>
    </header>
  );
}
