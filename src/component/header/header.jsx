import { Link } from "react-router-dom"
import React from "react";

const Header = () => {
  React.useEffect(() => {
    let nav = document.querySelector("nav");  
    let hamburger = document.querySelector("i");
    hamburger.addEventListener("click", () => {
      nav.classList.add("open");
    });
    // toggle nav sur liens
    let liens = document.querySelectorAll(".liens");
    liens.forEach((liens) => {
      liens.addEventListener("click", () => {
        nav.classList.remove("open");
      })    
    });
  })
  return (
    <header>
      <nav>
        <i id="hamburger">hamburger</i>
        <ul>
          <Link to="#portfolio" className="liens">accueil</Link>
          <Link to="#a-propos" className="liens">a-propos</Link>
          <Link to="#experiences" className="liens">expériences</Link>
          <Link to="#projets" className="liens">projets</Link>
          <Link to="#contact" className="liens">contact</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;