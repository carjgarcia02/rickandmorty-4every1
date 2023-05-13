import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
  const { pageCount, changePage, pagesRef } = useContext(rickMortyContext);

  return (
    <div className='pagination' ref={pagesRef}>
      <ReactPaginate
        previousLabel={'Prev'}
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
