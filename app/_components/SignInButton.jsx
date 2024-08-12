import { signInAction } from "../_lib/actions";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-3 text-sm border border-blue-500 px-4 py-2 font-medium rounded-full  hover:bg-blue-100 text-blue-500 duration-300 transition-all ">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="16"
          width="16"
        />
        <span>Continue with Google</span>
      </button>
      <p className="text-xs w-56 mt-4 text-center">
        sign up to see leaderboards, answer daily question & much more...
      </p>
    </form>
  );
}
