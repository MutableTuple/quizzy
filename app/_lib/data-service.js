import { supabase } from "./supabase";

export async function getUser(email) {
  const { data, error } = await supabase
    .from("Users")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

// export async function getAllUsers() {
//   const { data, error } = await supabase
//     .from("Users")
//     .select("*")
//     .order("score", { ascending: false });
//   return data;
// }

export async function getAllUsers() {
  const { data, error } = await supabase
    .from("Users")
    .select("*")
    .order("score", { ascending: false });

  if (error) {
    console.error("Error fetching users:", error);
    return null;
  }

  // Assign ranks based on score
  let rank = 1;
  let previousScore = data[0]?.score;
  let sameRankCount = 1;
  const updates = [];

  if (data.length > 0) {
    data[0].rank = rank;
    updates.push({ id: data[0].id, rank });

    for (let i = 1; i < data.length; i++) {
      if (data[i].score !== previousScore) {
        rank += sameRankCount; // Increment rank by the number of people who had the same previous score
        sameRankCount = 1;
      } else {
        sameRankCount++;
      }
      data[i].rank = rank;
      previousScore = data[i].score;
      updates.push({ id: data[i].id, rank });
    }
  }

  // Update ranks in the database
  const { error: updateError } = await supabase
    .from("Users")
    .upsert(updates, { onConflict: ["id"] });

  if (updateError) {
    console.error("Error updating user ranks:", updateError);
  }

  return data;
}

export async function fastestSolver() {
  const { data, error } = await supabase
    .from("Users")
    .select("*")
    .eq("was_today_answer_right", true)
    .order("single_time", { ascending: true });
  return data;
}

export async function getTodayQuestion(id) {
  const { data, error } = await supabase
    .from("Question")
    .select(
      "created_at, todays_question, id , points, right, wrong , question_image, avg_time_to_solve, Answer(id, answer_text)"
    )
    .eq("id", id);

  if (error) console.log(error.message);

  return data;
}

export async function getTodayQuestionId() {
  const now = new Date();
  const todayStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).toISOString();
  const tomorrowStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  ).toISOString();

  const { data, error } = await supabase
    .from("Question")
    .select("created_at, id")
    .gte("created_at", todayStart)
    .lt("created_at", tomorrowStart)
    .order("created_at", { ascending: true });

  if (error) console.log(error.message);
  return data;
}

export async function getTodayAnswer(id) {
  const { data, error } = await supabase
    .from("Answer")
    .select("answer_text, id")
    .eq("id", id);
  if (error) console.log(error.message);
  return data;
}
export async function getTimeTakenForSingleQuestion(
  time,
  id,
  total_questions,
  has_solved_question_today
) {
  try {
    const { data, error } = await supabase
      .from("Users")
      .update({
        single_time: time,
        total_questions: (total_questions += 1),
        has_solved_question_today: true,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating single_time:", error.message);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}
export async function updateRightQuestions(id, right) {
  const { data, error } = await supabase
    .from("Question")
    .update({
      right: (right += 1),
    })
    .eq("id", id);

  if (error) console.log(error.message);

  return data;
}

export async function updateUserRank(rank) {
  const { data, error } = await supabase
    .from("Users")
    .update({
      rank: rank,
    })
    .eq("id", id);

  return data;
}

export async function wasTOdayAnswerRight(id, isRight) {
  const { data, error } = await supabase
    .from("Users")
    .update({
      was_today_answer_right: isRight,
    })
    .eq("id", id);
  if (error) console.log(error.message);
  return data;
}
export async function updateWrongQuestions(id, wrong) {
  const { data, error } = await supabase
    .from("Question")
    .update({
      wrong: (wrong += 1),
    })
    .eq("id", id);

  if (error) console.log(error.message);

  return data;
}

export default async function updateUserStats(
  id,
  current_score,
  question_score
) {
  const { data, error } = await supabase
    .from("Users")
    .update({
      score: current_score + question_score,
    })
    .eq("id", id);
  return data;
}

export async function createUser(user) {
  const { data, error } = await supabase.from("Users").insert([user]);
  if (error) {
    console.error(error);
    throw new Error("user could not be created");
  }
  return { data, error };
}
