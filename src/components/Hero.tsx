import Image from "next/image";
import JoinButton from "@/components/JoinButton";
import Background from "@/components/Background";

export default function Hero(): React.JSX.Element {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <Background />
      <Image
        src="/glaam-logo.png"
        alt="Logo of the Greater Los Angeles Mensa Area Chapter."
        className="w-3xs lg:w-xs"
        width={600}
        height={200}
        priority
      />
      <div className="flex flex-col items-center max-w-3xl">
        <h1 className="text-6xl sm:text-5xl py-12">Where Brilliance Belongs</h1>
        <JoinButton />
      </div>
    </main>
  );
}
