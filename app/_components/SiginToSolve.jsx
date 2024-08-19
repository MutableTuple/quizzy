import React from "react";
import SignInButton from "./SignInButton";
import { signInAction } from "../_lib/actions";
import { IoIosWarning } from "react-icons/io";
import { auth } from "../_lib/Auth";
export default async function SiginToSolve() {
  const session = await auth();
  return (
    <form
      className={`text-center h-auto px-4 py-3 flex sm:flex-row flex-col gap-4 justify-between bg-yellow-200 mt-2 items-center  shadow-sm ${
        session?.user ? "hidden" : "block"
      }`}
      action={signInAction}
    >
      <div className="flex sm:flex-row flex-col gap-2 text-sm sm:text-md items-center text-yellow-800">
        <IoIosWarning size={24} />
        You must be logged in to solve today's question
      </div>
      <button
        className="flex items-center gap-3 text-sm border border-blue-500 px-4 py-2 font-medium rounded-full  
      bg-white hover:bg-blue-100 text-blue-500 duration-300 transition-all "
      >
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="16"
          width="16"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}
