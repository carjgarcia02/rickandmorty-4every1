import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
  const { pageCount, changePage } = useContext(rickMortyContext);

  return (
    <div className='pagination'>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  );
};

export default Pagination;
