import { useRouter } from "next/router";
import Link from "components/Link";

// All menus in the navbar
export default function NavLink() {
  const router = useRouter();
  const active = { [router.pathname as string]: "active" };

  return (
    <>
      <li className="pl-2 mr-2">
        <Link href="/" text="Boxes" className={`nav-link ${active["/"]}`} />
      </li>
      <li className="pl-2">
        <Link
          href="/about-me"
          text="About me"
          className={`nav-link mr-2 ${active["/about-me"]}`}
        />
      </li>
    </>
  );
}
