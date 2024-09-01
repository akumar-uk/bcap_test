import { useState } from 'react';
import { treeProps } from '../utils/dataNestedTree';
import './NavItem.css';
import { handleSelectProps } from '../utils/commonTypes';

const NavItem = ({
	level,
	children,
	handleSelect,
}: treeProps & handleSelectProps) => {
	const [expanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded(!expanded);
		handleSelect(level);
	};

	return (
		<div>
			<div onClick={handleClick} className="navTitle">
				<div className="navButton">
					<div>{children.length > 0 && (!expanded ? '+' : '-')}</div>
					{level}
				</div>
			</div>

			{expanded && children && (
				<div className="navIndent">
					{children.map((item) => (
						<NavItem {...item} handleSelect={handleSelect} />
					))}
				</div>
			)}
		</div>
	);
};

export default NavItem;
