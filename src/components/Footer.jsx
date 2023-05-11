import FooterInterests from './FooterInterests';
import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__section'>
        <FooterInterests />
        <FooterSocial />
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
