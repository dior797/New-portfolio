import { Link } from "react-router-dom";
import '../pageCss/Footer.css'
import { MDBNavbarNav } from 'mdb-react-ui-kit';


function Footer() {
  return (
    <>
      <div className="AllFoot" style={{backgroundColor: "rgb(10, 10, 10)"}}>
        <div className="NameFoot"><i class="fa-solid fa-copyright" style={{ color: "rgba(255, 255, 255, 0.948)" }}></i> 2023 Gabriel Rabago</div>
        <MDBNavbarNav style={{display: "flex", flexDirection: "row", }} id="AllSocialIcon">
          <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: "#3b5998", marginRight: "1.2%" }} href="#!" role="button" id="SocialIcon">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>

          <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: "#ac2bac", marginRight: "1.2%" }} href="#!" role="button" id="SocialIcon">
            <i class="fab fa-instagram fa-lg"></i>
          </a>

          <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: "#0082ca", marginRight: "1.2%" }} href="#!" role="button" id="SocialIcon">
            <i class="fab fa-linkedin-in fa-lg"></i>
          </a>

          <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: "#333333", }} href="#!" role="button" id="SocialIcon">
            <i class="fab fa-github fa-lg"></i>
          </a>
        </MDBNavbarNav>
      </div>
    </>
  );
}

export default Footer;
