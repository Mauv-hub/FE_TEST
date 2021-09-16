import React from "react";
import { observer } from "mobx-react-lite";
import { TypeParentElement } from "../../storage/resultTypes";
import { TypeTableProps } from "./types";

import "./Table.scss";
import Row from "./Row";

const Table = ({
	titleArray,
	targetArray,
	onClick,
	subRowAddListener,
	subRowRemoveListener,
}: TypeTableProps): React.ReactElement => {
	return (
		<div className="tableContainer">
			<table>
				<thead>
					<tr>
						{titleArray?.map((title) => (
							<th key={title}>{title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{targetArray?.map(
						(target: TypeParentElement, i: number) => (
							<Row
								key={i}
								onClick={onClick}
								parentRow={target}
								index={i}
								subRowAddListener={subRowAddListener}
								subRowRemoveListener={subRowRemoveListener}
							/>
						)
					)}
				</tbody>
			</table>
		</div>
	);
};

export default observer(Table);
