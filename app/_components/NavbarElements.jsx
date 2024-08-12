import Link from "next/link";

export default function NavbarElements({ children, href = "" }) {
  return (
    <Link href={href}>
      {" "}
      <li className="py-2 rounded-full hover:text-purple-600 duration-300 transition-all  uppercase font-normal">
        {children}
      </li>
    </Link>
  );
}
