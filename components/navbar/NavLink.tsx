import { useRouter } from "next/router";
import Link from "components/Link";

export default function NavLink() {
  const router = useRouter();
  const active = { [router.pathname as string]: "active" };

  return (
    <>
      <li className="pl-2 mr-3">
        <Link href="/" text="Boxes" className={`nav-link ${active["/"]}`} />
      </li>
      <li className="pl-2 mr-3">
        <Link
          href="/about-me"
          text="About me"
          className={`nav-link ${active["/about-me"]}`}
        />
      </li>
    </>
  );
}
