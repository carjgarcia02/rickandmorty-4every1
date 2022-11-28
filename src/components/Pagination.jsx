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
      <div className="pages">
        <span className="pages__title">Page # </span>
        <select
          className="pages__number"
          name="pages"
          id="pages"
          onChange={changePage}
        >
          {createOptions(totalPages).map((item) => item)}
        </select>
      </div>
    </>
  );
};

export default Pagination;
