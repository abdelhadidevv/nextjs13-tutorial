"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="max-w-2xl container mx-auto">
      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-xl tracking-tight font-extrabold lg:text-6xl text-slate-200">
              Oops can{`'`}t find the Dog
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
              Something{`'`}s missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500">
              Sorry, we can{`'`}t find the dog.
            </p>
            <button
              onClick={router.refresh}
              className="inline-flex text-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
              Back to Random Dog
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
