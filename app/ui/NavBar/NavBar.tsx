import { NavLink } from "../NavLink/NavLink";

export const NavBar = () => {
  return (
    <nav className="container">
      <ul className="flex">
        <li className="mr-4">
          <NavLink href="/">Home</NavLink>
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
