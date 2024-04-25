import { Link, useLocation, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  // use location instantiation will be used to determine which route im currently in and style the nav accordingly

  return (
    <>
      <footer>
        <div onClick={() => handleClick("/")} id="logo-container">
          <i className="fa-solid fa-bag-shopping"></i>
          <h2>SHOP - IT</h2>
        </div>
        <p>Copyright @{new Date().getFullYear()} - All Rights Reserved</p>
        <div id="footer-icons">
          <a target="_blank" href="https://www.linkedin.com/in/ahmad-searcy">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ahmad-searcy">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ahmad-searcy">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ahmad-searcy">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
