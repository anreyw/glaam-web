export default function CallToAction(): React.JSX.Element {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <hgroup>
        <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
          Get started
        </h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
          Boost your productivity. Start using our app today.
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600 dark:text-gray-400">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam aliqua proident excepteur commodo do ea.
      </p>
      <div className="mt-8 flex justify-center">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
        >
          Get started
        </a>
      </div>
    </div>
  );
}
