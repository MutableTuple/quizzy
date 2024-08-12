import React from "react";
import { getAllUsers } from "../_lib/data-service";

export const revalidate = 15;

export default async function LeaderBoards() {
  const allUsers = await getAllUsers();
  if (!allUsers) return <p>loading</p>;
  console.log("ALL USeRS", allUsers);
  return (
    <div className="w-full flex flex-col justify-center  items-center gap-4">
      {allUsers.map((user) => (
        <div
          key={user.id}
          className="h-auto md:w-5/12 sm:w-8/12 w-11/12  py-2 px-3 rounded-full border border-2 text-stone-700 text-sm flex gap-2 justify-between hover:bg-purple-100 hover:scale-105 transition-all duration-300 hover:cursor-pointer"
        >
          <img src={user.picture} alt="" className="h-8 w-8 rounded-full" />
          <div className="flex w-full items-center justify-between ">
            <p className="uppercase font-semibold text-xs sm:text-sm text-stone-500">
              {user.username.split(" ")[0]}
            </p>
            <div className="text-center">
              <p className="font-bold text-xs sm:text-sm   ">
                {user.total_questions || "N/A"}
              </p>
              <p className="text-xs">questions</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xs sm:text-sm">
                {user.time || "N/A"}s
              </p>
              <p className="text-xs">avg time</p>
            </div>{" "}
            <div className="text-center">
              <p className="font-bold text-xs sm:text-sm">
                {user.score || "N/A"}
              </p>
              <p className="text-xs">score</p>
            </div>
            <div className="rounded-full text-sm md:text-lg font-bold text-purple-400">
              #{user.rank || "N/A"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
