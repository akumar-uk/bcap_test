import { RangeSliderProps } from '../utils/commonTypes';
import './RangeSlider.css';

const RangeSlider = ({ value, onChange }: RangeSliderProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(Number(event.target.value));
	};

	return (
		<div>
			<span className="rangeTitle">Spending</span>
			<input
				type="range"
				min="0"
				max="100000"
				className="slider"
				onChange={handleChange}
				value={value}
			/>
			<div className="rangeLabel">
				<span>$0</span>
				<span>$100000</span>
			</div>
		</div>
	);
};

export default RangeSlider;
