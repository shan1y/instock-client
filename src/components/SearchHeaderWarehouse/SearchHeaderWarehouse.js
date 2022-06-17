import "./SearchHeaderWarehouse.scss";

function SearchHeaderWarehouse({ title }) {
  const nameChange = (name) => name;
  return (
    <>
      <div className="search">
        <h1 className="search__title">{nameChange(title)}</h1>
        <form className="search__form form">
          <label className="form__label" htmlFor="search"></label>
          <input
            className="form__input"
            placeholder="Search..."
            name="search"
          ></input>
          <button className="form__button">+ Add New Item</button>
        </form>
      </div>
    </>
  );
}

export default SearchHeaderWarehouse;