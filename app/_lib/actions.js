"use server";

import { auth, signIn, signOut } from "@/app/_lib/Auth";
import updateUserStats, {
  getTimeTakenForSingleQuestion,
  getTodayAnswer,
  getTodayQuestion,
  getUser,
  updateRightQuestions,
  updateWrongQuestions,
  wasTOdayAnswerRight,
  getTodayQuestionId,
} from "./data-service";

import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function checkAnwer(formData) {
  const session = await auth();
  const todayQuestionId = await getTodayQuestionId();
  console.log("TPDAY QUESTION ID", todayQuestionId);
  // user properties
  if (!session) {
    return redirect("/login");
  }
  const logged_in_user = await getUser(session.user.email);

  const total_questions = logged_in_user.total_questions;
  const has_solved_question_today = logged_in_user.has_solved_question_today;

  const has_question_created_today = await getTodayQuestion(
    todayQuestionId[0].id
  );

  // const todays_question = has_question_created_today.map((ques) =>
  //   ques.created_at.substring(0, 10) === todaysDate
  //     ? console.log(ques.id)
  //     : console.log(
  //         "no question created today",
  //         todaysDate.replace(/-/g, "").trim() * 1,
  //         ques.created_at.substring(0, 10).replace(/-/g, "").trim() * 1
  //       )
  // );

  // console.log("has_question_created_today", todays_question);

  const todayAnswerfunc = await getTodayAnswer(
    "c3ac00a7-4bbe-4d04-9d03-0dccd84d8fee"
  );
  const todayAnswer = todayAnswerfunc[0].answer_text;

  const todayQuestion = await getTodayQuestion(todayQuestionId[0].id);
  // submit logic
  const time_taken = formData.get("current_time");
  await getTimeTakenForSingleQuestion(
    time_taken,
    logged_in_user.id,
    total_questions
  );

  if (todayAnswer === formData.get("answer_text")) {
    console.log("correct");
    await updateRightQuestions(todayQuestionId[0].id, todayQuestion[0].right);
    await wasTOdayAnswerRight(logged_in_user.id, true);
    await updateUserStats(
      logged_in_user.id,
      logged_in_user.score * 1,
      todayQuestion[0].points * 1
    );
  } else {
    await updateWrongQuestions(todayQuestionId[0].id, todayQuestion[0].wrong);
    await wasTOdayAnswerRight(logged_in_user.id, false);
  }
}
