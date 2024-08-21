import React from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import SpinnerMini from "./SpinnerMini";

const notify = () =>
  toast.success("your answer has been successfully submitted!");

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  console.log("IS PENDING", pending);

  return (
    <button
      type="submit"
      className="bg-purple-400 px-5 rounded-lg hover:bg-purple-500 duration-200 transition-all text-purple-100"
      onClick={notify}
      disabled={pending}
    >
      {pending ? <SpinnerMini /> : "SUBMIT"}
    </button>
  );
}
