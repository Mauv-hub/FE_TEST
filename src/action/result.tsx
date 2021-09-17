import resultStorage from "../storage/result";
import * as api from "../api";
import {
	TypeChildElement,
	TypeParent,
	TypeParentElement,
} from "../storage/resultTypes";
import { action } from "mobx";

export const getParentResults = action(async (): Promise<TypeParent> => {
	resultStorage.parent = [];
	const { data } = await api.fetchParentResults();
	resultStorage.getParentResults(data);

	return data;
});

export const getChildResults = action(
	async (
		picked: TypeParentElement,
		id: string
	): Promise<Array<TypeChildElement> | boolean> => {
		// 만약 기존에 불렀던 값이 존재하면 api를 부르지 않음
		if (resultStorage.child[id]) return false;

		const name = picked[0];
		const { data } = await api.fetchChildResults(name);
		resultStorage.getChildResults(id, data);

		return data;
	}
);
