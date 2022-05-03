import "./search-box.style.css";
const SearchBox = ({ className, placeholder, searchChange }) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;
