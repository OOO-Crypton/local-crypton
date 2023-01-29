import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Start } from "./page";
import styles from "./App.module.css";
import { AppContext } from "./context/App.context";

export function App() {
	const { auth } = useContext(AppContext);
	const [isLoad, setIsLoad] = useState<boolean>(true);

	useEffect(() => {
		setIsLoad(false);
	}, []);

	return isLoad ? (
		<div className={styles.ldsRoller}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	) : auth ? (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	) : (
		<Routes>
			<Route path="/" element={<Start />} />
		</Routes>
	);
}
