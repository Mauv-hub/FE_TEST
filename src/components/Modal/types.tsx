import React from "react";
import { TypePicked } from "../../storage/resultTypes";

export interface TypeModalProps {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	content: TypePicked;
}
