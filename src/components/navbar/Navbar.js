import { useEffect, useState } from 'react'
import logo from '../images/logo/logo1.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // 
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");


  return (
    <>
      <nav id='navbar' style={{ background: '#6f42c1' }} className={`active ${show && 'hidden navbar fixed-top navbar-expand-lg navbar-light'}`}>
        <div className="container-fluid">
          <a className="navbar-brand mx-5" href="#"><img className='img img-fluid' width={120} src={logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item nav_link">
                <NavLink  activeClassName="" className="nav-link mx-2 text-light" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item nav_link">
                <NavLink  activeClassName="" className="nav-link mx-2 text-light" to="/blog">Blogs</NavLink>
              </li>
              <li className="nav-item nav_link">
                <NavLink  activeClassName="" className="nav-link mx-2 text-light" to="/course">Courses</NavLink>
              </li>
              <li className="nav-item nav_link">
                <NavLink  activeClassName="" className="nav-link mx-2 text-light" to="/feed">Feeds</NavLink>
              </li>
              <li className="nav-item nav_link">
                <NavLink  activeClassName="" className="nav-link mx-2 text-light" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <div className="d-flex mx-5">
              <button className='btn btn-outline-light mx-2'>Login</button>
              <button className='btn btn-outline-light mx-2'>Register</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar