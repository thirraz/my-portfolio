import { useState } from "react";

import { NavBar } from "./components/NavBar";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen min-w-screen flex  bg-[#120729] overflow-y-hidden">
			<div className="w-screen h-auto">
				<NavBar />
				<Presentation />
				<Projects />
			</div>
		</div>
	);
}

export default App;
