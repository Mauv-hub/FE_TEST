import React from "react";

import "./Button.scss";
import { TypeFunctionButtonProps, TypeNavButtonProps } from "./types";

export const NavButton = ({
	text,
	onClick,
}: TypeNavButtonProps): React.ReactElement => {
	return (
		<button className="navButton" onClick={onClick}>
			{text}
		</button>
	);
};

export const FunctionButton = ({
	text,
	onClick,
}: TypeFunctionButtonProps): React.ReactElement => {
	return (
		<button className="functionButton" onClick={onClick}>
			{text}
		</button>
	);
};
