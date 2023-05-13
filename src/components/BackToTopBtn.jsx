import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';

const BackToTopBtn = () => {
  const { scrollToPagination } = useContext(rickMortyContext);

  return (
    <button className='backToTop' onClick={scrollToPagination}>
      {' '}
      Back to top{' '}
    </button>
  );
};

export default BackToTopBtn;
