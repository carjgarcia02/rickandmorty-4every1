import { useContext } from 'react';
import { rickMortyContext } from '../context/rickMortyContext';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
  const { currentPage, handleChangePage, pageCount, pagesRef } =
    useContext(rickMortyContext);

  return (
    <div className='pagination' ref={pagesRef}>
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={handleChangePage}
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
