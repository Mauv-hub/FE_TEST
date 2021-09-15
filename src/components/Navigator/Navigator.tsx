import React from "react";
import { Link } from "react-router-dom";

import { NavButton } from "../Button/Button";
import "./Navigator.scss";

const Navigator = (): React.ReactElement => {
	return (
		<div className="navContainer">
			<div className="nav">
				<div className="buttons">
					<NavButton text="Alpha" onClick={() => <Link to="" />} />
					<NavButton text="Bravo" onClick={() => <Link to="" />} />
					<NavButton text="Charlie" onClick={() => <Link to="" />} />
					<NavButton text="Delta" onClick={() => <Link to="" />} />
					<NavButton text="Echo" onClick={() => <Link to="" />} />
					<NavButton
						text="Result"
						onClick={() => <Link to="/result" />}
					/>
				</div>
				<div className="info">
					<p>project name</p>
				</div>
			</div>
		</div>
	);
};

export default Navigator;
