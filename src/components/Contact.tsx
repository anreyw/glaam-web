import { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <div className="bg-white py-8 sm:py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none dark:divide-white/10">
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white">
                Get in touch
              </h2>
              <p className="mt-4 text-base/7 text-gray-600 dark:text-gray-400">
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac
                pellentesque.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  Collaborate
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600 dark:text-gray-400">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:collaborate@example.com"
                        className="font-semibold text-indigo-600 dark:text-indigo-400"
                      >
                        collaborate@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-2345</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  Press
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600 dark:text-gray-400">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:press@example.com"
                        className="font-semibold text-indigo-600 dark:text-indigo-400"
                      >
                        press@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-3456</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  Join our team
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600 dark:text-gray-400">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:careers@example.com"
                        className="font-semibold text-indigo-600 dark:text-indigo-400"
                      >
                        careers@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-4567</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 dark:bg-gray-800/50">
                <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  Say hello
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600 dark:text-gray-400">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:hello@example.com"
                        className="font-semibold text-indigo-600 dark:text-indigo-400"
                      >
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 905-5678</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
