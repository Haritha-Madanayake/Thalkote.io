import Link from "next/link";

export default function Links() {
  return (
    <ul
      id="links"
      className="flex flex-row gap-5 items-center text-xtreme-extra-small sm:text-xtreme-small font-bold"
    >
      <li>
        <Link href="/" className="hover:text-xtreme-orange">
          Home
        </Link>
      </li>
      <li>
        <a href="#about-section" className="hover:text-xtreme-orange">
          About
        </a>
      </li>
      <li>
        <a href="#contact-section" className="hover:text-xtreme-orange">
          Contact
        </a>
      </li>
      <li>
        <a href="#event-plan" className="hover:text-xtreme-orange">
          Event plan
        </a>
      </li>
    </ul>
  );
}
