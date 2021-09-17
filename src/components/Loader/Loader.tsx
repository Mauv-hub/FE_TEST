import React from "react";

import "./Loader.scss";

const Loader = (): React.ReactElement => {
	return (
		<div className="loaderContainer">
			<h1>데이터를 불러오는 중입니다...</h1>
		</div>
	);
};

export default Loader;
