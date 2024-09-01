import { handleSelectProps } from '../utils/commonTypes';
import { dataNestedTree } from '../utils/dataNestedTree';
import NavItem from './NavItem';

const NavigationTree = ({ handleSelect }: handleSelectProps) => {
	const navtree = dataNestedTree();
	console.log(navtree);

	return (
		<div>
			{navtree.map((item) => (
				<NavItem {...item} handleSelect={handleSelect} />
			))}
		</div>
	);
};

export default NavigationTree;
