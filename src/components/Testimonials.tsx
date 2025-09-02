import { JSX } from "react";

const testimonials = [
  {
    body: "GLAAM turned LA from a big city into a small village for me. Between the monthly speaker nights in Pasadena and the impromptu coffee chats on the Westside, I always leave smarter and smiling. It’s my favorite brain gym.",
    author: {
      name: "Leslie A.",
      memberSince: "Member since 2020",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "I crave conversations that leap from astrophysics to improv in a single breath. This chapter delivers, with kind, curious people who listen as hard as they think. I came for the puzzle nights and stayed for the friendships.",
    author: {
      name: "Michael F.",
      memberSince: "Member since 2022",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Teaching all day, I rarely get to be the student. At GLAAM meetups, I’m challenged, supported, and inspired by everyone’s generosity. The weekend salons are my reset button.",
    author: {
      name: "Dries V.",
      memberSince: "Member since 2010",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "I missed sharp edits—on ideas. Our film-and-philosophy SIG pairs screenings with lively, respectful debates. It feels like a thrilling ‘second career.",
    author: {
      name: "Lindsay W.",
      memberSince: "Member since 2019",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "The constant has been the people: curious, generous, and quick to laugh. The salons keep my mind nimble, and the younger members keep me optimistic. It’s been my favorite lifelong classroom.",
    author: {
      name: "Tom C.",
      memberSince: "Member since 1970",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Game nights are legendary—equal parts strategy, laughter, and ‘aha!’ moments. I’ve even play-tested prototypes with members. Creative fuel, every time.",
    author: {
      name: "Whitney F.",
      memberSince: "Member since 2001",
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Testimonials(): JSX.Element {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-blue-600">
            Testimonials
          </h2>
          <p className="mt-2 text-4xl font-medium tracking-tight text-balance text-gray-900 sm:text-5xl">
            From Curiosity to Connection
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.name}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={testimonial.author.imageUrl}
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`${testimonial.author.memberSince}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
