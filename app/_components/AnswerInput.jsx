"use client";

import React from "react";
import { checkAnwer } from "../_lib/actions";
import Timer from "./Timer";

export default function AnswerInput() {
  return (
    <form
      action={checkAnwer}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex items-center ">
        <Timer />
      </div>
      <div className="flex gap-4 ">
        <input
          type="number"
          className="border-2 border focus:outline-none w-52 sm:w-64  p-4 rounded-lg text-stone-500 focus:bg-stone-100 duration-200 transition-all"
          placeholder="your answer here"
          name="answer_text"
          required
        />
        <button
          type="submit"
          className="bg-purple-400 px-5 rounded-lg hover:bg-purple-500 duration-200 transition-all text-purple-100"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
