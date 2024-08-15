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
  getTodayQuestionIdStatus,
  updateTodayQuestionIdStatus,
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

  const todayAnswerfunc = await getTodayAnswer(
    "c3ac00a7-4bbe-4d04-9d03-0dccd84d8fee"
  );
  const todayAnswer = todayAnswerfunc[0].answer_text;

  const todayQuestion = await getTodayQuestion(todayQuestionId[0].id);

  const updateIdandStatus = await updateTodayQuestionIdStatus(
    logged_in_user.id,
    todayQuestionId[0].id
  );
  // submit logic
  const time_taken = formData.get("current_time");
  await getTimeTakenForSingleQuestion(
    time_taken,
    logged_in_user.id,
    total_questions
  );
  // update stats & id for user

  //
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
