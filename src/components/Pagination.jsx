import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';

const Pagination = () => {
  const { pages, currentPage, handlePages } = useContext(rickMortyContext);

  const createOptions = () => {
    const options = [];
    for (let i = 1; i <= pages; i++) {
      options.push(
        <option key={i}>
          {' '}
          {/* There was a key and value before, both equal to i */}
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div className='pages'>
      <p className='pages__title'>
        Page #{' '}
        <select
          className='pages__number'
          name='pages'
          id='pages'
          onChange={handlePages}
          value={currentPage}
        >
          {createOptions(pages).map((item) => item)}
        </select>
      </p>
    </div>
  );
};

export default Pagination;
