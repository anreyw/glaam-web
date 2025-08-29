import Image from "next/image";
import JoinButton from "@/components/JoinButton";
import ResourcesButton from "@/components/ResourcesButton";

export default function Hero(): React.JSX.Element {
  return (
    <main className="flex flex-col justify-start items-center gap-8 sm:gap-12 sm:pt-16 sm:pb-24 pt-8 pb-12 px-6 max-w-3xl mx-auto">
      <Image
        src="/glaam-logo.png"
        alt="Logo of the Greater Los Angeles Mensa Area Chapter."
        className="w-3xs"
        width={600}
        height={200}
        priority
      />
      <h1 className="text-4xl font-medium tracking-tight text-center text-gray-900 sm:text-5xl">
        Where Brilliance Belongs
      </h1>
      <p className="sm:text-xl text-center">
        Greater Los Angeles Area Mensa (GLAAM) is a local chapter of{" "}
        <a
          href="https://www.mensa.org/"
          className="underline hover:no-underline text-blue-600 underline-offset-2"
        >
          Mensa
        </a>
        , the largest and oldest high-IQ society in the world.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 py-2">
        <JoinButton />
        <ResourcesButton />
      </div>
    </main>
  );
}
