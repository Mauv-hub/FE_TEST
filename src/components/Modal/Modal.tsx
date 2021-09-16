import React from "react";
import { observer } from "mobx-react-lite";

import "./Modal.scss";
import { TypeModalProps } from "./types";
import { toJS } from "mobx";

const Modal = ({
	show,
	setShow,
	title,
	content,
}: TypeModalProps): React.ReactElement => {
	const names = Object.keys(content);

	return (
		<div
			style={!show ? { display: "none" } : {}}
			className="modalBackground"
		>
			<div className="modalContainer">
				<div className="title">
					<h2>{title}</h2>
					<div className="close" onClick={() => setShow(false)}>
						<p>닫기</p>
					</div>
				</div>
				<div className="content">
					{!names?.length ? (
						<h2>선택된 데이터가 없습니다 =(</h2>
					) : (
						names.map((name, i) => {
							return (
								<div key={i} className="nameCategory">
									<h2>{name}</h2>
									<div className="category">
										<h3>Id</h3>
										<h3>Foxtrot</h3>
										<h3>Golf</h3>
									</div>
									{/* 각각의 Sub row 렌더링 */}
									{content[name].map((sub, k) => {
										return (
											<div key={k} className="subRow">
												<p>{sub[0]}</p>
												<p>
													{parseFloat(sub[1]).toFixed(
														5
													)}
												</p>
												<p>
													{parseFloat(sub[2]).toFixed(
														5
													)}
												</p>
											</div>
										);
									})}
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};

export default observer(Modal);
