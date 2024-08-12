import NavbarElements from "./NavbarElements";

export default function Navbar() {
  return (
    <div className="py-3 border-b border-purple-300 border-b px-4 ">
      <ul className="flex gap-4 justify-center w-full sm:justify-end ">
        <NavbarElements href="/">Today&apos;s Questions</NavbarElements>
        <NavbarElements href="/leaderboards">leaderboard</NavbarElements>
      </ul>
    </div>
  );
}
