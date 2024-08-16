import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex gap-6 sm:gap-24 text-center sm:text-start mt-24 py-6 justify-center  uppercase text-stone-600 border-t-2 flex-col items-center sm:items-start sm:flex-row">
      <ul className="flex flex-col gap-4 ">
        <img
          className="h-32 w-fit"
          src="https://raw.githubusercontent.com/MutableTuple/fm_images/main/Add%20a%20heading.png"
          alt=""
        />
      </ul>

      <ul className="flex flex-col  ">
        <h1 className="font-semibold mb-8 underline underline-offset-2">
          Important links
        </h1>
        <ul className="flex flex-col gap-4 ">
          <Link
            href="/"
            className="text-sm hover:text-purple-600 transition-all duration-100"
          >
            solve today&apos;s question
          </Link>{" "}
          <Link
            href="/leaderboards"
            className="text-sm  hover:text-purple-600 transition-all duration-100"
          >
            Leaderboard
          </Link>
        </ul>
      </ul>
    </footer>
  );
}
