import { useCallback, useMemo, useState } from 'react';
import './App.css';
import ApplicationCard from './components/ApplicationCard';
import NavigationTree from './components/NavigationTree';
import useFetchData from './hooks/useFetchData';
import RangeSlider from './components/RangeSlider';

function App() {
	const [selectedLevel, setSelectedLevel] = useState<null | string>(null);
	const { data, error } = useFetchData();
	const [maxSpending, setMaxSpending] = useState<number>(100000);

	const handleSelect = useCallback((level: string) => {
		setSelectedLevel(level);
	}, []);

	const filteredData = useMemo(() => {
		return data.filter((apps) => {
			const withInRange = apps.spend <= maxSpending;
			const levelsData =
				apps.BCAP1 === selectedLevel ||
				apps.BCAP2 === selectedLevel ||
				apps.BCAP3 === selectedLevel;
			return withInRange && levelsData;
		});
	}, [data, maxSpending, selectedLevel]);

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	console.log('maxSpending ->', maxSpending);

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
						<RangeSlider value={maxSpending} onChange={setMaxSpending} />
					</div>
				</div>
				<div className="dashboard">
					{filteredData.map((app) => (
						<ApplicationCard key={app.id} name={app.name} spend={app.spend} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;
