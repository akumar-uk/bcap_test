import { dataNestedTree } from '../utils/dataNestedTree';
import NavItem from './NavItem';

const NavigationTree = () => {
	const navtree = dataNestedTree();

	return (
		<div>
			{navtree.map((item) => (
				<NavItem {...item} />
			))}
		</div>
	);
};

export default NavigationTree;
