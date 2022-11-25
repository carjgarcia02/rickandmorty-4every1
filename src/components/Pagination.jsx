const Pagination = ({ totalPages, changePage }) => {
  const createOptions = (totalPages) => {
    let options = [];
    for (let i = 1; i <= totalPages; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <>
      <div className="pagination">
        <div>
          <span>PAGE # </span>
          <select name="pages" id="pages" onChange={changePage}>
            {createOptions(totalPages).map((item) => item)}
          </select>
        </div>
      </div>
    </>
  );
};

export default Pagination;
