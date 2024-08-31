import { useState } from 'react';
import { treeProps } from '../utils/dataNestedTree';

const NavItem = ({ level, children }: treeProps) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div onClick={() => setExpanded(!expanded)}>
			<h6 style={{ color: 'red' }}>{level}</h6>
			{expanded &&
				children &&
				children.map((item) => <h6 style={{ color: 'blue' }}>{item.level}</h6>)}
		</div>
	);
};

export default NavItem;
