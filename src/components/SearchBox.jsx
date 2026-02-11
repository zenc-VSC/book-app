import React from "react";

import { BsSearch } from "react-icons/bs";
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <BsSearch />
      </button>
    </div>
  );
}

export default SearchBox;
