import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { TypeSubRowProps } from "./types";

const SubRow = ({
	name,
	sub,
	addListener,
	removeListener,
}: TypeSubRowProps): React.ReactElement => {
	const [isClicked, setIsClicked] = useState(false);

	const onClickListener = () => {
		setIsClicked((prevState) => !prevState);
		if (!isClicked) {
			addListener(name, sub);
		} else removeListener(name, sub);
	};

	return (
		<tr
			className={isClicked ? "subRowClicked" : "subRow"}
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
