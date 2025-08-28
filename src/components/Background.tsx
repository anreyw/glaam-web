import { JSX } from "react";

export default function Background(): JSX.Element {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-40 blur-3xl">
      <div
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className="-translate-24 w-full h-full bg-gray-500 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-45"
      ></div>
    </div>
  );
}
