import {
	TypeChildElement,
	TypeParent,
	TypeParentElement,
} from "../../storage/resultTypes";

export interface TypeTableProps {
	titleArray: Array<string>;
	targetArray: TypeParent;
	onClick: (target: TypeParentElement, index: number) => void;
	subRowAddListener: (name: string, row: TypeChildElement) => void;
	subRowRemoveListener: (name: string, row: TypeChildElement) => void;
}

export interface TypeRowProps {
	onClick: (target: TypeParentElement, index: number) => void;
	index: number;
	parentRow: TypeParentElement;
	subRowAddListener: (name: string, row: TypeChildElement) => void;
	subRowRemoveListener: (name: string, row: TypeChildElement) => void;
}

export interface TypeSubRowProps {
	name: string;
	sub: TypeChildElement;
	addListener: (name: string, row: TypeChildElement) => void;
	removeListener: (name: string, row: TypeChildElement) => void;
}
