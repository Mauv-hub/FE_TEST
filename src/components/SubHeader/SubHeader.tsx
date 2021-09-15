import React from "react";

import "./SubHeader.scss";
import { TypeSubHeaderProps } from "./types";

const SubHeader = ({
	title,
	options,
}: TypeSubHeaderProps): React.ReactElement => {
	return (
		<div className="shContainer">
			<div className="title">{title}</div>
			{options}
		</div>
	);
};

export default SubHeader;
