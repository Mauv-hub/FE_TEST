import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";
import Result from "./pages/Result";

const App = (): React.ReactElement => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Navigator />
				<Switch>
					<Route
						path="/"
						exact
						component={() => <Redirect to="/result" />}
					/>
					<Route path="/result" exact component={Result} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
