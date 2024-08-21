import React from "react";
import {
  getTodayAnswer,
  getTodayQuestionIdStatus,
  getTodayQuestionId,
  getUser,
} from "../_lib/data-service";
import AnswerInput from "./AnswerInput";
import { auth } from "@/app/_lib/Auth";
import { FaCheckCircle } from "react-icons/fa";
export default async function TodayAnswer() {
  const session = await auth();
  const logged_in_user = await getUser(session?.user?.email);

  const today_question_id = await getTodayQuestionId();
  // console.log(logged_in_user.id);
  const today_question_id_and_status = await getTodayQuestionIdStatus(
    logged_in_user?.id
  );
  let todays_question_user_id;
  if (logged_in_user) {
    todays_question_user_id =
      today_question_id_and_status[0]?.today_question_id_and_status
        ?.question_id;
  } else {
    ("not logged in");
  }
  // console.log("ID", todays_question_user_id);
  // console.log("ID", today_question_id[0]?.id);

  if (todays_question_user_id === today_question_id[0].id) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  // const todayAnswerfunc = await getTodayAnswer(
  //   "c3ac00a7-4bbe-4d04-9d03-0dccd84d8fee"
  // );

  // const todayAnswer = todayAnswerfunc[0].answer_text;
  // console.log("TODAY ANSWER", todayAnswer);
  return (
    <div className="flex justify-center gap-4  ">
      {todays_question_user_id !== today_question_id[0]?.id ? (
        <AnswerInput />
      ) : (
        <p className="text-green-700 py-2 px-3 bg-green-200 border border-1 border-green-500 rounded-lg text-sm font-semibold mx-2 flex  items-center gap-2">
          <FaCheckCircle size={24} />
          You&apos;ve already solved today&apos;s question,
          <br /> come back tommorow for another one! 🥳
        </p>
      )}
    </div>
  );
}
