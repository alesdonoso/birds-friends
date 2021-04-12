import React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Inicio</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/asociacion`}>La Asociación</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/colabora`}>Colabora</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/adoptar`}>Adoptar</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/servicios`}>Servicios</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <Link to={`/contact`}>Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <Footer title={title} />
    </div>
  )
}

export default Layout
