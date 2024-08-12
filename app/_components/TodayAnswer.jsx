import React from "react";
import { getTodayAnswer, getUser } from "../_lib/data-service";
import AnswerInput from "./AnswerInput";
import { auth } from "@/app/_lib/Auth";

export default async function TodayAnswer() {
  const session = await auth();

  const logged_in_user = await getUser(session?.user?.email);

  // const todayAnswerfunc = await getTodayAnswer(
  //   "c3ac00a7-4bbe-4d04-9d03-0dccd84d8fee"
  // );

  // const todayAnswer = todayAnswerfunc[0].answer_text;
  // console.log("TODAY ANSWER", todayAnswer);
  return (
    <div className="flex justify-center gap-4  ">
      {!logged_in_user?.has_solved_question_today ? (
        <AnswerInput />
      ) : (
        <p className="text-green-700 py-2 px-3 bg-green-100 border border-2 border-green-500 rounded-lg text-sm font-semibold">
          You&apos;ve already solved today&apos;s question 🥳
        </p>
      )}
    </div>
  );
}
