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
        <li>
                        <a className="liens" href="#portfolio">Accueil</a>
                    </li>
                    <li>
                        <a className="liens" href="#a-propos">A propos</a>
                    </li>
                    <li>
                        <a className="liens" href="#experiences">Expériences</a>
                    </li>
                    <li>
                        <a className="liens" href="#projets">Projets</a>
                    </li>
                    <li>
                        <a className="liens" href="#contact">Contact</a>
                    </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;