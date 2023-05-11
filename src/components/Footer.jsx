// React icons
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__section'>
        <div className='footer__section-interests'>
          <h2>Links of interest</h2>
          <a
            href='https://www.adultswim.com/videos/rick-and-morty'
            target='_blank'
          >
            Watch in HBO Max
          </a>
          <a href='https://rickandmortyshop.com/' target='_blank'>
            Rick and Morty Online Shop
          </a>
          <a href='https://rickandmortyapi.com/' target='_blank'>
            Rick and Morty API
          </a>
        </div>
        <div className='footer__section-social'>
          <h2>Contact</h2>
          <div className='icons'>
            <a
              className='icons_icon'
              href='https://www.linkedin.com/in/cgarcia02/'
              target='_blank'
            >
              <BsLinkedin />
            </a>
            <a href='https://www.gmail.com/' target='_blank'>
              <GrMail />
            </a>
            <a href='https://github.com/carjgarcia02/' target='_blank'>
              <BsGithub />
            </a>
            <a
              href='https://www.facebook.com/carlos.garciarosas/'
              target='_blank'
            >
              <BsFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p className='copyright__msg'>
          Copyright <AiOutlineCopyrightCircle className='copyright__logo' />{' '}
          2023 <b>Carlos García Rosas</b> - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
