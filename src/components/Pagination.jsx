import useFetch from "../hooks/useFetch";

const Pagination = () => {
  const { pages, changePage } = useFetch();

  const createOptions = () => {
    let options = [];
    for (let i = 1; i <= pages; i++) {
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
        <p className="pages__title">
          Page #{" "}
          <select
            className="pages__number"
            name="pages"
            id="pages"
            onChange={changePage}
          >
            {createOptions(pages).map((item) => item)}
          </select>
        </p>
      </div>
    </>
  );
};

export default Pagination;
