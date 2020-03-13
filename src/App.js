import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from "./routes";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div className="d-flex flex-column min-vh-100">
				<div className="flex-grow-1">
					<Navbar></Navbar>
					<main>
						<Switch>{routes}</Switch>
					</main>
				</div>
				<Footer></Footer>
			</div>
		</Router>
	);
}

export default App;
