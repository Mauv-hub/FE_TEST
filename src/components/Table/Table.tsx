import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { TypeParentElement } from "../../storage/resultTypes";
import { TypeTableProps } from "./types";

import "./Table.scss";
import resultStorage from "../../storage/result";

interface TypeRowProps {
	onClick: any;
	index: number;
	target: TypeParentElement;
}

const Row = observer(({ onClick, target, index }: TypeRowProps) => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<>
			<tr
				onClick={() => {
					onClick(target, index);
					setIsClicked((prevState) => !prevState);
				}}
			>
				<td>{target[0]}</td>
				<td>{parseFloat(target[1]).toFixed(5)}</td>
				<td>{parseFloat(target[2]).toFixed(5)}</td>
			</tr>
			<tr>
				{isClicked &&
					resultStorage.child[index] &&
					resultStorage.child[index].map((v, i) => (
						<td key={i}>{parseFloat(v).toFixed(5)}</td>
					))}
			</tr>
		</>
	);
});

const Table = ({
	titleArray,
	targetArray,
	onClick,
}: TypeTableProps): React.ReactElement => {
	return (
		<table className="tableContainer">
			<thead>
				<tr>
					{titleArray?.map((title) => (
						<th key={title}>{title}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{targetArray?.map((target: TypeParentElement, i: number) => (
					<Row key={i} onClick={onClick} target={target} index={i} />
					// <tr key={i} onClick={() => onClick(target, i)}>
					// 	<td>{target[0]}</td>
					// 	<td>{parseFloat(target[1]).toFixed(5)}</td>
					// 	<td>{parseFloat(target[2]).toFixed(5)}</td>
					// </tr>
				))}
			</tbody>
		</table>
	);
};

export default observer(Table);
