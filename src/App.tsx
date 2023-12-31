import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Vision from "./pages/Vision";
import Articles from "./pages/Articles";
import Join from "./pages/Join";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Footer from "./Footer";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<NavBar />
			<ScrollToTop />
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/team" element={<Team />} />
				<Route path="/vision" element={<Vision />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/join" element={<Join />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/*" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

function ScrollToTop(): JSX.Element {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return <></>;
}

export default App;
