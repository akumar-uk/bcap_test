import './App.css';
import ApplicationCard from './components/ApplicationCard';
function App() {
	return (
		<>
			<div className="container">
				<div className="nav">
					<h3>Navigation</h3>
					<div className="menu">Application Capability 1</div>
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
