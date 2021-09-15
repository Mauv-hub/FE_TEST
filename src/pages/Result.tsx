import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { getParentResults } from "../action/result";
import { FunctionButton } from "../components/Button/Button";
import Search from "../components/Search/Search";
import SubHeader from "../components/SubHeader/SubHeader";
import resultStorage from "../storage/result";

import "./Result.scss";
import Table from "../components/Table/Table";
import { toJS } from "mobx";

const ResultOptions = (): React.ReactElement => {
	return (
		<div className="options">
			<Search />
			<FunctionButton
				text="다운로드"
				onClick={() => alert("download clicked!")}
			/>
		</div>
	);
};

const Result = (): React.ReactElement => {
	useEffect(() => {
		getParentResults();
	}, []);

	return (
		<div className="resultOuterContainer">
			<div className="resultInnerContainer">
				<SubHeader title="Result" options={<ResultOptions />} />
				<Table
					titleArray={["Name", "Foxtrot", "Golf"]}
					targetArray={toJS(resultStorage.parent)}
					onClick={resultStorage.setPickedParent}
				/>
			</div>
		</div>
	);
};

export default observer(Result);
