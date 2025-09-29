import { NavLink, Link } from "react-router";
import SCUFF_SNAKE from "../assets/branding/scuff-snake-original.jpeg";

export default function NavigationBar() {
  return (
    <nav>
      <div className="flex justify-center align-center">
        <img
          src={SCUFF_SNAKE}
          alt="tattoo-style snake of the scuff logo"
          className="h-48"
        />
      </div>
      <hr className="mx-4" />
      <div className="flex gap-2 justify-around">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Features
        </NavLink>
        <NavLink
          to="/interviews"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Interviews
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Buy Stuff
        </NavLink>
        <NavLink
          to="/patronage"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Tip Us
        </NavLink>
      </div>
    </nav>
  );
}
