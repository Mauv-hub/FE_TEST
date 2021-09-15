import React from "react";

import "./Search.scss";

const Search = (): React.ReactElement => {
	return (
		<form className="searchContainer">
			<input type="search" />
			<button type="submit">검색</button>
		</form>
	);
};

export default Search;
