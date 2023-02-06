import React from "react";
import "./App.css";
import "./components/Navbar/navbar.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { action, originals } from "./urls";
//imports.......

function App() {
	return (
		<div>
			<Navbar />
			<Banner />
			<RowPost url={originals} title="Netflix Originals" />
			<RowPost url={action} title="Action Movies" isSmall />
		</div>
	);
}

export default App;
