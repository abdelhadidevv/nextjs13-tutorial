"use client"; // Error components must be Client Components
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="text-center">
      <p className="mb-2 text-base tracking-tight font-medium text-slate-400">
        {error?.message || ""}
      </p>
      <Link
        href="/"
        className="inline-flex text-white border-2 border-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
      >
        Back to homepage
      </Link>
    </div>
  );
}
