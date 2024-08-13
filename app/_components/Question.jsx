import React from "react";
import { MdSportsScore } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import {
  getTodayQuestion,
  getTodayAnswer,
  getTodayQuestionId,
} from "../_lib/data-service";
import Image from "next/image";
export default async function Question({ children }) {
  const todayQuestionId = await getTodayQuestionId();
  const todayQuestion = await getTodayQuestion(todayQuestionId[0].id);
  console.log("TODAY QUESIOTn", todayQuestion);

  return (
    <div className="w-full min-h-80 flex items-center justify-center flex flex-col px-4">
      <h1 className="uppercase text-xs text-stone-500 mt-4">
        Today&apos;s question
      </h1>
      <div className="h-24 w-48 bg-red my-4">
        <img src={todayQuestion[0].question_image} alt="" className=" " />
      </div>
      <br />
      <div className="bg-stone-100  p-4 rounded-lg text-stone-700 w-full lg:max-w-2xl md:max-w-3/4 tracking-wide font-semibold  ">
        <h1>{todayQuestion[0].todays_question}</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 my-6 sm:my-12  gap-4">
        <div className="flex items-center justify-center bg-purple-100 p-1 px-1.5 rounded-lg text-purple-800">
          <MdSportsScore size={24} />
          <span className="text-sm font-bold">x {todayQuestion[0].points}</span>
        </div>
        <div className="flex items-center justify-center bg-yellow-100 p-1 px-2 rounded-lg text-yellow-800">
          <IoTime size={24} />
          <span className="text-sm font-bold">
            &nbsp; {todayQuestion[0].avg_time_to_solve}s
          </span>
        </div>
        <div className="flex items-center justify-center bg-green-100 p-1 px-2 rounded-lg text-green-800">
          <FaCheckCircle size={20} />
          <span className="text-sm font-bold">
            &nbsp; {todayQuestion[0].right}
          </span>
        </div>
        <div className="flex items-center justify-center bg-red-100 p-1 px-2 rounded-lg text-red-800">
          <RxCrossCircled size={24} />
          <span className="text-sm font-bold">
            &nbsp; {todayQuestion[0].wrong}
          </span>
        </div>
      </div>
    </div>
  );
}
