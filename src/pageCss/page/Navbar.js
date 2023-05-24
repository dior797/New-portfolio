import { Link } from "react-router-dom";
import '../pageCss/Navbar.css'
import { useState } from 'react'
import Home from "./Home"
import Projects from "./Projects";
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBIcon, MDBNavbarNav, MDBNavbarLink, MDBNavbarToggler, MDBCollapse } from 'mdb-react-ui-kit';

function Top() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' bgColor='rgb(10, 10, 10)'>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <Link to="/" style={{ color: "whitesmoke" }}>
            <b>Gabriel Rabago</b>
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav style={{ marginLeft: "10%" }}>
            <MDBNavbarLink className="navItem">
              <Link to="/" style={{ color: "whitesmoke" }}>
                Resume
              </Link>
            </MDBNavbarLink>
            <MDBNavbarLink>
              <Link to="/projects" style={{ color: "whitesmoke" }}>
                Projects
              </Link>
            </MDBNavbarLink>
            <MDBNavbarLink href='/contact' style={{ color: "whitesmoke" }}>
              Contact
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Top;