import React from "react";
import { auth } from "../_lib/Auth";
import SignInButton from "./SignInButton";
import { fastestSolver } from "../_lib/data-service";

export default async function SolvedBy() {
  const session = await auth();
  const fastestPersonToSolve = await fastestSolver();

  if (!session?.user) {
    return <SignInButton />;
  }

  return (
    <div className="w-48 px-2 shadow-sm py-1 bg-stone-50 rounded-full border flex gap-2 items-center justify-between">
      <img
        src={fastestPersonToSolve[0]?.picture}
        alt="user-image"
        className="h-8 w-8 rounded-full"
      />
      <div className="-translate-x-3">
        <p className="text-sm">
          {fastestPersonToSolve[0]?.username?.split(" ")[0]}
        </p>
        <p className="text-xs">{fastestPersonToSolve[0]?.single_time}s</p>
      </div>
      <div className="h-8 w-8 rounded-full bg-stone-300 flex items-center justify-center text-stone-600 text-sm font-bold">
        #{fastestPersonToSolve[0]?.rank}
      </div>
    </div>
  );
}
