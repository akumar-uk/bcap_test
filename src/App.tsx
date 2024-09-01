import { useState } from 'react';
import './App.css';
import ApplicationCard from './components/ApplicationCard';
import NavigationTree from './components/NavigationTree';

function App() {
	const [selectedLevel, setSelectedLevel] = useState<null | string>(null);

	const handleSelect = (level: string) => {
		setSelectedLevel(level);
	};

	console.log(selectedLevel);

	return (
		<>
			<div className="container">
				<div className="nav">
					<h3>Navigation</h3>
					<div className="menu">
						<NavigationTree handleSelect={handleSelect} />
					</div>
					<div className="filter">
						<h3>Filter</h3>
						Filter
					</div>
				</div>
				<div className="dashboard">
					<ApplicationCard name="Application 2" spend={2002} />
					<ApplicationCard name="Application 2" spend={2002} />
					<ApplicationCard name="Application 2" spend={2002} />
					<ApplicationCard name="Application 2" spend={2002} />
					<ApplicationCard name="Application 2" spend={2002} />
				</div>
			</div>
		</>
	);
}

export default App;
