import React from "react";
import Navbar from "./_components/Navbar";
import Question from "./_components/Question";
import Footer from "./_components/Footer";
import SolvedBy from "./_components/SolvedBy";
import { signOutAction } from "./_lib/actions";
import SignInButton from "./_components/SignInButton";
import TodayAnswer from "./_components/TodayAnswer";
import FastestSolver from "./_components/FastestSolver";
export default function Page() {
  return (
    <div className="selection:bg-purple-400 selection:text-white">
      <Navbar />
      <Question />
      {/* <h1 className="text-2xl text-stone-600">
          find the pi value of 500x34 ?
        </h1>
      </Question> */}

      <TodayAnswer />

      <div className="w-full flex items-center justify-center flex-col mt-5 ">
        <div className="text-xs mb-4">
          fastest person to solve today's question.
        </div>
        <FastestSolver />
      </div>
      <Footer />
    </div>
  );
}
