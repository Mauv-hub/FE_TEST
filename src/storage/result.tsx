import { makeAutoObservable } from "mobx";
import { getChildResults } from "../action/result";
import {
	TypeChild,
	TypeChildElement,
	TypeParent,
	TypeParentElement,
	TypePicked,
} from "./resultTypes";

class Result {
	// ? Parent row
	parent = [] as TypeParent;
	pickedParent = [] as TypeParent;
	// ? Child row (Sub row)
	child = {} as TypeChild;
	//pickedChild = [] as Array<TypeChildElement>;
	// ? Picked from spcific parent row
	picked = {} as TypePicked;

	constructor() {
		makeAutoObservable(this);
	}

	// ? Select specipick row
	setPickedParent = (picked: TypeParentElement, index: number) => {
		this.pickedParent = [picked];
		getChildResults(picked, index);
	};

	// setPickedChild = (picked: TypeChildElement) => {
	// 	this.pickedChild = [...this.pickedChild, picked];
	// };

	// ? Get all results
	getParentResults = (results: TypeParent) => {
		this.parent = [...results];
	};

	getChildResults = (id: number, results: Array<TypeChildElement>) => {
		this.child[id] = results;
	};

	// ? Store to picked
	addPicked = (name: string, row: TypeChildElement) => {
		if (!this.picked[name]) {
			this.picked[name] = [row];
			return;
		}
		this.picked[name] = [...this.picked[name], row];
		//console.log(toJS(this.picked));
	};

	removePicked = (name: string, row: TypeChildElement) => {
		const target = this.picked[name].findIndex((e) => e[0] === row[0]);
		this.picked[name].splice(target, 1);
		//console.log(toJS(this.picked));
	};
}

const resultStorage = new Result();

export default resultStorage;
