import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const FooterCopyright = () => {
  return (
    <div className='copyright'>
      <p className='copyright__msg'>
        Copyright <AiOutlineCopyrightCircle className='copyright__logo' /> 2023{' '}
        <b>Carlos García Rosas</b> - All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterCopyright;
