const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="Search">
      <input
        className="input_search"
        type="text"
        value={search}
        onChange={handleSearch}
        ref={searchInput}
        placeholder="Search a character"
      />
    </div>
  );
};

export default Search;
