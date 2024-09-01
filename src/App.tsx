import { useState } from 'react';
import './App.css';
import ApplicationCard from './components/ApplicationCard';
import NavigationTree from './components/NavigationTree';
import useFetchData, { dataProps } from './hooks/useFetchData';

function App() {
	const [selectedLevel, setSelectedLevel] = useState<null | string>(null);
	const { data, error } = useFetchData();

	const handleSelect = (level: string) => {
		setSelectedLevel(level);
	};

	const filteredData = data.filter((apps) => {
		return (
			apps.BCAP1 === selectedLevel ||
			apps.BCAP2 === selectedLevel ||
			apps.BCAP3 === selectedLevel
		);
	});

	console.log(filteredData);

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
					{filteredData.map((app) => (
						<ApplicationCard name={app.name} spend={app.spend} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;
