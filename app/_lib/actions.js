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
  // user properties
  if (!session) {
    return redirect("/login");
  }
  const logged_in_user = await getUser(session.user.email);

  const total_questions = logged_in_user.total_questions;
  const has_solved_question_today = logged_in_user.has_solved_question_today;
  console.log("HAS SOLVED TODAY?", has_solved_question_today);
  console.log("lofed in use", logged_in_user);
  console.log(
    "WAS TODAY ASNWER CORECT?",
    logged_in_user.was_today_answer_right
  );

  const todayAnswerfunc = await getTodayAnswer(
    "c3ac00a7-4bbe-4d04-9d03-0dccd84d8fee"
  );
  const todayAnswer = todayAnswerfunc[0].answer_text;
  const todayQuestion = await getTodayQuestion(
    "c3ac00a7-4bbe-4d04-9d03-0dccd84d8fee"
  );

  console.log("RIGHT QUESTIONS", todayQuestion[0].right);

  console.log("TODAY QUestion & answr", todayQuestion, todayAnswer);
  console.log("TIME TAKEN TO SOLVE", formData.get("current_time"));
  console.log(
    "TOTOAL STATS",
    logged_in_user.id,
    logged_in_user.score,
    todayQuestion[0].points
  );
  // submit logic
  const time_taken = formData.get("current_time");
  await getTimeTakenForSingleQuestion(
    time_taken,
    logged_in_user.id,
    total_questions
  );

  if (todayAnswer === formData.get("answer_text")) {
    console.log("correct");
    await updateRightQuestions(
      "c3ac00a7-4bbe-4d04-9d03-0dccd84d8fee",
      todayQuestion[0].right
    );
    await wasTOdayAnswerRight(logged_in_user.id, true);

    await updateUserStats(
      logged_in_user.id,
      logged_in_user.score * 1,
      todayQuestion[0].points * 1
    );
  } else {
    console.log("WRONG");
    await updateWrongQuestions(
      "c3ac00a7-4bbe-4d04-9d03-0dccd84d8fee",
      todayQuestion[0].wrong
    );
    await wasTOdayAnswerRight(logged_in_user.id, false);
  }
}
