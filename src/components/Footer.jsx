import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__divider">
        <div className="footer__info">
          <h2>Links of interest</h2>
          <p>
            <a
              href="https://www.adultswim.com/videos/rick-and-morty"
              target="_blank"
            >
              Watch in HBO Max
            </a>
          </p>
          <p>
            <a href="https://rickandmortyshop.com/" target="_blank">
              Rick and Morty Online Shop
            </a>
          </p>
          <p>
            <a href="https://rickandmortyapi.com/" target="_blank">
              Rick and Morty API
            </a>
          </p>
        </div>
        <div className="footer__contact">
          <h2>Contact</h2>
          <div className="icons">
            <a href="#footer">
              <i className="icons__icon">
                <BsLinkedin />
              </i>
            </a>
            <a href="#footer">
              <i className="icons__icon">
                <GrMail />
              </i>
            </a>
            <a href="#footer">
              <i className="icons__icon">
                <BsGithub />
              </i>
            </a>
            <a href="#footer">
              <i className="icons__icon">
                <BsFacebook />
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright__msg">
          Copyright <AiOutlineCopyrightCircle className="copyright__logo" />{" "}
          2022 <b>Carlos García Rosas</b> - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
