import React from "react";

import logo from "../../assets/hits_logo.png";
import "./Header.scss";

const Header = (): React.ReactElement => {
	return (
		<div className="logoContainer">
			<img src={logo} alt="HITS" />
		</div>
	);
};

export default Header;
