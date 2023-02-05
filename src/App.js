import React from "react";
import "./App.css";
import "./components/Navbar/navbar.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import axios from "axios";
//imports.......

function App() {
	return (
		<div>
			<Navbar />
			<Banner />
			<RowPost />
		</div>
	);
}

export default App;
