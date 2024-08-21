import { getUser } from "../_lib/data-service";
import { auth } from "../_lib/Auth";
import SignOutbutton from "./SignOutbutton";

export default async function LoggedAs() {
  const session = await auth();
  const current_user = await getUser(session?.user?.email);
  if (current_user) {
    return (
      <div className="text-center my-2 flex justify-center ">
        <div className="text-xs p-2 bg-stone-50 w-fit rounded-md flex items-center gap-1 text-stone-500">
          <img src={current_user.picture} alt="" className="w-4 rounded-full" />{" "}
          <strong className="">logged in as: {current_user.username}</strong>
          <SignOutbutton />
        </div>
      </div>
    );
  } else {
    return "";
  }
}
