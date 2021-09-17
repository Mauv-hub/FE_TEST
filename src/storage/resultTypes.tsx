export type TypeParent = Array<Array<string>>;
export type TypeParentElement = Array<string>;
export type TypeChild = {
	[name: string]: Array<TypeChildElement>;
};
export type TypeChildElement = Array<string>;
export type TypePicked = {
	[name: string]: Array<TypeChildElement>;
};
export type TypeSearched = string;
export type TypeAlreadySearched = Array<TypeSearched>;
