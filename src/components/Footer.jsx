const Footer = () => {
  return (
    <div>
      <div>
        <div className="info">
          <h3>Links of interest</h3>
          <p>
            <a href="https://www.adultswim.com/videos/rick-and-morty">
              Watch Rick and Morty in HBO Max
            </a>
          </p>
          <p>
            <a href="https://rickandmortyshop.com/">
              Rick and Morty Online Shop
            </a>
          </p>
          <p>
            <a href="https://rickandmortyapi.com/">Rick and Morty API</a>
          </p>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <div className="icons">
            <i>Linkedin</i>
            <i>Github</i>
            <i>Facebook</i>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright (c) 2022 Carlos García Rosas</p>
      </div>
    </div>
  );
};

export default Footer;
