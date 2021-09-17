import { makeAutoObservable } from "mobx";
import { getChildResults as apiGetChildResults } from "../action/result";
import {
	TypeAlreadySearched,
	TypeChild,
	TypeChildElement,
	TypeParent,
	TypeParentElement,
	TypePicked,
	TypeSearched,
} from "./resultTypes";

class Result {
	// ? Parent row
	parent = [] as TypeParent;
	pickedParent = [] as TypeParent;
	// ? Child row (Sub row)
	child = {} as TypeChild;
	// ? Picked from spcific parent row
	picked = {} as TypePicked;
	// ? Searched name
	searchName = "" as TypeSearched;
	alreadySearchedName = [] as TypeAlreadySearched;

	constructor() {
		makeAutoObservable(this);
	}

	// ? Select specipick row
	setPickedParent = (picked: TypeParentElement, name: string) => {
		this.pickedParent = [picked];
		apiGetChildResults(picked, name);
	};

	// ? Get all results
	getParentResults = (results: TypeParent) => {
		this.parent = [...results];
	};

	getChildResults = (id: string, results: Array<TypeChildElement>) => {
		this.child[id] = results;
	};

	// ? Store to picked
	addPicked = (name: string, row: TypeChildElement) => {
		if (!this.picked[name]) {
			this.picked[name] = [row];
			return;
		}
		this.picked[name] = [...this.picked[name], row];
	};

	removePicked = (name: string, row: TypeChildElement) => {
		const target = this.picked[name].findIndex((e) => e[0] === row[0]);
		this.picked[name].splice(target, 1);
		if (!this.picked[name].length) {
			delete this.picked[name];
		}
	};

	clearPicked = () => {
		this.picked = {};
	};

	// ? Set earched text
	setSearched = (text: string) => {
		this.searchName = text;

		// ? 기존에 검색한 내역을 상기시켜 주기 위한 UX
		const hasValue = this.alreadySearchedName.includes(text);
		if (!hasValue) {
			this.alreadySearchedName.push(text);
		}
	};

	clearSearched = () => {
		this.searchName = "";
		this.alreadySearchedName = [];
	};
}

const resultStorage = new Result();

export default resultStorage;
