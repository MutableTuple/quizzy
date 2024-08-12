import Navbar from "../_components/Navbar";
import LeaderBoards from "../_components/LeaderBoards";
import { getAllUsers } from "../_lib/data-service";

export default function page() {
  export const revalidate = 25;
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center py-8">
        <LeaderBoards />
      </div>
    </div>
  );
}
