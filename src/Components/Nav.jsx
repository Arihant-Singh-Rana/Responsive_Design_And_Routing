import React from "react";
import sty from "./Nav.module.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className={sty.par}>
      <h1 className={sty.Heading}> TechVenture</h1>
      <ul className={sty.Nav_Container}>
        <Link to="/">
          <li className={sty.Nav_items}>
            <i class="fa-solid fa-house-chimney-window" />
            <div className={sty.nav_names}>Home</div>
          </li>
        </Link>

          <Link to="/Memes">
        <li className={sty.Nav_items}>
            <i class="fa-regular fa-face-laugh-squint" />
            <div className={sty.nav_names}>Memes</div>
        </li>
          </Link>
          <Link to="/News">
        <li className={sty.Nav_items}>
            <i class="fa-regular fa-newspaper" />
            <div className={sty.nav_names}>News</div>
        </li>
          </Link>
          <Link to="/Notes">
        <li className={sty.Nav_items}>
            <i class="fa-regular fa-note-sticky" />
            <div className={sty.nav_names}>Notes</div>
        </li>
          </Link>
          <Link to="/about">
        <li className={sty.Nav_items}>
            <i class="fa-solid fa-address-card" />
            <div className={sty.nav_names}>About Us</div>
        </li>
          </Link>
      </ul>
    </nav>
  );
}
