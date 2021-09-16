/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import resultStorage from "../../storage/result";
import { TypeRowProps } from "./types";
import SubRow from "./SubRow";

const Row = observer(
	({
		onClick,
		parentRow,
		index,
		subRowAddListener,
		subRowRemoveListener,
	}: TypeRowProps) => {
		const [isClicked, setIsClicked] = useState(false);

		return (
			<>
				<tr
					className={!isClicked ? "parentRow" : "parentRowClicked"}
					onClick={() => {
						onClick(parentRow, index);
						setIsClicked((prevState) => !prevState);
					}}
				>
					{parentRow.map((elem, i) => (
						<td key={i}>
							{i >= 1
								? parentRow.length - 1 == i
									? isClicked
										? `${parseFloat(elem).toFixed(
												5
										  )}\u2001닫기`
										: `${parseFloat(elem).toFixed(
												5
										  )}\u2001열기`
									: parseFloat(elem).toFixed(5)
								: elem}
						</td>
					))}
				</tr>
				{isClicked &&
					resultStorage.child[index] &&
					resultStorage.child[index].map((sub, i) => {
						return (
							<SubRow
								key={i}
								name={parentRow[0]}
								sub={sub}
								addListener={subRowAddListener}
								removeListener={subRowRemoveListener}
							/>
						);
					})}
			</>
		);
	}
);

export default Row;
