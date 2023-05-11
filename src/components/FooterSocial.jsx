import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

const FooterSocial = () => {
  return (
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
        <a href='https://www.facebook.com/carlos.garciarosas/' target='_blank'>
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
