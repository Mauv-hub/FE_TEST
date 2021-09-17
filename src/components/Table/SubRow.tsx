import React from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { TypeSubRowProps } from "./types";
import resultStorage from "../../storage/result";

const SubRow = ({
	name,
	sub,
	addListener,
	removeListener,
}: TypeSubRowProps): React.ReactElement => {
	const hasRow = resultStorage.picked[name]?.includes(sub);

	const onClickListener = () => {
		if (!hasRow) {
			addListener(name, sub);
		} else removeListener(name, sub);
	};

	return (
		<tr
			className={hasRow ? "subRowClicked" : "subRow"}
			onClick={() => onClickListener()}
		>
			{sub.map((elem, k) => {
				return (
					<td key={k} className="subRowText">
						{k >= 1
							? parseFloat(toJS(elem)).toFixed(5)
							: parseFloat(toJS(elem))}
					</td>
				);
			})}
		</tr>
	);
};

export default observer(SubRow);
