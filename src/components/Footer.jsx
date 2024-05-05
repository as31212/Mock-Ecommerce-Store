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
      <footer className="flex justify-around items-center gap-3 bg-black text-white p-5">
        <div className="flex gap-1 text-2xl" onClick={() => handleClick("/")} id="logo-container">
          <i className="fa-solid fa-bag-shopping text-orange-400"></i>
          <h2 className="">SHOP-IT</h2>
        </div>
        <p>Copyright @{new Date().getFullYear()} - All Rights Reserved</p>
        <div className="flex gap-5" id="footer-icons">
          <a className="hover:text-orange-400 text-3xl duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/ahmad-searcy">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className="hover:text-orange-400 text-3xl duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/ahmad-searcy">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className="hover:text-orange-400 text-3xl duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/ahmad-searcy">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="hover:text-orange-400 text-3xl duration-150 ease-in-out" target="_blank" href="https://www.linkedin.com/in/ahmad-searcy">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
