import { NavLink, Link } from "react-router";
import SCUFF_SNAKE from "../assets/branding/scuff-snake-transparent.png";
import "../styles/branding-fonts.css";

export default function NavigationBar() {
  const activeLinkStyling = "text-[#EC1C82]";
  const inactiveLinkStyling = "hover:text-[#EC1C82]";

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
          className={({ isActive }) =>
            isActive ? activeLinkStyling : inactiveLinkStyling
          }
        >
          Features
        </NavLink>
        <NavLink
          to="/interviews"
          className={({ isActive }) =>
            isActive ? activeLinkStyling : inactiveLinkStyling
          }
        >
          Interviews
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? activeLinkStyling : inactiveLinkStyling
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) =>
            isActive ? activeLinkStyling : inactiveLinkStyling
          }
        >
          Scuff Stuff
        </NavLink>
        <NavLink
          to="/patronage"
          className={({ isActive }) =>
            isActive ? activeLinkStyling : inactiveLinkStyling
          }
        >
          Tip Us
        </NavLink>
      </div>
    </nav>
  );
}
