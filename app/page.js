import React from "react";
import Navbar from "./_components/Navbar";
import Question from "./_components/Question";
import Footer from "./_components/Footer";
import SolvedBy from "./_components/SolvedBy";
import { signOutAction } from "./_lib/actions";
import TodayAnswer from "./_components/TodayAnswer";
import FastestSolver from "./_components/FastestSolver";
import LoggedAs from "./_components/LoggedAs";
import SignInButton from "./_components/SignInButton";
import SiginToSolve from "./_components/SiginToSolve";
import PHLogo from "./_components/PHLogo";

export const revalidate = 20; //revalidate the cache! also this value cannot be computed this must be a value directly; value is in seconds

export default function Page() {
  return (
    <div className="selection:bg-purple-400 selection:text-white">
      <Navbar />
      <SiginToSolve />
      <PHLogo />
      <Question />
      <TodayAnswer />
      <LoggedAs />
      <div className="w-full flex items-center justify-center flex-col mt-5 ">
        <div className="text-xs mb-4">
          fastest person to solve today&apos;s question.
        </div>
        <FastestSolver />
      </div>
      <Footer />
    </div>
  );
}
