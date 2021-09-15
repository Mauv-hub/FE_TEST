import { makeAutoObservable } from "mobx";
import { getChildResults } from "../action/result";
import {
	TypeChild,
	TypeChildElement,
	TypeParent,
	TypeParentElement,
} from "./resultTypes";

class Result {
	parent = [] as TypeParent;
	pickedParent = [] as TypeParent;
	child = {} as TypeChild;
	pickedChild = [] as Array<TypeChildElement>;

	constructor() {
		makeAutoObservable(this);
	}

	setPickedParent = (picked: TypeParentElement, index: number) => {
		this.pickedParent = [picked];
		getChildResults(picked, index);
	};

	setPickedChild = (picked: TypeChildElement) => {
		this.pickedChild = [...this.pickedChild, picked];
	};

	getParentResults = (results: TypeParent) => {
		this.parent = [...results];
	};

	getChildResults = (id: number, results: TypeChildElement) => {
		this.child[id] = results;
	};
}

const resultStorage = new Result();

export default resultStorage;
