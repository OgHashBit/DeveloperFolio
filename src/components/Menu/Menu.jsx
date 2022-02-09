import React from "react";
import "./menu.css";
// Router
import { NavLink } from "components/Nav/NavLink/NavLink";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <NavLink
          text="About"
          path="portfolio"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Collections"
          path="testimonials"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Claim"
          path="contact"
          onClick={() => setMenuOpen(false)}
        />
      </ul>
    </div>
  );
};
