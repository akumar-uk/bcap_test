import './ApplicationCard.css';

type ApplicationCardProps = {
	name: string;
	spend: number;
};

const ApplicationCard = ({ name, spend }: ApplicationCardProps) => {
	return (
		<div className="card_container">
			<h4>{name}</h4>
			<p>Total spend: ${spend}</p>
		</div>
	);
};

export default ApplicationCard;
