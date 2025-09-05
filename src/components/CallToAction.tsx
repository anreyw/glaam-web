import JoinButton from "@/components/JoinButton";

export default function CallToAction(): React.JSX.Element {
  return (
    <section className="mx-auto max-w-2xl text-center">
      <hgroup>
        <h2 className="text-base/7 font-semibold text-blue-600">
          Join Greater Los Angeles Area Mensa
        </h2>
        <p className="mt-2 text-4xl font-medium tracking-tight text-balance text-gray-900 sm:text-5xl">
          Ready to find your people? Start your Mensa journey now.
        </p>
      </hgroup>
      <div className="mt-8 flex justify-center">
        <JoinButton />
      </div>
    </section>
  );
}
