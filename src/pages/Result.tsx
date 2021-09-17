/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { getParentResults } from "../action/result";
import { FunctionButton } from "../components/Button/Button";
import Search from "../components/Search/Search";
import SubHeader from "../components/SubHeader/SubHeader";
import resultStorage from "../storage/result";

import "./Result.scss";
import Table from "../components/Table/Table";
import { toJS } from "mobx";
import Modal from "../components/Modal/Modal";
import Loader from "../components/Loader/Loader";

const ResultOptions = (): React.ReactElement => {
	return (
		<div className="options">
			<Search />
			<FunctionButton
				text="전체보기"
				onClick={() => resultStorage.clearSearched()}
			/>
		</div>
	);
};

const Result = (): React.ReactElement => {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		getParentResults();
	}, []);

	return (
		<div className="resultOuterContainer">
			<Modal
				show={showModal}
				setShow={setShowModal}
				title="선택하신 목록입니다."
				content={resultStorage.picked}
			/>
			<div className="resultInnerContainer">
				<SubHeader title="Result" options={<ResultOptions />} />
				{!resultStorage.parent.length ? (
					<Loader />
				) : (
					<Table
						titleArray={["Name", "Foxtrot", "Golf"]}
						targetArray={
							resultStorage.searchName
								? toJS(
										resultStorage.parent.filter(
											(par) =>
												par[0].trim().toLowerCase() ===
												resultStorage.searchName
													.trim()
													.toLowerCase()
										)
								  )
								: toJS(resultStorage.parent)
						}
						onClick={resultStorage.setPickedParent}
						subRowAddListener={resultStorage.addPicked}
						subRowRemoveListener={resultStorage.removePicked}
					/>
				)}
				<div className="bascketContainer">
					<FunctionButton
						text="바구니"
						onClick={() => setShowModal(true)}
					/>
				</div>
			</div>
		</div>
	);
};

export default observer(Result);
