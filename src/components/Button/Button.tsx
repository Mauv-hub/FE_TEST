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
	margin = "0",
	padding = "0.5rem 1rem",
	borderColor = "transparent",
	color = "#fff",
	fontSize = "1.2rem",
	background = "#8081f2",
	borderRadius = "1rem",
	text,
	onClick,
	disabled = false,
}: TypeFunctionButtonProps): React.ReactElement => {
	return (
		<button
			style={{
				margin: margin,
				padding: padding,
				borderColor: borderColor,
				color: color,
				fontSize: fontSize,
				background: background,
				borderRadius: borderRadius,
				boxShadow: "1px 1px 4px #000",
			}}
			disabled={disabled}
			className="functionButton"
			onClick={onClick}
		>
			{text}
		</button>
	);
};
