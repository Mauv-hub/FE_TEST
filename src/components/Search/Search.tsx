import React, { useState } from "react";
import resultStorage from "../../storage/result";

import "./Search.scss";

const Search = (): React.ReactElement => {
	const [searchText, setSearchText] = useState("");

	const onClickSubmit = (e: any) => {
		e.preventDefault();

		resultStorage.setSearched(e.target.search.value);
	};

	return (
		<form className="searchContainer" onSubmit={onClickSubmit}>
			<input
				type="search"
				id="search"
				value={searchText}
				onChange={(t) => setSearchText(t.target.value)}
				required
			/>
			<button type="submit">검색</button>
		</form>
	);
};

export default Search;
