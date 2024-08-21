import React from "react";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  console.log("IS PENDING", pending);

  return (
    <button
      type="submit"
      className="bg-purple-400 px-5 rounded-lg hover:bg-purple-500 duration-200 transition-all text-purple-100"
      disabled={pending}
    >
      {pending ? <SpinnerMini /> : "SUBMIT"}
    </button>
  );
}
