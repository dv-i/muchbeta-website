import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Vision from "./pages/Vision";
import Knowledge from "./pages/Knowledge";
import Training from "./pages/Training";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Footer from "./Footer";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/about" index element={<About />} />
				<Route path="/team" index element={<Team />} />
				<Route path="/vision" index element={<Vision />} />
				<Route path="/knowledge" index element={<Knowledge />} />
				<Route path="/training" index element={<Training />} />
				<Route path="/faq" index element={<FAQ />} />
				<Route path="/contact" index element={<Contact />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
