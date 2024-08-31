import { useEffect, useState } from 'react';

export type dataProps = {
	id: string;
	name: string;
	spend: number;
	BCAP1: string;
	BCAP2: string;
	BCAP3: string;
};

const useFetchData = () => {
	const [data, setData] = useState<dataProps[]>([]);
	const [error, setError] = useState<null | Error>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('http://localhost:8080/data');
				const result = await res.json();
				setData(result);
			} catch (error) {
				setError(error as Error);
			}
		};

		fetchData();
	}, []);

	return { data, error };
};

export default useFetchData;
