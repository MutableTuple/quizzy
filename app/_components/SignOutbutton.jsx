"use client";

import React from "react";
import { TbLogout } from "react-icons/tb";
import { signOutAction } from "../_lib/actions";
export default function SignOutbutton() {
  return (
    <form className=" " action={signOutAction}>
      <button className="flex items-center justify-center">
        <TbLogout
          size={16}
          className="hover:cursor-pointer hover:text-red-900 duration-200 transition-all"
        />
      </button>
    </form>
  );
}
