import useFetchData from '../hooks/useFetchData';

export type treeProps = { level: string; children: treeProps[] };

export const dataNestedTree = () => {
	const { data } = useFetchData();

	const tree: treeProps[] = [];

	data.forEach((appItem) => {
		let level1 = tree.find((item) => item.level === appItem.BCAP1);
		if (!level1) {
			let level1: treeProps = { level: appItem.BCAP1, children: [] };
			tree.push(level1);
			tree.sort((a, b) => a.level.localeCompare(b.level));
		}

		let level2 = level1?.children.find(
			(item: treeProps) => item.level === appItem.BCAP2
		);
		if (!level2) {
			let level2: treeProps = { level: appItem.BCAP2, children: [] };
			level1?.children.push(level2);
			level1?.children.sort((a, b) => a.level.localeCompare(b.level));
		}

		let level3 = level2?.children.find((item) => item.level === appItem.BCAP3);
		if (!level3) {
			let level3 = { level: appItem.BCAP3, children: [] };
			level2?.children.push(level3);
			level2?.children.sort((a, b) => a.level.localeCompare(b.level));
		}
	});

	return tree;
};
