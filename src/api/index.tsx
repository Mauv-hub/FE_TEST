import axios, { AxiosResponse } from "axios";
import { TypeChildElement, TypeParent } from "../storage/resultTypes";

const API = axios.create({
	baseURL: "http://testapi.hits.ai/",
});

export const fetchParentResults = (): Promise<AxiosResponse<TypeParent>> =>
	API.get("/result");

export const fetchChildResults = (
	name: string
): Promise<AxiosResponse<Array<TypeChildElement>>> =>
	API.get(`/result/${name}`);
