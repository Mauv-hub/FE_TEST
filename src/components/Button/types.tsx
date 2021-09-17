export interface TypeNavButtonProps {
	id: string;
	text: string;
	isClicked: boolean;
	onClick: (e: any) => void;
}

export interface TypeFunctionButtonProps {
	margin?: string;
	padding?: string;
	borderColor?: string;
	color?: string;
	fontSize?: string;
	background?: string;
	borderRadius?: string;
	text: string;
	onClick: () => void;
	disabled?: boolean;
}
