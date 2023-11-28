import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">accueil</Link>
          <Link to="/a-propos">a-propos</Link>
          <Link to="/experiences">expériences</Link>
          <Link to="/contact">contact</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;