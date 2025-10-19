import { NavLink, Link } from "react-router";
import SCUFF_SNAKE from "../assets/branding/scuff-snake-transparent.png";
import "../styles/branding-fonts.css";

export default function NavigationBar() {
  return (
    <nav>
      <div className="flex justify-center align-center">
        <img
          src={SCUFF_SNAKE}
          alt="tattoo-style snake of the scuff logo"
          className="h-24 mt-12 mb-6"
        />
      </div>
      <hr className="mx-4 text-[#737373] opacity-[0.4]" />
      <div className="flex gap-2 justify-around mt-4 text-lg font-the-seasons">
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
          Scuff Stuff
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
