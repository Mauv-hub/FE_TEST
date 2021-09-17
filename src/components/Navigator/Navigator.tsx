import React, { useState } from "react";
import { Link } from "react-router-dom";

import { NavButton } from "../Button/Button";
import "./Navigator.scss";

const Navigator = (): React.ReactElement => {
	const [clicked, setClicked] = useState("result");

	return (
		<div className="navContainer">
			<div className="nav">
				<div className="buttons">
					<NavButton
						id="alpha"
						isClicked={Boolean(clicked === "alpha")}
						text="Alpha"
						onClick={(e) => {
							setClicked(e.target.id);
							return <Link to="" />;
						}}
					/>
					<NavButton
						id="bravo"
						isClicked={Boolean(clicked === "bravo")}
						text="Bravo"
						onClick={(e) => {
							setClicked(e.target.id);
							return <Link to="" />;
						}}
					/>
					<NavButton
						id="charlie"
						isClicked={Boolean(clicked === "charlie")}
						text="Charlie"
						onClick={(e) => {
							setClicked(e.target.id);
							return <Link to="" />;
						}}
					/>
					<NavButton
						id="delta"
						isClicked={Boolean(clicked === "delta")}
						text="Delta"
						onClick={(e) => {
							setClicked(e.target.id);
							return <Link to="" />;
						}}
					/>
					<NavButton
						id="echo"
						isClicked={Boolean(clicked === "echo")}
						text="Echo"
						onClick={(e) => {
							setClicked(e.target.id);
							return <Link to="" />;
						}}
					/>
					<NavButton
						id="result"
						isClicked={Boolean(clicked === "result")}
						text="Result"
						onClick={(e) => {
							setClicked(e.target.id);
							return <Link to="/result" />;
						}}
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
