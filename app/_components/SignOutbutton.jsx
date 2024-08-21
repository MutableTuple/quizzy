"use client";

import React from "react";
import { TbLogout } from "react-icons/tb";
import { signOutAction } from "../_lib/actions";
export default function SignOutbutton() {
  return (
    <form
      className="bg-red-200 p-1 rounded-full text-red-400 "
      action={signOutAction}
    >
      <button>
        <TbLogout
          size={16}
          className="hover:cursor-pointer hover:text-red-700 duration-200 transition-all"
        />
      </button>
    </form>
  );
}
