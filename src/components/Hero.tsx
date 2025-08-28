import Image from "next/image";
import JoinButton from "@/components/JoinButton";
import ResourcesButton from "@/components/ResourcesButton";
import Background from "@/components/Background";

export default function Hero(): React.JSX.Element {
  return (
    <main className="flex flex-col h-screen justify-start items-center gap-4 py-8 px-6 max-w-2xl mx-auto">
      <Background />
      <Image
        src="/glaam-logo.png"
        alt="Logo of the Greater Los Angeles Mensa Area Chapter."
        className="w-3xs"
        width={600}
        height={200}
        priority
      />
      <h1 className="text-4xl font-semibold tracking-tight text-center text-gray-900 sm:text-5xl">
        Where Brilliance Belongs
      </h1>
      <p>
        Greater Los Angeles Area Mensa (GLAAM) is a local chapter of{" "}
        <a
          href="https://www.mensa.org/"
          className="hover:underline hover:decoration-2 hover:underline-offset-2"
        >
          Mensa
        </a>
        , the largest and oldest high-IQ society in the world.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <JoinButton />
        <ResourcesButton />
      </div>
    </main>
  );
}
