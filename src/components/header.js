import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">Pedro Álvarez</Link>
    </div>
    <ul className="menu">
      <li className="menu-item">
        <Link className="menu-item-link" to="/articulos">
          Artículos
        </Link>
      </li>
      <li className="menu-item">
        <a className="menu-item-link" href="#">
          Proyectos
        </a>
      </li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header