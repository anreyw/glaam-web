import Image from "next/image";
import JoinButton from "@/components/JoinButton";
import Background from "@/components/Background";

export default function Hero(): React.JSX.Element {
  return (
    <main className="flex flex-col h-screen justify-start items-center gap-12 py-8">
      <Background />
      <Image
        src="/glaam-logo.png"
        alt="Logo of the Greater Los Angeles Mensa Area Chapter."
        className="w-3xs lg:w-xs"
        width={600}
        height={200}
        priority
      />
      <h1 className="text-5xl lg:text-6xl text-center mx-8">
        Where Brilliance Belongs
      </h1>
      <JoinButton />
    </main>
  );
}
