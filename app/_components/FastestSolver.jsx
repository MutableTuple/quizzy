import { fastestSolver } from "../_lib/data-service";
import SolvedBy from "./SolvedBy";
import { IoAlertCircle } from "react-icons/io5";
export default async function FastestSolver() {
  const _fastestSolver = await fastestSolver();

  console.log("fatest sover ---- ", _fastestSolver.length);
  return (
    <div className="px-4 sm:px-0">
      {!_fastestSolver.length ? (
        <p className="bg-blue-100 px-4 py-2 text-xs text-blue-500 flex  items-center gap-3 rounded-lg">
          <IoAlertCircle size={24} /> no body has solved this problem correctly
          yet, you could be the first one!
        </p>
      ) : (
        <SolvedBy />
      )}
    </div>
  );
}
