import "./style.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="aside">
      <div className="logo">
        <Link to="/">Sob Hi</Link>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <Link to="/">
            <i className="fa fa-home"></i>Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fa fa-user"></i> About Me
          </Link>
        </li>
        <li>
          <Link to="/services">
            <i className="fa fa-list"></i> Services
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <i className="fa fa-briefcase"></i>My Projects
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <i className="fa fa-envelope"></i> Blog
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fa fa-comments"></i>Contact Us
          </Link>
        </li>
      </ul>
      <div className="copyright">&copy; 2020 Mohamed Sobhi Omer</div>
    </div>
  );
}

export default Navbar;
