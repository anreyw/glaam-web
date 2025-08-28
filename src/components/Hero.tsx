import Image from "next/image";
import JoinButton from "@/components/JoinButton";
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
      <h1 className="text-4xl text-center">Where Brilliance Belongs</h1>
      <p>
        Greater Los Angeles Area Mensa (GLAAM) is a local chapter of{" "}
        <a href="https://www.mensa.org/">Mensa</a>, the largest and oldest
        high-IQ society in the world.
      </p>
      <JoinButton />
    </main>
  );
}
