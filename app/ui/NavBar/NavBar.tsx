import { lusitana } from "../fonts";
import { NavLink } from "../NavLink/NavLink";

export const NavBar = () => {
  return (
    <nav className={`container ${lusitana.className}`}>
      <ul className="flex">
        <li className="mr-4">
          <NavLink href="/">Home</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/job-offers">Job offers</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/reviews">Reviews</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/about">About</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
