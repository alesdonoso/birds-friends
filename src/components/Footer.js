import React from "react"
import { Link } from "gatsby"

const Footer = ({ title }) => {
  return (
    <footer className="site-foot">
      <div className="row container no-gutters ">
        <div className="col col-6 col-left">
          <p>
            <Link to="/politica-privacidad">Política de Privacidad</Link>
          </p>
          <p>
            <Link to="/politica-cookies">Política de Cookies</Link>
          </p>
          <p>
            <Link to="/aviso-legal">Aviso Legal</Link>
          </p>
        </div>
        <div className="col col-6 col-right">
          <p className="credits">
            &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>{" "}
          </p>
          <div className="social-icons">
            <a
              className="social-icon facebook"
              href="https://www.facebook.com/asociacionbirdsfriends/"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../social-icons/facebook.svg" />
            </a>
            <a
              className="social-icon instagram"
              href="https://www.instagram.com/asociacion.birds_friends_/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../social-icons/instagram.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
